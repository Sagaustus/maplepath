"use client";

import { useCallback } from "react";

const SAFE_EXIT_URL = "https://www.google.com";

export default function QuickExitButton() {
  const handleQuickExit = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.location.replace(SAFE_EXIT_URL);
  }, []);

  return (
    <button
      type="button"
      onClick={handleQuickExit}
      className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-200"
      aria-label="Leave this site immediately and open a safe page"
    >
      Quick Exit
    </button>
  );
}
