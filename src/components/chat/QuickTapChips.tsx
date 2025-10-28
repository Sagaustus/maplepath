"use client";

const CHIP_LABELS = [
  "Find housing programs",
  "Explore language classes",
  "Check work permits",
  "Plan my finances",
  "Connect with community",
];

export default function QuickTapChips() {
  return (
    <div className="flex flex-wrap gap-3">
      {CHIP_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-amber-200 transition hover:border-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
