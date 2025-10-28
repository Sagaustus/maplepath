"use client";

import { useCallback, useTransition, type ChangeEvent } from "react";
import { useRouter, usePathname } from "next/navigation";

import { locales, localeCookieName, defaultLocale, type AppLocale } from "@/lib/i18n/config";

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // one year

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

function getLocaleFromPath(pathname: string): string | undefined {
  if (!pathname) return undefined;
  const match = pathname.match(/^\/(en|fr)(?:\/|$)/);
  return match ? match[1] : undefined;
}

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const [isPending, startTransition] = useTransition();

  // Determine current locale (path > cookie > browser > default)
  const pathLocale = getLocaleFromPath(pathname);
  const cookieLocale = readCookie(localeCookieName);
  const browserLocale = typeof navigator !== "undefined" ? (navigator.language || navigator.languages?.[0]) : undefined;
  const browserNormalized = browserLocale ? (browserLocale.startsWith("fr") ? "fr" : "en") : undefined;
  const currentLocale = (pathLocale || cookieLocale || browserNormalized || defaultLocale) as AppLocale;

  const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as AppLocale;

    // Set cookie so middleware and future requests remember preference
    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`;

    // Strip old locale from path and navigate to new locale-prefixed path
    const strippedPath = pathname.replace(/^\/(en|fr)/, "");
    const target = `/${nextLocale}${strippedPath}` || `/${nextLocale}`;

    startTransition(() => {
      router.push(target);
    });
  }, [pathname, router]);

  return (
    <label className="flex items-center gap-2 text-sm font-medium" aria-label="Language selector">
      <span className="sr-only">Language:</span>
      <select
        className="rounded-md border border-slate-300 bg-white px-2 py-1 text-slate-900 shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
        onChange={handleChange}
        value={currentLocale}
        aria-live="polite"
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </label>
  );
}
