import Link from "next/link";

import ConsentRibbon from "@/components/landing/ConsentRibbon";
import PersonaGrid from "@/components/landing/PersonaGrid";

const steps = [
  {
    title: "Pick a persona",
    description:
      "Choose a starting character that reflects the newcomer you’re designing for. Each persona highlights unique goals and constraints.",
  },
  {
    title: "Capture context",
    description:
      "Fill out the onboarding form to share location, needs, and arrival stage so Maplepath can tailor the guidance it surfaces.",
  },
  {
    title: "Explore resources",
    description:
      "Use the chat workspace to discover vetted programs, rapid actions, and guided journeys that keep newcomers moving forward.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-12 lg:py-16">
      <section
        aria-labelledby="landing-hero"
        className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/60 p-8 shadow-xl shadow-black/30 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
      >
        <div className="space-y-6">
          <h1 id="landing-hero" className="text-4xl font-bold tracking-tight md:text-5xl">
            Design safer newcomer journeys with confidence
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Maplepath pairs trauma-informed accessibility with rapid prototyping tools so you can test support flows quickly and
            responsibly.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/onboarding"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-base font-semibold text-slate-950 shadow-lg transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            >
              Start onboarding
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-transparent px-5 py-3 text-base font-semibold text-amber-200 transition hover:border-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            >
              Jump to chat
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-200">
          <h2 className="text-base font-semibold uppercase tracking-wide text-amber-200">
            Consent ribbon
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Keep the quick-exit button visible, offer anonymous browsing, and invite progress saving for folks who want to come
            back later.
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Maplepath keeps this safety messaging in view across the experience.
          </p>
        </div>
      </section>

      <section aria-labelledby="persona-section" className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="persona-section" className="text-2xl font-semibold text-amber-200">
              Choose a persona to shape the journey
            </h2>
            <p className="text-sm text-slate-300">
              Personas capture lived experiences so research, content, and features land with empathy.
            </p>
          </div>
          <Link
            href="/onboarding"
            className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
          >
            Continue without selecting
          </Link>
        </div>
        <PersonaGrid />
      </section>

      <ConsentRibbon />

      <section aria-labelledby="workflow-heading" className="space-y-6">
        <h2 id="workflow-heading" className="text-2xl font-semibold text-amber-200">
          How Maplepath flows
        </h2>
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/20"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Step {index + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-amber-200">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="border-t border-slate-800 pt-6 text-sm text-slate-400">
        Built with Next.js 14, Tailwind CSS, and a focus on inclusive design for newcomers.
      </footer>
    </div>
  );
}
