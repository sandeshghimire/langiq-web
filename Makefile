.PHONY: build test lint run clean installer help

# siliconcentric — top-level Makefile (per master CLAUDE.md §12)
# Wraps the underlying npm scripts so `make build && make test && make lint`
# is the single entry point for §9 / §9a validation.

help:
	@echo "Targets:"
	@echo "  build      - production build (npm run build)"
	@echo "  test       - placeholder (no test script — static export site)"
	@echo "  lint       - eslint flat config (npm run lint)"
	@echo "  run        - dev server (npm run dev)"
	@echo "  clean      - remove .next/ and out/ build artifacts"
	@echo "  installer  - n/a (not a GUI app)"

build:
	npm run build

test:
	@echo "no test script — static export site; build itself is the primary correctness check"

lint:
	npm run lint

run:
	npm run dev

clean:
	rm -rf .next out

installer:
	@echo "n/a — not a GUI app"
