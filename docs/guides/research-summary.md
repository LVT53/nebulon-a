---
course: Front-End Development
assignment: Project - Phase 1 - research summary
deadline: 2026-11-10
status: draft, needs my voice pass
tags: [front-end, research, tus-exchange, space]
---
# Phase 1 - Research Summary

**Theme:** a space article site for students who find space interesting but are not specialists. Curious beginners, phone-first, no textbook tone.

Reviewed Nov 1, 2026, desktop walkthrough of three content sites. Full notes in the worksheet file.

## 1. NASA Blogs (blogs.nasa.gov)

Official mission diaries, chronological post lists. What it does well: exact date-and-time stamps give an authentic log feel, images carry caption and credit lines, and a "More from..." block keeps you reading after the article. What I take: timestamp as a design element, credited imagery (my NASA media needs credit anyway), related-post block after the article. What it shows me to avoid: a flat list with no hierarchy, 1,300+ pages of pagination with no filter, search that leaves the site.

## 2. Astronomy.com

Mainstream magazine site, and the closest match to what my site should be. Its homepage is organised by what the reader wants to do, not by topic: Top Stories, Picture of the Day, In the Sky, What's Launching This Week, Today in History. Cards are image + category chip + title, and articles link sideways to related pieces. What I take: intent-based home strips, category chips on cards, a one-line topic description on category pages. What to avoid: three banners and ads before any content, carousels selling telescopes.

## 3. Phys.org

An archive site, and the best for finding things. Sort chips (Date 6h/1d/all, Rank, Popular) are plain links, so every filtered state is shareable. Articles open with breadcrumbs and a "The GIST" bullet summary before the body. What I take: filter chips as linkable state, which maps directly onto client-side filtering in Vue, a gist box for readers who skim, breadcrumbs, relative timestamps. What to avoid: cramped rows, half of them imageless, and heavy cross-promotion.

## Patterns I will use

1. Card anatomy from Astronomy.com: image, category chip, title, excerpt, date.
2. Intent-based home sections: Launches, Sky Watching, Solar System, History.
3. Category chips on cards and a category page that reuses the same cards.
4. Filter and search as visible, shareable state, in the spirit of Phys.org.
5. A short gist or summary line on article pages, plus related posts at the end.
6. Ordered articles per category, a learning path with a clear start here. None of the three sites has a beginner on-ramp, and this is my answer to that gap.

## Patterns I will avoid

- Chronology as the only organising principle.
- Search or filters that exist but lead nowhere useful.
- Chrome-heavy headers and banner stacks before content.
- Dead-end article pages with no related content.
