MallMitra — E-commerce Frontend

Lightweight storefront built with Next.js, TypeScript, React and Redux Toolkit — the frontend for the MallMitra demo ecommerce app.

## Features

- Product listing and detail pages
- Client-side cart powered by Redux Toolkit
- API routes for brands and product data (local / mocked)
- Responsive layout using Bootstrap + custom styles

## Tech stack

- Next.js 15 (App Router)
- React 19, TypeScript
- Redux Toolkit and React-Redux
- Bootstrap + Bootstrap Icons

## Prerequisites

- Node.js 18+ installed
- A package manager: `npm`, `pnpm`, or `yarn`

## Quick start

Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production:

```bash
npm run build
npm run start
```

Lint the project:

```bash
npm run lint
```

## Project layout (key files)

- src/app/ — Next.js app routes and pages
- src/app/components/ — shared UI components (Navbar, Footer, Productcard)
- src/app/store/ — Redux store and slices (CartSlice.ts, ProductSlice.ts)
- src/services/ — API service wrappers
- public/assets/images/ — static images and logos



