# Maplepath

This project was bootstrapped manually to match the default output of `create-next-app` with TypeScript, the App Router, Tailwind CSS, and an `@/*` import alias. It now includes the Maplepath newcomer experience: a persona-driven landing page, consent ribbon, onboarding flow, and chat prototype with quick-exit support baked in.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Key screens live at:

- `src/app/page.tsx` – persona grid, consent ribbon, and calls to action.
- `src/app/onboarding/page.tsx` – form for province, city, needs, and arrival stage stored in context.
- `src/app/chat/page.tsx` – chat stream with quick actions, citations placeholder, and guided journey card.

The pages auto-update as you edit them.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=appsite&utm_source=create-next-app&utm_campaign=create-next-app).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
