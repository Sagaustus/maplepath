import { cookies, headers } from "next/headers";

import type { AppLocale } from "./config";
import { defaultLocale, locales, localeCookieName } from "./config";

function isLocale(value: string): value is AppLocale {
  return locales.includes(value as AppLocale);
}

export function resolveLocale(): AppLocale {
  const cookieStore = cookies();
  const cookieLocale = cookieStore.get(localeCookieName)?.value;

  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = headers().get("accept-language");

  if (acceptLanguage) {
    const localesFromHeader = acceptLanguage
      .split(",")
      .map((token) => token.split(";")[0]?.trim())
      .filter(Boolean) as string[];

    for (const value of localesFromHeader) {
      const base = value.split("-")[0];

      if (isLocale(value)) {
        return value;
      }

      if (base && isLocale(base)) {
        return base;
      }
    }
  }

  return defaultLocale;
}
