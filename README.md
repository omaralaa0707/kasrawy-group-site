# Kasrawy Group — site 35 of 46

A concept site built entirely from this dealership's own published material.
**Not affiliated with Kasrawy Group, and not an official site.**

- **Live:** https://kasrawy-group-site.vercel.app
- **Repo:** [kasrawy-group-site](https://github.com/omaralaa0707/kasrawy-group-site)

## What this page is about

Every site in this series is built around something true and checkable about
the dealer's own account — a pattern in what they publish, a contradiction
between two of their channels, or a fact about their showroom — rather than
around a generic template. The palette, type, 3D piece and motion below were
all chosen to serve that finding.

## Design record

**Palette**
: Charcoal #131417 ground — deliberately not navy (26 owns that) and not a gold-on-black identity (02 owns that) — with panel #1D1F24, cream #F1EDE4 text and gold #D9A15C reduced to a restricted accent on the mark and status badges only, because this account's real identity is a brand-portfolio distributor, not a showroom with a colour of its own

**Type pairing**
: Geologica + Red Hat Text / Vibes + Vazirmatn (AR)

**3D / signature technique**
: **The gate**: their own interlocked "K K" corner logotype — a small watermark stamped in the corner of every post, not a showroom fixture — traced from the artwork and extruded into gold geometry, auto-rotating in a charcoal frame. Distinct from 26's forecourt monogram (a large real sign, lit by two matched spotlights) and 25's badge coin (a two-sided flipping object): this is the smallest real mark yet rebuilt as geometry, and the only one sourced from a logotype rather than a photographed fixture

**Motion language**
: **The flash**: content arrives overexposed (`filter: brightness(2.6)`) and settles in ~420ms with no travel, styled after a press-event camera flash — thematically apt, since the real content here is PR/media coverage, not the dealer's own photography

## Sources

Everything on the page was sourced from:

- Instagram: https://www.instagram.com/kasrawygroup/
- Facebook: https://www.facebook.com/KasrawyGroup/

Photography belongs to the dealership (or, where their frames are watermarked
by an outside studio, to that studio) and is used here only to document their
own published material. No figure on the page is invented: anything the dealer
did not publish is marked as unpublished rather than estimated.

## Running it

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build — must pass before shipping
pnpm lint     # eslint, zero warnings
```

Requires `node-linker=hoisted` in `.npmrc` (already present) or three.js peer
deps fail to resolve.

## Structure

```
src/content/media.ts      verified facts and figures — the data layer
src/content/en.ts|ar.ts   all copy, both locales, identical shapes
src/content/schema-ext.ts the page-specific content contract
src/components/webgl/     the 3D piece
src/components/site/      the page composition
src/app/globals.css       palette tokens, type, RTL overrides, motion
```

Arabic/English toggle with full RTL. All CSS direction overrides key off
`[dir="rtl"]` (never `[lang]`) and live outside `@layer`. Every Latin or
numeric fragment inside Arabic copy is wrapped in `.latin` for correct bidi.

---

Part of a 46-site series. See the [top-level README](../README.md) for the full
index and [`TRACKING.md`](../TRACKING.md) for the differentiation log.
