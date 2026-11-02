# Design system

Nebulon-A is a dark, photographic site for curious beginners. One accent colour, hairlines instead of decoration, real NASA imagery wherever a card needs weight. This document is the single source of truth: the Figma file is built from these tokens, not from values typed by hand.

## Colour

| Token | Value | Use |
| --- | --- | --- |
| background | `#0B0B0F` | Page background |
| surface | `#16161C` | Cards, gist panel, admin rows |
| surface-hover | `#1F1F27` | Hovered card or row, image placeholder |
| surface-pressed | `#26262F` | Pressed secondary button |
| hairline | `#2A2A33` | Borders, dividers, the grid lattice |
| text-primary | `#F4F4F5` | Headings, UI text |
| text-body | `#D4D4D9` | Article paragraphs |
| text-secondary | `#A1A1AA` | Meta, captions, excerpts, inactive nav |
| accent | `#FFB454` | Primary buttons, active chips, path progress |
| accent-hover | `#FFC06B` | Primary button hover |
| accent-pressed | `#F2A23E` | Primary button pressed |
| on-accent | `#0B0B0F` | Text on amber |
| read | `#4ADE80` | Read tag, admin live dot |
| danger | `#F87171` | Delete, validation errors, destructive dialog |

Fourteen tokens. The accent carries three meanings and nothing else. **Action**: primary buttons, the active filter chip. **Position**: path segments, the current stop, the gist bracket, list markers. **Focus**: the 2px ring. Green is not progress; it confirms a state already reached. Body text runs at `text-body` rather than `text-primary` because pure white on near-black glares in long reads.

## Typography

Space Grotesk for titles and UI, Source Sans 3 for reading. Scale is 1.25 from a 16px base.

| Role | Size | Font | Weight |
| --- | --- | --- | --- |
| Hero title | 39 / 45 | Space Grotesk | 700 |
| Page title | 31 / 36 | Space Grotesk | 700 |
| Section heading | 25 / 29 | Space Grotesk | 500 |
| Card title | 20 / 23 | Space Grotesk | 500 |
| UI label | 16 / 20 | Space Grotesk | 500 |
| Reading | 18 / 31 | Source Sans 3 | 400 |
| Body | 16 / 26 | Source Sans 3 | 400 |
| Meta, captions, chips | 12 / 19 | Source Sans 3 | 400 |

Reading covers the article lead, the gist paragraph and body copy — one role, not two. Chips use the meta size at 12/16. Buttons use UI label. Headings are 1.15.

On mobile the same roles hold, with two exceptions: body copy runs at 27 leading and card titles drop to 17–20 depending on the card, because 26 is tight across 350px.

## Spacing

4px base, but the scale is not the rule — these roles are:

| Role | Value | Applies to |
| --- | --- | --- |
| Micro | 8 | icon to label, term to definition, marker to title |
| Control | 16 | inside a chip, button, input |
| Stack | 24 | paragraphs in one block, title to description |
| Card | 36 | padding inside every card and panel |
| Gutter | 40 | between cards, columns and rows |
| Block | 56 | paragraph to heading, gist to body, body to path row |
| Section | 96 | between page sections |
| Page | 360 / 120 | page margins — 360 at 1920, 120 at 1440 |

Mobile uses a single 20px margin and 40–48 between sections, 16–20 within. The first build of every page was cramped because each gap was chosen in isolation, one step too small. Name the role before choosing the number; when in doubt, take the next step up.

## Layout

Content sits in a centred **1200 column** on every page, at every frame width. Reading paragraphs are 680 and always centred inside it. The frames are 1920 wide for the sketches, but the column — not the frame — is what the build uses.

- **Grid module**: 775 feature + 32 + 1px rule + 32 + 360 list. Three compact rows, 40px gutters between modules.
- **Card grids**: two columns at 40px gutter (paths, 580 each), three at 40px (related and category, 373 each), 2×2 at 40px on the category page.
- **Breakpoints**: 768 single column, 1200 two-column module plus admin sidebar.

## Shape

14px on cards and buttons, 16px on mobile cards and panels, 12px on the current path stop, 8–10px on chips, inputs and buttons on mobile, 2px on progress segments and the gist bracket. Depth comes from surface steps and hairlines; shadows only on the mobile menu.

## Imagery

Photography replaces decoration everywhere.

- Hero and feature images are 16:9 with cover crop, credited under the frame as `Credit: NASA/Name`.
- Path cards carry a 220px image full-bleed on the right edge of a 580 × 264 card.
- Compact rows carry no image at all, so a module has exactly one picture.
- Full-bleed cards on the home page run the image edge to edge with a gradient scrim, so the title sits in the photograph.
- Placeholders inside a card use surface-hover; standalone tiles use surface with a category label.

## Motion

