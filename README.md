# Buildwise Website

Reconstructed standalone source for the Buildwise website.

## Important

This is a **clean reconstruction**, not a byte-for-byte export of the ChatGPT Sites runtime. The current Sites tooling available in this workspace exposes the published content/project metadata but not the original generated frontend source, private runtime configuration, backend integrations, or uploaded production assets.

The goal of this repo is to establish a normal, editable codebase that can progressively reach visual and functional parity with the production Buildwise site.

## Stack

- Next.js
- React
- TypeScript
- Plain CSS

## Current routes

- `/`
- `/global`
- `/global/uae`
- `/academy`
- `/buildwisecouncil`
- `/founder`
- `/privacy`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Next migration steps

1. Export and add production images/logos.
2. Recreate exact animations and responsive states.
3. Connect lead capture and database.
4. Recreate admin/auth flows.
5. Add workshop registration and automated messaging.
6. Add analytics/UTM tracking.
7. Run visual QA against buildwise.education before switching production hosting.

**Build Better. Think Wiser.**
