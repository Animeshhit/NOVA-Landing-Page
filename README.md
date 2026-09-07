# NOVA — Build better. Work smarter.

A polished, responsive SaaS landing page for NOVA, an AI productivity platform that helps teams manage projects, automate repetitive work, and collaborate with clarity.

## Technologies

- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS v4
- Lucide React icons
- Vercel Analytics

## Features

- Responsive navigation with mobile menu and smooth anchor links
- Illustrated hero composition built with CSS shapes and motion
- Six varied feature cards
- Product dashboard mockup
- Four-step animated-style workflow section
- Statistics band, solution tabs, testimonial carousel, and pricing toggle
- Accessible FAQ accordion
- Demo modal, newsletter validation, and back-to-top control
- Reduced-motion support through `prefers-reduced-motion`

## Getting started

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Live demo

Live demo URL: _Add deployment URL here_

## Screenshots

Screenshots can be captured from the responsive preview at desktop and mobile breakpoints.

## Design decisions

NOVA uses a warm cream canvas, near-black typography, coral emphasis, and saturated editorial cards inspired by playful product-led SaaS brands. The visual system intentionally favors CSS-built product artifacts and illustrations so the page remains fast, editable, and easy to explain in an interview.

## Project structure

- `app/page.tsx` — route entry point
- `app/layout.tsx` — metadata, viewport, and global shell
- `app/globals.css` — design tokens, responsive layout, illustrations, motion, and accessibility styles
- `components/nova-landing.tsx` — reusable landing page sections and interactive state

## Animation approach

Motion is lightweight and purposeful: CSS transforms power hero floating elements and hover states, while React state handles modal, tabs, accordion, carousel, and billing transitions. Non-essential motion is disabled or reduced for users who prefer reduced motion.

## Responsive approach

Layouts use mobile-first breakpoints with true structural changes: multi-column editorial sections collapse into readable stacks, feature and pricing cards become single-column flows, and the full navigation becomes a touch-friendly menu.

## Accessibility and performance

The page uses semantic sections, heading hierarchy, labeled controls, keyboard-friendly buttons, meaningful link text, focusable interactive elements, and accessible accordion state. It avoids heavy image/video dependencies, uses CSS transforms for animation, and keeps all visual artifacts local to the component stylesheet.

## AI tools used

Built with v0 using the supplied NOVA assignment and Clay-inspired design analysis as references. The implementation was reviewed in a live browser at desktop and mobile viewports and validated with a production build.
