A space article site for students who find space interesting without being specialists. The writing stays plain and easy, the layout is mobile-first.

The primary reader type is Maya, a 20-year-old student with a hobby-level interest in space who reads in five-minute windows between lectures. The persona document describes her in full.

Articles connect into learning paths, so reading one leads to the next. The site works without accounts: read state lives in Vue state and clears on refresh, matching the local-data approach the brief sets out.

## Categories

Six categories, each with a one-line description and enough articles to look populated:

| Category | One-line description |
| --- | --- |
| Rockets & Launches | Launch schedules, rocket mechanics, why a launch matters |
| Our Solar System | The planets and their moons, one article at a time |
| Stargazing | What to see tonight, from your phone, no telescope |
| Deep Space | Black holes, galaxies, the strange large-scale stuff |
| Space Technology | The machines: engines, telescopes, suits, living in orbit |
| Space History | The programmes and missions that built the present, Apollo to Voyager |

Every article belongs to exactly one category, which keeps the filter honest and each page full.

## Learning paths

Four paths cover sixteen articles, and one or two standalone articles per category bring the total to around twenty-four. That is the planned maximum.

| Path | Category | Steps |
| --- | --- | --- |
| Black Holes | Deep Space | 5 |
| Our Solar System | Our Solar System | 5 |
| Going to Space | Rockets & Launches | 4 |
| Reading the Universe | Space Technology | 4 |

Paths stay fixed data while the admin edits articles only. Each article carries a path id and a step number, both empty for standalone pieces.

A path is reachable from three places:

- One word in the main nav, minimal.
- The path page itself: title, description, ordered steps with a read checkmark each.
- A footer row at the end of any path-enabled article: "Step 2 of 5 in the Black Holes path. Continue, or see the whole path." The step counter gives progression a visible spine without any tracking.

## Article fields

| Field | Notes |
| --- | --- |
| title |  |
| slug | used in the URL |
| category | one of the six |
| imageUrl, imageCredit | NASA media requires the credit line |
| excerpt | two lines, shown on the card |
| gist | outcome bullets and new words, see below |
| body | around 400 words, short on purpose |
| date |  |
| author |  |
| readingTime | minutes, shown on every card |
| pathId, step | empty on standalone articles |
| read | boolean, local state only |

Difficulty follows from the step number: step 1 of a path is beginner by definition.

## The gist box

The gist box sits above the article body and carries two parts:

1. Outcome bullets. Two or three lines written as promises: "After this you can explain why time slows near a black hole." The path page reuses these as step descriptions, so a path reads as a chain of things the reader will be able to do.
2. New words. Two or three jargon terms with one-line definitions, placed before the reader meets them in the body. This removes the persona's biggest blocker, undefined jargon.

The admin edits it as one textarea of `term: meaning` lines, which the front end parses into the box.

## Content hierarchy

The home page leads with a grid: 1 featured article, learning paths box with progress counters. Then category sections (grid) with the newest as the biggest box first inside each. Then the footer.

A category page opens with its name and one-line description, filter chips and a search box with the state visible in the URL, then cards. Path articles list in path order first, standalones newest after.

An article page runs: breadcrumb, title, meta line with date and reading time, hero image with caption and credit, gist box, body, path footer row, related articles.

The path page shows the title, description, and numbered steps with checkmarks. Drawn as a journey with stops, like in the game Overcooked as a space map.

Search results reuse the same cards as everywhere else.

## Admin interface

A Filament-style layout built in Vue: sidebar, article table, add/edit form. The form groups fields into three sections, basics, media and path, so it reads as three short forms in a row. Laravel + Filament stays a parked idea. The rubric rewards CRUD done in Vue with local data, and reproducing the look in Vue gets the same visual result while the server risk stays at zero.

## Content production

Articles are AI-drafted, stated in the README. Images come from the NASA media library and Pexels. Real images appear on every path article and the first card of each category, with visual placeholders elsewhere/or just text.

## Wireframes

1. Home
2. Article detail with the path footer row
3. Category page with search and filters
4. Path page
5. Admin, list and form on one sheet