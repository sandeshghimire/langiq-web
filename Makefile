APP_NAME   := ivv-marketing
DEPLOY_DIR := /var/www/html/$(APP_NAME)
SERVICE    := $(APP_NAME).service
PORT       := 3060

.PHONY: all build deploy install uninstall start stop restart status clean

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

## Remove local build artefacts
clean:
	rm -rf .next node_modules
