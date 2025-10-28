import type { Persona } from "@/lib/personas";

export default function PersonaBadge({ persona }: { persona: Persona }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm">
      <span className="text-xl" aria-hidden>
        {persona.icon}
      </span>
      <div className="text-left">
        <span className="block text-xs font-semibold uppercase tracking-wide text-amber-200">
          Persona
        </span>
        <span className="text-sm font-medium text-slate-100">{persona.name}</span>
      </div>
    </div>
  );
}
