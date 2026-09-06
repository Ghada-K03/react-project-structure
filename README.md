# React Project Structure

A clean and scalable React project structure built using React, TypeScript, and Vite.

## Objective

The purpose of this project is to demonstrate a professional and maintainable folder structure for a React application.

## Technologies

- React
- TypeScript
- Vite
- ESLint

## Project Structure

```text
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── providers/
│   │   └── AppProvider.tsx
│   ├── skeleton/
│   │   └── LoadingSkeleton.tsx
│   └── common/
│       └── EmptyState.tsx
│
├── hooks/
│   └── useDebounce.ts
├── api/
│   └── axios.ts
├── types/
│   └── user.types.ts
├── store/
│   └── auth.store.ts
├── pages/
│   ├── Home.tsx
│   └── About.tsx
├── constants/
│   └── routes.ts
├── i18n/
│   ├── config.ts
│   └── en.json
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── schemas/
│   └── user.schema.ts
└── utils/
    └── formatDate.ts
```

## Folder Description

- **components** - Reusable React components.
- **hooks** - Custom React hooks.
- **api** - API configuration and requests.
- **types** - TypeScript types and interfaces.
- **store** - Global state management.
- **pages** - Application pages.
- **constants** - Constant values and routes.
- **i18n** - Internationalization and translations.
- **assets** - Images, icons, and fonts.
- **schemas** - Validation schemas.
- **utils** - Reusable utility functions.

## Installation

```bash
npm install
```

## Run the Project

```bash
npm run dev
```
