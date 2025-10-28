"use client";

import Link from "next/link";

import PersonaBadge from "@/components/common/PersonaBadge";
import { getPersonaById } from "@/lib/personas";
import { useOnboardingState } from "@/context/onboarding-context";

import ChatStream from "./ChatStream";
import CitationsPanel from "./CitationsPanel";
import GuidedJourneyCard from "./GuidedJourneyCard";
import QuickTapChips from "./QuickTapChips";
import ProvinceChip from "./ProvinceChip";

export default function ChatPageContent() {
  const onboarding = useOnboardingState();
  const persona = getPersonaById(onboarding.personaId);
  const arrivalStageLabel = onboarding.arrivalStage
    ? {
        "0-3": "0–3 months in Canada",
        "3-12": "3–12 months in Canada",
        "12-plus": "12+ months in Canada",
      }[
        onboarding.arrivalStage as "0-3" | "3-12" | "12-plus"
      ] ?? onboarding.arrivalStage
    : "Not set";

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row">
      <div className="flex-1 space-y-8">
        <header className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-amber-200">Conversation hub</h1>
              <p className="mt-1 text-sm text-slate-300">
                Chat with Maplepath to uncover resources, programs, and guidance tailored to your newcomer journey.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {persona ? (
                <PersonaBadge persona={persona} />
              ) : (
                <Link
                  href="/"
                  className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
                >
                  Choose a persona
                </Link>
              )}
              <ProvinceChip province={onboarding.province} city={onboarding.city} />
            </div>
          </div>
          <QuickTapChips />
        </header>

        <ChatStream />

        <CitationsPanel />
      </div>

      <div className="w-full max-w-sm space-y-6">
        <GuidedJourneyCard />
        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-sm shadow-lg shadow-black/10">
          <h2 className="text-base font-semibold uppercase tracking-wide text-amber-200">
            Your onboarding summary
          </h2>
          <dl className="mt-4 space-y-3 text-slate-200">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Province</dt>
              <dd>{onboarding.province || "Not set"}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">City</dt>
              <dd>{onboarding.city || "Not set"}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Needs</dt>
              <dd>
                {onboarding.needs.length > 0
                  ? onboarding.needs.join(", ")
                  : "Select needs on the onboarding page."}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Arrival stage</dt>
              <dd>{arrivalStageLabel}</dd>
            </div>
          </dl>
          <Link
            href="/onboarding"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-amber-100 transition hover:bg-amber-300/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
          >
            Update onboarding details
          </Link>
        </section>
      </div>
    </div>
  );
}
