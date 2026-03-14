# Teamvibe — Operational Guide

This repository powers Teamvibe, a modern internal CRM for startups. Built atop a minimal Next.js 16 (App Router) starter with React 19, TypeScript, Tailwind styling, Drizzle ORM + PostgreSQL, and production-ready credential-based authentication. Team, invite/growth flows, dashboard, and founder support are all integrated for rapid onboarding. All public and contact forms/notifications reference Chirag Dodiya (hi@chirag.co).

---

## 1. Scope & Branding
- Purpose: Modern CRM for startup teams. Manage employees, workflows, and onboarding—all built on Next.js App Router.
- Brand: All public web, dashboard, and invite/email flow use **Teamvibe** for copy and meta. Founder: Chirag Dodiya, hi@chirag.co.
- Data: Drizzle/Postgres wired. `users`, `teams`, `team_members`, `team_invitations`.
- Auth: `/auth` route with credentials (email, password), hashed via bcryptjs. Session via cookie.
- Dashboard: `/dashboard` (overview), `/dashboard/team`, `/dashboard/settings`. All rebranded for CRM use cases.
- Invitations: Team invite/acceptance with transactional email (SendGrid).
- Owner contact: Chirag Dodiya - hi@chirag.co (sitewide forms, footer, and email flows).
- Landing: All sections use Teamvibe/CRM copy, sections, and features.

## 2. Tech & Features
- Next.js 16 App Router (server-driven, file-based).
- React 19, TypeScript 5, Tailwind utilities.
- Drizzle ORM + PostgreSQL, SendGrid for emails.
- Real user/team persistence.
- Built-in auth and team invite/start onboarding flows.
- Modular landing sections, all CRM/Teamvibe branded.
- All feature emails send from/send notification to Chirag Dodiya.

## 3. Contact Details (Owner)
- Name: Chirag Dodiya
- Email: hi@chirag.co
- Phone: (private/non-public)
- Used for all contact, notification, and default sender/recipient fields.

*All other architecture, structure, and ops details remain as previously described, updated for current Teamvibe feature set and founder-owned support model.*

---