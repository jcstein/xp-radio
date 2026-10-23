# XP/RADIO

Static Next.js site for XP/RADIO. It is a link page (Clubhouse, Ethereum and Tezos tapes, Cryptovoxels, Twitch, Audius, Discord, Twitter, and Linktree) with a dark-mode toggle. There is no server runtime.

## Local development

Requires Node.js 22.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

`next build` writes a static export to `out/` (`output: "export"` in `next.config.js`).

```bash
npm run build
npm run preview
```

`npm run preview` serves the `out/` directory at [http://localhost:3000](http://localhost:3000), which is the same artifact Cloudflare Pages publishes.

## Deploy on Cloudflare Pages

Connect this GitHub repository with Cloudflare’s native Pages Git integration. Pushes to `main` deploy automatically. Do not use the Next.js Workers / OpenNext / `@cloudflare/next-on-pages` preset. This project does not run a Worker.

| Setting | Value |
| --- | --- |
| Project type | Cloudflare Pages |
| Project name | `xp-radio` |
| Framework preset | Next.js (Static HTML Export) |
| Production branch | `main` |
| Root directory | `/` (repository root) |
| Build command | `npx next build` |
| Deploy command | none (Pages uploads the build directory) |
| Build output directory | `out` |
| Build environment variables | `NODE_VERSION` = `22` (also pinned by `.node-version`) |
| Runtime environment variables | none |
| Bindings | none (no KV, D1, R2, Durable Objects, services, or secrets) |

After the first deploy, add the custom domain `xp-radio.jcstein.dev` on the Pages project. If `jcstein.dev` is on the same Cloudflare account, Pages will create the DNS record. Otherwise add a CNAME for `xp-radio` to the project’s `*.pages.dev` hostname.

Plausible is loaded in the browser with `data-domain="xp-radio.jcstein.dev"`. Add that domain in the Plausible dashboard or page views will be dropped.

## Why this is not a Worker

The pages are static. Outbound “radio” links and Iconify icons run in the browser. The old `/api/hello` route was unused `create-next-app` boilerplate, and Pages Router API routes cannot be statically exported, so it was removed. A Worker (OpenNext or vinext) is only needed if a later change requires a server.

## Vercel

Nothing in this repo was a Vercel project config. There was no `vercel.json`, no Vercel environment variables, and no `@vercel/*` dependency. The `.gitignore` entry for `.vercel` is unchanged. The old README deploy section and the in-page links to `xp-radio.vercel.app` pointed at Vercel; those now point at Cloudflare and `xp-radio.jcstein.dev`.
