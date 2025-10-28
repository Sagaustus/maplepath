"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

import {
  useOnboarding,
  useOnboardingDispatch,
} from "@/context/onboarding-context";

const PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
];

const NEED_OPTIONS = [
  "Health",
  "Housing",
  "IDs",
  "School",
  "Work",
  "Legal",
  "Transit",
];

const ARRIVAL_STAGES = [
  { id: "0-3", label: "0–3 months in Canada" },
  { id: "3-12", label: "3–12 months in Canada" },
  { id: "12-plus", label: "12+ months in Canada" },
];

export default function OnboardingForm() {
  const router = useRouter();
  const { state } = useOnboarding();
  const dispatch = useOnboardingDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/chat");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950/70 p-8 shadow-xl shadow-black/20"
    >
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-amber-200">
          Where are you settling?
        </legend>
        <label className="block text-sm">
          <span className="text-slate-300">Province or territory</span>
          <select
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200"
            value={state.province}
            onChange={(event) =>
              dispatch({
                type: "updateProvince",
                province: event.target.value,
              })
            }
            required
          >
            <option value="" disabled>
              Select a province or territory
            </option>
            {PROVINCES.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-slate-300">City or community</span>
          <input
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200"
            type="text"
            value={state.city}
            onChange={(event) =>
              dispatch({ type: "updateCity", city: event.target.value })
            }
            placeholder="e.g., Toronto, Halifax, Yellowknife"
            required
          />
        </label>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-amber-200">
          What support do you need?
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {NEED_OPTIONS.map((need) => {
            const id = `need-${need.toLowerCase().replace(/[^a-z]+/g, "-")}`;
            const checked = state.needs.includes(need);
            return (
              <label
                key={need}
                htmlFor={id}
                className={`flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm transition hover:border-amber-300 focus-within:border-amber-300 ${
                  checked ? "border-amber-300" : ""
                }`}
              >
                <input
                  id={id}
                  name="needs"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-amber-400 focus:ring-amber-300"
                  checked={checked}
                  onChange={() => dispatch({ type: "toggleNeed", need })}
                />
                <span className="text-slate-200">{need}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-amber-200">
          Where are you in your journey?
        </legend>
        <div className="flex flex-col gap-3 sm:flex-row">
          {ARRIVAL_STAGES.map((stage) => {
            const checked = state.arrivalStage === stage.id;
            return (
              <label
                key={stage.id}
                className={`flex flex-1 cursor-pointer flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm transition hover:border-amber-300 focus-within:border-amber-300 ${
                  checked ? "border-amber-300" : ""
                }`}
              >
                <span className="font-semibold text-amber-100">{stage.label}</span>
                <span className="mt-2 text-xs text-slate-400">
                  {stage.id === "0-3"
                    ? "Just landed and figuring out first steps."
                    : stage.id === "3-12"
                      ? "Getting established and expanding supports."
                      : "Staying long-term and planning for stability."}
                </span>
                <input
                  type="radio"
                  name="arrival-stage"
                  value={stage.id}
                  checked={checked}
                  onChange={() =>
                    dispatch({
                      type: "updateArrivalStage",
                      arrivalStage: stage.id,
                    })
                  }
                  className="sr-only"
                  required
                />
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-400">
          We use this information to tailor your chat experience. You can update answers later.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          Continue to chat
        </button>
      </div>
    </form>
  );
}
