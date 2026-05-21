APP_NAME    := ivv-marketing
DEPLOY_DIR  := /var/www/html/$(APP_NAME)
STATIC_DIR  := /var/www/html/$(APP_NAME)-static
SERVICE     := $(APP_NAME).service
PORT        := 3060

-include .env
export

.PHONY: all build deploy install uninstall start stop restart status clean build-static deploy-static deploy-ftp

all: build

## Build: install deps and compile
build:
	pnpm install --frozen-lockfile
	pnpm run build

## Deploy: copy build artefacts to DEPLOY_DIR and install prod deps
deploy: build
	sudo install -d $(DEPLOY_DIR)
	sudo rsync -a --delete .next/        $(DEPLOY_DIR)/.next/
	sudo rsync -a --delete public/       $(DEPLOY_DIR)/public/
	sudo cp package.json pnpm-lock.yaml next.config.ts tsconfig.json $(DEPLOY_DIR)/
	cd $(DEPLOY_DIR) && sudo env PATH="$$PATH" pnpm install --prod --frozen-lockfile
	sudo chown -R sandesh:sandesh $(DEPLOY_DIR)

## Install: deploy + register systemd service, enable on boot, start now
install: deploy
	sudo cp $(SERVICE) /etc/systemd/system/$(SERVICE)
	sudo systemctl daemon-reload
	sudo systemctl enable $(SERVICE)
	sudo systemctl restart $(SERVICE)
	@echo ""
	@echo "  $(APP_NAME) deployed to $(DEPLOY_DIR)"
	@echo "  Listening on port $(PORT)"
	@echo "  Service: $(SERVICE)  (enabled at boot)"
	@echo ""

## Uninstall: stop/disable service, remove files
uninstall:
	-sudo systemctl stop    $(SERVICE)
	-sudo systemctl disable $(SERVICE)
	sudo rm -f /etc/systemd/system/$(SERVICE)
	sudo systemctl daemon-reload
	sudo rm -rf $(DEPLOY_DIR)

start:
	sudo systemctl start $(SERVICE)

stop:
	sudo systemctl stop $(SERVICE)

restart:
	sudo systemctl restart $(SERVICE)

status:
	systemctl status $(SERVICE)

## Build static export (no Node server required; API routes excluded)
build-static:
	pnpm install --frozen-lockfile
	NEXT_STATIC_EXPORT=1 pnpm run build

## Deploy static export to STATIC_DIR (serve with nginx/apache)
deploy-static: build-static
	sudo install -d $(STATIC_DIR)
	sudo rsync -a --delete out/ $(STATIC_DIR)/
	sudo chown -R sandesh:sandesh $(STATIC_DIR)
	@echo ""
	@echo "  Static export deployed to $(STATIC_DIR)"
	@echo "  Serve with nginx: root $(STATIC_DIR); try_files \$$uri \$$uri.html \$$uri/ =404;"
	@echo ""

## Deploy static export to FTP server (reads FTP_HOST, FTP_USER, FTP_PASS, FTP_REMOTE_DIR from .env)
deploy-ftp: build-static
	@test -n "$(FTP_HOST)"       || (echo "ERROR: FTP_HOST not set in .env";       exit 1)
	@test -n "$(FTP_USER)"       || (echo "ERROR: FTP_USER not set in .env";       exit 1)
	@test -n "$(FTP_PASS)"       || (echo "ERROR: FTP_PASS not set in .env";       exit 1)
	@test -n "$(FTP_REMOTE_DIR)" || (echo "ERROR: FTP_REMOTE_DIR not set in .env"; exit 1)
	lftp -c "\
	  set ftp:ssl-allow yes; \
	  set ssl:verify-certificate yes; \
	  open -u '$(FTP_USER)','$(FTP_PASS)' '$(FTP_HOST)'; \
	  mirror --reverse --delete --verbose out/ $(FTP_REMOTE_DIR); \
	  bye"
	@echo ""
	@echo "  FTP deploy complete → $(FTP_HOST)$(FTP_REMOTE_DIR)"
	@echo ""

## Remove local build artefacts
clean:
	rm -rf .next out node_modules
