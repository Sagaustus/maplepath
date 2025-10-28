export default function GuidedJourneyCard() {
  return (
    <aside className="rounded-3xl border border-emerald-500/40 bg-emerald-400/10 p-6 text-sm text-emerald-50 shadow-lg shadow-emerald-500/20">
      <h3 className="text-base font-semibold uppercase tracking-wide text-emerald-200">
        Guided journeys
      </h3>
      <p className="mt-2 text-sm text-emerald-100/80">
        We’re building step-by-step wizards that recommend actions for housing, employment, and documentation. They’ll appear here soon.
      </p>
      <button
        type="button"
        className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-100 transition hover:bg-emerald-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
      >
        Preview prototypes
      </button>
    </aside>
  );
}
