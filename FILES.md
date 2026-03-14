# FILES.md — Teamvibe CRM: Structural & Architectural Index

AI-facing index as of the Teamvibe CRM transition. This is a production-grade Next.js App Router repo for modern internal CRM: employee and team management, onboarding, and founder-led support. All public content and email/contact logic use Chirag Dodiya (hi@chirag.co) by default. All code and process references updated to Teamvibe.

---

## 1. Overview
- Purpose: CRM for startup teams—internal management, real onboarding, invite/role flows.
- Brand: Teamvibe throughout. All contact: Chirag Dodiya, hi@chirag.co.
- Tech: Next.js 16, React 19, Drizzle ORM + PostgreSQL, Tailwind, SendGrid.
- Data: DB-backed user/team/invite CRUD (Drizzle).
- Auth: Email/pass credential flow, cookie session.
- Owner/founder info: sitewide (forms, footer, invites, fallback email logic).

## 2. Entry Points & Landing
- `app/layout.tsx`: Root layout, theming, error reporter.
- `app/page.tsx`: Public landing page—CRM sections, startup-focused copy.
- `app/auth/page.tsx`: Auth UI (email/password, brand copy).
- All modular home sections rebranded with Teamvibe CRM/employee value.
- Contact, footer, and meta reflect Chirag Dodiya, hi@chirag.co.

## 3. Dashboard & Team
- `/dashboard`, `/dashboard/settings`, `/dashboard/team`: All flows, onboarding, copy, default notifications are Teamvibe CRM-first.
- Team member invite/acceptance, role assignment, removal, invite expire.
- All role/invite/member flows route notification, fallback, and alert to hi@chirag.co if not set.
- Contact and support footer always present with Chirag Dodiya.

## 4. Landing / Section Modules
- All `components/home/Layout*Section.tsx` modules: CRM/action copy, Teamvibe meta.
- Footer, contact, testimonials reference real CRM/customer or owner identity.

## 5. Notification/Email/External
- All notification and invite logic (`lib/email/sendgrid.ts`, invite actions) use Chirag Dodiya if no recipient.
- README, RULES, and this FILES file must be updated in step when core structure, CRM flows, or contact details change.

## 6. Owner Contact Standard
- Chirag Dodiya, hi@chirag.co, non-public phone.
- All default/fallback notifications, support, and form actions reference this contact.

---

**All future Teamvibe CRM development and infrastructure must default to this structure, notification, and contact model.**