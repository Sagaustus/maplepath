"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { personas, type Persona } from "@/data/personas";
import { useOnboarding } from "@/context/onboarding-context";

import PersonaDrawer from "./PersonaDrawer";

export default function PersonaGrid() {
  const router = useRouter();
  const {
    state: { personaId },
    dispatch,
  } = useOnboarding();
  const [activePersona, setActivePersona] = useState<Persona | null>(null);

  const handleSelect = (persona: Persona) => {
    dispatch({ type: "setPersona", personaId: persona.id });
    setActivePersona(null);
    router.push("/onboarding");
  };

  return (
    <div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {personas.map((persona) => {
          const isChosen = persona.id === personaId;
          return (
            <li key={persona.id}>
              <button
                type="button"
                className={`group flex w-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-left shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 hover:border-amber-300 ${
                  isChosen ? "border-amber-400" : ""
                }`}
                onClick={() => setActivePersona(persona)}
                aria-haspopup="dialog"
                aria-expanded={activePersona?.id === persona.id}
              >
                <span className="text-3xl" aria-hidden>
                  {persona.icon}
                </span>
                <span className="mt-3 text-lg font-semibold text-amber-200 group-hover:text-amber-100">
                  {persona.name}
                </span>
                <span className="mt-2 text-sm text-slate-300">{persona.blurb}</span>
                {isChosen ? (
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber-300">
                    Selected
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      <PersonaDrawer
        persona={activePersona}
        onClose={() => setActivePersona(null)}
        onChoose={handleSelect}
      />
    </div>
  );
}
