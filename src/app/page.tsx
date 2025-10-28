const featureCards = [
  {
    title: "Accessibility first",
    description:
      "Skip links, sensible headings, and high-contrast defaults give you a strong baseline for inclusive experiences.",
  },
  {
    title: "Developer friendly",
    description:
      "Comes with TypeScript, ESLint, and Tailwind CSS so you can start building without the usual boilerplate.",
  },
  {
    title: "Production ready",
    description:
      "Optimised Next.js App Router setup that deploys cleanly to platforms like Vercel.",
  },
  {
    title: "Customisable",
    description:
      "Clean project structure that is easy to extend with your own pages, API routes, and components.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-12 lg:py-16">
      <section aria-labelledby="welcome-heading" className="space-y-6">
        <div className="space-y-4">
          <h1 id="welcome-heading" className="text-4xl font-bold tracking-tight md:text-5xl">
            Maplepath accelerates accessible web apps
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Start from a polished Next.js foundation that pairs modern tooling with thoughtful accessibility defaults.
          </p>
        </div>
        <div>
          <a
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            href="https://github.com/Sagaustus/maplepath#readme"
            target="_blank"
            rel="noreferrer"
          >
            Explore the documentation
          </a>
          <p className="mt-2 text-sm text-slate-400">Learn how to run the project, customise it, and deploy confidently.</p>
        </div>
      </section>

      <section aria-labelledby="features-heading" className="space-y-6">
        <h2 id="features-heading" className="text-2xl font-semibold">
          Everything you need to ship quickly
        </h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {featureCards.map((feature) => (
            <li
              key={feature.title}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/30"
            >
              <h3 className="text-xl font-semibold text-amber-300">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="getting-started-heading" className="space-y-4">
        <h2 id="getting-started-heading" className="text-2xl font-semibold">
          Get started in minutes
        </h2>
        <p className="max-w-2xl text-base text-slate-300">
          Clone the repository, install dependencies, and run the development server with <code>npm run dev</code> or your
          preferred package manager. Update the Tailwind config and pages directory to add new experiences.
        </p>
      </section>

      <footer className="border-t border-slate-800 pt-6 text-sm text-slate-400">
        Built with Next.js 14, Tailwind CSS, and a focus on inclusive design.
      </footer>
    </div>
  );
}
