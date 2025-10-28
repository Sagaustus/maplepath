"use client";

import { OnboardingProvider } from "@/context/onboarding-context";
import type { ReactNode } from "react";

export default function AppProviders({ children }: { children: ReactNode }) {
  return <OnboardingProvider>{children}</OnboardingProvider>;
}
