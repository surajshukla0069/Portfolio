# Portfolio Website

A modern personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

This project is designed to present professional profile content in a clean single-page flow with dedicated sections for skills, education, experience, projects, services, achievements, and contact.

## Live Sections

- Hero
- About
- Skills
- Education
- Experience
- Projects
- Services
- Achievements
- Why Hire Me
- Contact

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- shadcn/ui + Radix UI
- React Router
- Framer Motion
- Vitest + Testing Library
- Playwright

## Getting Started

### Prerequisites

- Node.js 18+
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app runs at the local URL printed by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run build:dev` - Create development-mode build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks
- `npm run test` - Run unit tests once (Vitest)
- `npm run test:watch` - Run unit tests in watch mode

## Project Structure

```text
src/
	components/      Reusable page sections and UI components
	hooks/           Custom React hooks
	lib/             Utilities
	pages/           Route-level pages
	test/            Test setup and test files
```

## Deployment

You can deploy this project to platforms like Vercel, Netlify, or GitHub Pages after running:

```bash
npm run build
```

Use the generated `dist/` directory as the deployment artifact.

## License

This project is for personal portfolio use. Add a custom license if you plan to open source it publicly.
