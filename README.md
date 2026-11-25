# Nebulon-A

Nebulon-A is a space article site for curious beginners.
Long-form pieces organised into ordered learning paths, so a reader can work through a topic in a fun way.
It is built for my Front-End module assignment 1.

Built with Vue 3, Vite and Vue Router + Lucide icons. 

Phase 1 of the TUS Front-End Project (done):
Research, Design system, Figma library, Wireframes. Small prototype built with shared Vue components, correct routing.

Phase 2 of the TUS Front-End Project (in progress):
Full content version of the Figma design laid out in Vue, Unpersisted admin CRUD for managing articles, browser testing, functional testing, explanatory code comments, and interactive features.

## Setup

Requires Node 18+.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## Design

Figma file: [Figma project link](https://www.figma.com/design/RBLxVq1VPJBRt0iHAWyYGd/Nebulon-A?node-id=1-587&t=crGDqDc1cMFkqgIc-1)

Fourteen components, ten desktop page sketches and eleven mobile frames, with the
tokens documented in [docs/guides/design-system.md](docs/guides/design-system.md).

## Docs

- [Research summary](docs/guides/research-summary.md)
- [Persona](docs/guides/persona.md)
- [Content plan](docs/guides/content-plan.md)
- [Design system](docs/guides/design-system.md)
- [Wireframes](docs/wireframes/)
- [Iteration log](docs/iteration-log.md)
- [Browser testing](docs/browser-testing.md)

## Notes

- Twenty-four articles over six categories. **Notice: AI was used to draft these articles.**
- Photography: every image was pulled from the NASA Image Library API. Credit lines
  live in the data, and [docs/image-credits.tsv](docs/image-credits.tsv) records the
  search, the record id and the credit behind each file.
- Read progress is session-only and clears on refresh, by design.
- The admin screens are local state only, so no persistence and auth.
- Paths and Path views are stubs only on Instructor's request.
- No form validation or error handling in AdminFormView as of yet.

## Author

Levente Alfoldy - TUS, Front-End Development module, November 2026.