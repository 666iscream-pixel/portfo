# Ihnat Zinkevich — Portfolio (PRD)

## Original Problem Statement
> Create a professional UX portfolio website.

Owner: **Ihnat Zinkevich** — Digital Systems Developer, Warsaw, Poland.
Bio: "I help service businesses fix digital bottlenecks: weak websites, unclear booking paths, lost leads, slow follow-up and manual document workflows…"
Contact: ihnatzinkevich@gmail.com · LinkedIn: /ihnat-zinkevich

## Architecture
- **Frontend**: React 19 (CRA + craco), Tailwind 3, sonner toasts, framer-motion installed (unused so far), Shadcn UI primitives available. Single-page, anchor-based navigation (`/#work`, `/#about`, `/#contact`).
- **Backend**: FastAPI + Motor (async Mongo). Routes prefixed with `/api`.
- **DB**: MongoDB collection `contact_submissions` (id, name, email, company, message, created_at ISO).
- **Design**: Brutalist editorial / Swiss high-contrast. Off-white #F4F4F0, ink #0F0F0F, accent #FF3E1A. Fonts: Cabinet Grotesk (display), Satoshi (body), IBM Plex Mono (technical labels). 0px radius, hard offset shadows, visible grid lines.
- **Dev env fix**: craco.config.js patched with a webpack-dev-server v5 compatibility shim (translates removed `onAfterSetupMiddleware` / `https` options).

## User Personas
- **Prospect (service business owner)**: lands from LinkedIn/referrals, scans hero + work, sends a contact inquiry. Primary funnel.
- **Recruiter / hiring manager**: scans About + Work for credibility, opens LinkedIn.

## Core Requirements
- Distinct, memorable portfolio aesthetic (no AI-slop purple gradients / generic Inter).
- Clear hero positioning, four case studies with tags, contact form persisted to DB.
- Mobile-first responsive.
- Functional contact form with success/error feedback.

## Implemented (2026-06-22)
- Hero with marquee strip, asymmetric massive headline, dual CTA, "What I do" list.
- Work section with 4 alternating-layout case study cards (image + summary + role + tags).
- About section (dark slab) with 4 working principles.
- Contact section with sharp-edged Shadcn-styled form + sidebar with email/LinkedIn/location.
- Sticky nav with backdrop blur, footer with closing statement.
- Backend endpoints: `GET /api/`, `POST /api/contact`, `GET /api/contact`, plus original status endpoints.
- Tested end-to-end via testing_agent_v3 — 100% pass on backend + frontend.

## Backlog (Prioritized)
- **P1**: Email notifications on new submissions (Resend or SendGrid integration) — needs API key from user.
- **P1**: Individual case study detail pages (longer write-ups, process artifacts, before/after).
- **P2**: Light/dark mode toggle, page transitions via framer-motion.
- **P2**: SEO metadata + Open Graph image, sitemap, analytics.
- **P3**: Blog / Writing section, testimonials, downloadable CV.
- **P3**: Admin view of contact submissions (auth-gated).

## Next Actions
1. Ask user whether to add email notifications (requires API key) and/or case study detail pages.
2. SEO + OG metadata pass before sharing publicly.