150ms for state changes, 200ms for expansions, ease-out. Hover on cards and rows, chip activation, the read check, the nav underline. Nothing animates on scroll; reduced motion is respected.

## Components

Fourteen components, all built and all bound to the tokens above.

**Sets**: Button (3 × 5 states), Chip (4), FeatureCard (2), CompactCard (2), FormField (3), PathNode (3), PathCard (2), NavLink (3), ConfirmDialog (2 widths).
**Singles**: SiteHeader, SiteFooter, ArticleGrid, RelatedRow, GistBox, PathFooter.

- **Button** — primary amber, secondary surface with hairline, ghost label only. Hover and pressed bound to accent-hover, accent-pressed, surface-pressed. Labels hug with a 148px minimum.
- **Chip** — category chips are outline; filter chips take a surface fill and a hairline so they read as controls, not labels. Amber stays the only active weight in a filter bar. Focus is a 2px accent stroke, since the chip sits too tight for an offset ring.
- **FeatureCard** — 775 wide, 16:9 image, chip, page title, two-line lead, meta.
- **CompactCard** — text only: category line, section heading, meta. Transparent until hover.
- **FormField** — 380 wide: label, input, helper. Default, error, focus.
- **GistBox** — a surface card, 680 wide, 36 padding: eyebrow and reading time, one paragraph under a 2px amber bracket, hairline, then new words as a plain list. The first block of the body, never a paragraph of it. On mobile it drops to 350 with the same structure.
- **PathFooter** — five segments, the path name, the next title, reading time, Continue plus See the path. 918 wide on the article, where it breaks out of the 680 reading column.
- **PathNode** — one stop on the horizontal rail; the current stop is the only one that grows. The rail itself belongs to the page.
- **PathCard** — 580 × 264: name, one line of description, progress bar and length, 220px photograph on the right edge.
- **NavLink** — default secondary, hover steps to primary with a hairline underline, the current page carries the amber underline. Sized by its label.
- **ConfirmDialog** — destructive confirmation at 480 and 350. Names the thing being deleted, states it cannot be undone, Cancel before the danger action.
- **SiteHeader / SiteFooter** — shared furniture with a 1200 inner column, so every page lines up whatever the frame width. Footer is 40 tall: wordmark, About, Admin, RSS.

Focus is a 2px amber ring with a 2px offset everywhere except the chip. Touch targets stay at 44px.

## Pages

Every page exists at desktop and at 390 mobile; the mobile set runs to eleven frames because the open nav state is drawn separately.

**Article** — nav, hero with a 16:9 image left and meta right (chip, title, lead, hairline, then author, date and reading time as one icon row), full-width hairline, centred 680 body: gist card, 18/31 paragraphs, subheads, one pull quote with an amber rule, a captioned figure, the 918 path footer, then a related band at 1200 with three image cards. On mobile the hero goes full-bleed with the title in the image, and the figure runs edge to edge.

**Paths collection** — nav, hero with title, one lead line and totals, then four 580 × 264 path cards in a 2×2 grid at 40px gutters. No category line, and descriptions never restate the step count. Mobile stacks the same cards at 350 with a 120px image.

**Path** — nav, hero pairing the path name and description with a 16:9 image and credit, progress segments underneath, then the path drawn horizontally: a 2px rail, five stops, titles beneath, amber to the current stop. Ends with four smaller path cards. On mobile the rail turns vertical: one continuous line with the dots sitting on it, filled above the current stop.

**Home** — mixed Latest grid (feature plus three compact rows from three different categories), a second row of three image cards, then the Learning paths panel (four rows: name, category and steps, progress bar, length), then a single grid of fifteen cards in rows of three, closing on Show all. Mobile keeps the same order with a full-bleed hero and a peeking horizontal strip.

**Category and search** — title, description, filter chips and a search field, then an equal grid of six cards at three across with 40 gutters, closing on a ghost Load more. Search swaps the title for a query field, shows the result count, and reuses the same grid. Mobile drops to a feature card plus a 2×2 grid, and search results to 76px thumbnails in a list.

**Admin** — a list with a table (title, category, published, status with a dot, Edit and Delete) and a New article button, plus a form page split into Basics, Media and Path columns of FormFields, the title field shown in its error state. Deleting anything raises ConfirmDialog first.

**Empty and error** — a search with no results shows a surface panel, suggestion chips and a browse link rather than a blank grid; a 404 shows the numeral in accent with a way back. Both exist on desktop and mobile.

## Open decisions

- Where Show all 24 articles goes: a dedicated archive route, or reuse search with an empty query. The button currently has no destination.
- How the horizontal rail behaves between 768 and 1200, where five stops crowd. Below 768 the vertical rail resolves it.
- Whether the compact card ever gains a thumbnail.
- Whether an author and sources block goes before the related band.
- Whether the Button set gains a danger variant. ConfirmDialog currently draws its own danger action rather than instancing one.
