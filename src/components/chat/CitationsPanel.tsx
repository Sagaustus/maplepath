"use client";

import { useState } from "react";

const PLACEHOLDER_CITATIONS = [
  {
    id: "cit-1",
    title: "Government of Canada – Settlement Services",
    description: "Overview of funded programs for newcomers across provinces.",
  },
  {
    id: "cit-2",
    title: "Legal Aid Ontario",
    description: "Eligibility criteria and application process for legal aid support.",
  },
];

export default function CitationsPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5 text-sm shadow-lg shadow-black/10">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-2 text-left font-semibold text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
      >
        Sources & references
        <span aria-hidden className="text-xs text-amber-100">
          {isOpen ? "Hide" : "Show"}
        </span>
      </button>
      {isOpen ? (
        <ul className="mt-4 space-y-3 text-slate-200">
          {PLACEHOLDER_CITATIONS.map((citation) => (
            <li key={citation.id} className="rounded-2xl border border-slate-900/60 bg-slate-900/70 p-4">
              <p className="font-medium text-amber-100">{citation.title}</p>
              <p className="mt-1 text-xs text-slate-400">{citation.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-xs text-slate-400">
          Citations for chat responses will appear here as we integrate trusted data sources.
        </p>
      )}
    </section>
  );
}
