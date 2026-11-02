# Nebulon-A

A space article site for curious beginners. Long-form pieces organised into
ordered **learning paths**, so a reader can work through a topic instead of
guessing what to read next.

Built with Vue 3, Vite and Vue Router. Phase 1 of the TUS Front-End brief:
research, design system, Figma library, wireframes and this prototype — the
Home and Article views, built from the shared components.

## Setup

Requires Node 18+.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

The site runs only from static data in `src/data`.

## Design

Figma file: [Figma project link](https://www.figma.com/design/RBLxVq1VPJBRt0iHAWyYGd/Nebulon-A?node-id=1-587&t=crGDqDc1cMFkqgIc-1)

Fourteen components, ten desktop page sketches and eleven mobile frames, with the
tokens documented in [docs/guides/design-system.md](docs/guides/design-system.md).

## Docs

- [Research summary](docs/guides/research-summary.md)
- [Persona](docs/guides/persona.md)
- [Content plan](docs/guides/content-plan.md)
- [Design system](docs/guides/design-system.md)
- [Wireframes](docs/wireframes/) — five hand-drawn sheets, photographed

## Notes

- Twenty-four articles over six categories. **Notice: AI was used to draft these articles.**
- Photography from the NASA media library with a credit line on every image.
- Read progress is session-only and clears on refresh, by design.
- The admin screens are local state only - no persistence, no auth.

## Author

Levente Alfoldy - TUS, Front-End Development module, November 2026.