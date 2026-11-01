# Nebulon-A

A space article site for curious beginners. Long-form pieces organised into
ordered **learning paths**, so a reader can work through a topic instead of
guessing what to read next.

Built with Vue 3, Vite and Vue Router. Phase 1 of the TUS Front-End brief:
research, design system, Figma library, wireframes and this prototype.

## Setup

Requires Node 18+.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

The site runs only from static data in `src/data`.

## Design

Figma file: https://www.figma.com/file/REPLACE_ME

Fourteen components, ten desktop page sketches and eleven mobile frames, with the
tokens documented in [Design System.md](docs/Design-System.md).

## Notes

- Twenty-four articles over six categories. **Notice: AI was used to draft these articles.**
- Photography from the NASA media library with a credit line on every image.
- Read progress is session-only and clears on refresh, by design.
- The admin screens are local state only - no persistence, no auth.

## Author

Levente Alfoldy - TUS, Front-End Development, November 2026.