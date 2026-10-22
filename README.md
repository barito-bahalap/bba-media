bba-media -> media.baritobahalap.com (domain to be confirmed)

Purpose: Barito Bahalap Media (BBM) as the media and communications operating brand of BBA. This is where a prospective client or partner confirms that BBM is an accountable communications operation, with a clear boundary between commissioned work and independent editorial decisions.

Audience: Corporations, BUMN/BUMD, government institutions, public figures and organizations, and institutional partners evaluating BBM for strategic communications, media relations and content operations.

Contains:

- Home: positioning, services overview, process, editorial independence summary, current stage notice
- Services: seven communications services and a "what BBM does not do" boundary list
- Approach: six delivery stages, who decides what (client vs BBM), engagement models, contracting
- Editorial standards: principles, press publication status, legal framework (UU 40/1999, UU PDP 27/2022), replies and corrections, FAQ
- About: structure, roles, current stage and track record statement
- Contact (inquiry form that prepares a mailto: message), privacy policy, terms of use, 404

Firewall rules for this repository:

- No BBT content, links, copy or assets. BBA appears only as the parent organization (footer, privacy, JSON-LD) and links to baritobahalap.com.
- Copy refers to "other BBA operating units" and does not name them.
- No BBT client is mentioned or implied.
- No client data is stored or processed by this site. It is static, with no database.
- Repository access is limited to BBM personnel and the Founder/Director.

Editorial and legal rules:

- This site is not a press publication and must not claim to be one. Do not add news, articles or "media outlet" wording until BBM operates through an Indonesian legal entity and meets Articles 9 and 12 of UU 40/1999. Then add the name, address and person in charge disclosure.
- The schema type is Organization. Do not change it to NewsMediaOrganization before the conditions above are met.
- Never add clients, case studies, testimonials, awards or coverage that do not exist. The track record statement on About must stay until real, consented engagements are available.
- Commissioned communications are always described as commissioned. Do not describe client work as independent editorial work.
- All copy lives in `src/data`. Placeholders (emails, dates, domain) must be resolved before launch.

Structure:

- `src/app`: App, router, appRoutes
- `src/components`: dumb display components (layout) and the kit re-export
- `src/pages`: orchestration only, one folder per page
- `src/hooks`: bridge between data and pages (`useMediaContent`, `useContactForm`)
- `src/data`: static content
- `src/domain`: content types and JSON-LD builders
- `@/` resolves to `src`

Stack: React.js, TypeScript, Vite, static, no database. Shared UI, tokens and config come from `@barito-bahalap/*` (bba-shared-kit). Brand scope is `media` (orange accent over neutral base).

Run (from the repository root C:\dev\bba):

1. `pnpm install`
2. `pnpm --filter bba-media typecheck`
3. `pnpm --filter bba-media dev`

Deploy: Vercel with `GITHUB_TOKEN` (read:packages) set as a build environment variable so the kit packages install from GitHub Packages.
