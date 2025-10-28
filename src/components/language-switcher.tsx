"use client";

import { useCallback, useTransition, type ChangeEvent } from "react";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import { locales, localeCookieName, type AppLocale } from "@/lib/i18n/config";

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // one year

export function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("languageSwitcher");
  const [isPending, startTransition] = useTransition();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const nextLocale = event.target.value as AppLocale;

      document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`;

      startTransition(() => {
        router.refresh();
      });
    },
    [router]
  );

  return (
    <label className="flex items-center gap-2 text-sm font-medium">
      <span>{t("label")}:</span>
      <select
        className="rounded-md border border-slate-500 bg-slate-900 px-2 py-1 text-slate-100 shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
        onChange={handleChange}
        value={locale}
        aria-busy={isPending}
        disabled={isPending}
      >
        {locales.map((option) => (
          <option key={option} value={option}>
            {t(option === "en" ? "english" : "french")}
          </option>
        ))}
      </select>
    </label>
  );
}
