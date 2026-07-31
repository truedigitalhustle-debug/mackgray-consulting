# MackGray Consulting Website

## Overview
Marketing and credibility website for MackGray Consulting, a licensed Lacad Consulting partner. Built to support cold outreach: recipients land here after receiving a personal email from Mack Gray, and the site exists to build trust and answer "why did I get this email," not to attract organic traffic.

## Technology Stack
Next.js (App Router), TypeScript, Tailwind CSS. Deployed on Vercel Hobby (free). No backend, no database, no paid APIs.

## Folder Structure
- app/ - route pages (page.tsx per route), plus layout.tsx and globals.css
- components/ - shared UI: header, footer, person-note, lacad-link, contact-form
- lib/site.ts - single source of truth for name, email, photo, signature, and the Lacad URL
- public/images/ - static assets, including mack-gray.jpg

## Running Locally
npm install
npm run dev

## Production Build
npm run build
npm start

## Deployment
Push this repository to GitHub, import it into Vercel, and deploy. No environment variables are required.

## Replacing the Headshot
Save your photo as public/images/mack-gray.jpg (same filename), or update the photo path in lib/site.ts if you use a different filename.

## Updating Business Information
All name, email, role, and signature text live in lib/site.ts — update fields there rather than hunting through individual pages.

## Updating the Lacad Consulting URL
Also in lib/site.ts, the lacadUrl field. If left empty, the site safely falls back to plain text instead of a broken link.
