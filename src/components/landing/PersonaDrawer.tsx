"use client";

import type { Persona } from "@/lib/personas";
import { Fragment } from "react";

export type PersonaDrawerProps = {
  persona: Persona | null;
  onClose: () => void;
  onChoose: (persona: Persona) => void;
};

export default function PersonaDrawer({
  persona,
  onClose,
  onChoose,
}: PersonaDrawerProps) {
  const isOpen = persona !== null;

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 flex items-end justify-center bg-black/60 px-4 py-6 transition ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={isOpen ? `${persona?.id}-title` : undefined}
        className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/40"
      >
        {persona ? (
          <Fragment>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-4xl" aria-hidden>
                  {persona.icon}
                </p>
                <h3
                  id={`${persona.id}-title`}
                  className="mt-2 text-2xl font-semibold text-amber-300"
                >
                  {persona.name}
                </h3>
                <p className="mt-1 text-sm text-slate-300">{persona.blurb}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300 transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
              >
                Close
              </button>
            </div>

            <div className="mt-4 space-y-4 text-sm text-slate-200">
              <p>{persona.description}</p>
              <p className="text-slate-300">{persona.supportFocus}</p>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Goals
                </h4>
                <ul className="mt-2 space-y-1 text-slate-200">
                  {persona.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2">
                      <span aria-hidden className="mt-1 text-amber-300">
                        •
                      </span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onChoose(persona)}
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
              >
                Choose this character
              </button>
              <p className="text-xs text-slate-500">
                You can change personas at any time during your journey.
              </p>
            </div>
          </Fragment>
        ) : null}
      </div>
    </div>
  );
}
