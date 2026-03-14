# RULES.md — Teamvibe Change Boundaries & Placement

**Branding/Contact**: All app copy, landing content, auth flows, and notification/contact touchpoints must reflect the Teamvibe CRM product and founder: Chirag Dodiya (hi@chirag.co). Any new section, public page, or template must use this information as sitewide default.

## Routing & Placement
- Teamvibe public/marketing pages: under `app/`, with CRM-first messaging.
- CRM landing uses `components/home/Layout*Section.tsx` composed in `app/page.tsx`.
- All email/invite/contact logic must use Chirag Dodiya's contact as default/fallback sender, recipient, and notification.
- Dashboard, settings, team management: `/dashboard`, `/dashboard/settings`, `/dashboard/team`.
- Teamvibe invite/acceptance: `/invite/[token]` route, sends via SendGrid to target or fallback to Chirag Dodiya if field missing.
- All form actions, feedback, and transactional flows are site-branded as Teamvibe.
- Footer, contact, team list, and meta must reference Chirag Dodiya.

## Backend/Data
- Drizzle ORM and Postgres required for all persistent flows.
- Real user/team onboarding—no placeholder invites or fake employee records.
- All notification flows include fallback to hi@chirag.co if destination missing.
- Any changes to persistent model require updating README.md, FILES.md and this RULES file.

## Auth & Security
- Only credential-based (email/password) via `/auth`, bcrypt + Drizzle.
- Cookie-based session using proven App Router helpers.
- Do not introduce or reference other auth providers without a documented hard requirement.

## UI/UX & Content
- All main sections and flows must communicate Teamvibe CRM's startup/employee management focus.
- No demo-only, "starter", or Panda references remain; all sections must use Teamvibe copy and employee/team management value proposition.

## Coordination/Deployment
- All deployments, build, and notification scripts/pipelines must fallback to Chirag Dodiya's contact if environment email not set.
- Submit changes to README, FILES, and RULES in parallel if updating structure, branding or major workflows.

---

**This ruleset supersedes all Panda, starter, or generic SaaS-copy defaults and must be followed for all future Teamvibe product work.**