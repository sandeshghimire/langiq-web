# Website Update — Platform Pages

Instructions for updating the six SoCcentric platform pages with the new content files.

## What's changing

The body content of each platform page is being replaced with rewritten copy: 9 sections per page, each with a title, a one-line subtitle, and 4–5 plain bullets. Content is sourced from the platform reference docs and matched to the existing live pages.

## File → page mapping

| Content file   | Page route   | Platform | Silicon          | Section numbers |
|----------------|--------------|----------|------------------|-----------------|
| `arches.md`    | `/arches`    | Arches   | NVIDIA Jetson    | 01 / 09 → 09 / 09 |
| `acadia.md`    | `/acadia`    | Acadia   | Raspberry Pi     | 11 / 19 → 19 / 19 |
| `zion.md`      | `/zion`      | Zion     | AMD Xilinx Zynq  | 21 / 29 → 29 / 29 |
| `pinnacle.md`  | `/pinnacle`  | Pinnacle | NXP i.MX         | 31 / 39 → 39 / 39 |
| `joshua.md`    | `/joshua`    | Joshua   | TI Sitara        | 41 / 49 → 49 / 49 |
| `sequoia.md`   | `/sequoia`   | Sequoia  | Intel / AMD x86  | 51 / 59 → 59 / 59 |

The number bands are deliberate: each platform has its own range so the section counter alone tells you which page you're on.

## Per-page structure

Each file is:

- An H1 with the platform name and silicon (e.g. `# Arches — NVIDIA Jetson`).
- Nine H2 sections, formatted `## NN / NN · Section title`.
- Under each section title: one subtitle line, then a list of 4–5 bullets.
- A **Download brochure** button, in section 01 only.

## What is NOT in these files (by design)

- **No metadata / front-matter** — page `<title>`, meta-description, OG/Twitter tags stay wherever they're currently managed (e.g. the page component or head config), not in the body content.
- **No STAGE terminal panels** — the animated `STAGE 0X` side panels are template/visual elements and are unchanged. Keep the existing panel markup; only the text content blocks are being replaced.
- **No "Talk to engineering" CTA** — removed from the platform pages (it already lives on the home page). The only button on each platform page is the brochure download.

## Brochure button — needs wiring

In each file, section 01 contains:

```
[Download brochure ↓](arches-brochure.pdf)
```

Two things to handle on the front end:

1. **Style it as a button** (not a plain text link) to match the site.
2. **Repoint the path** to wherever the PDFs are hosted. Current placeholders, one per platform:
   - `arches-brochure.pdf`
   - `acadia-brochure.pdf`
   - `zion-brochure.pdf`
   - `pinnacle-brochure.pdf`
   - `joshua-brochure.pdf`
   - `sequoia-brochure.pdf`

   PDFs to be supplied. Update the link target once final filenames/paths are known.

## Content notes

- Copy matches the **live site** where the site and the reference docs differed (variant lists, chip specs) — the live wording wins.
- Industry-image sections keep the site's current variant lists, including the `*-medical` variants.
- Section 01 subtitles are the existing site intro lines. Subtitles on sections 02–09 are newly written one-liners drawn from each section's own bullets (the live pages had no subtitle on those sections).

## Optional site-level fix (not in these files)

The current pages set OG/canonical URLs to `soccentric.com` while the site is served from `langiq.ai`, so social cards and indexing point at the other domain. Decide which domain is canonical and make the metadata consistent. This is a head/metadata change, separate from the body content above.