"use client";

import { useState } from "react";

export default function ConsentRibbon() {
  const [choice, setChoice] = useState<"anonymous" | "save" | null>(null);

  return (
    <div className="mt-12 rounded-3xl border border-amber-400/50 bg-amber-300/10 p-6 text-sm text-amber-50">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-base font-semibold uppercase tracking-wide text-amber-200">
            Consent preferences
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-amber-100/90">
            Choose how you want to use Maplepath. You can explore anonymously or opt in to save your progress securely.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setChoice("anonymous")}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 ${
              choice === "anonymous"
                ? "bg-amber-300 text-slate-950"
                : "bg-slate-900/70 text-amber-100 hover:bg-slate-900"
            }`}
          >
            Use anonymously
          </button>
          <button
            type="button"
            onClick={() => setChoice("save")}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 ${
              choice === "save"
                ? "bg-amber-300 text-slate-950"
                : "bg-slate-900/70 text-amber-100 hover:bg-slate-900"
            }`}
          >
            Save progress
          </button>
          <span className="text-xs text-amber-100/70">
            {choice === "anonymous"
              ? "We won’t store any personal data during this session."
              : choice === "save"
                ? "We’ll ask for contact details later so you can return to your plan."
                : "Select an option to see how we protect your data."}
          </span>
        </div>
      </div>
    </div>
  );
}
