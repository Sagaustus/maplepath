import { cookies } from "next/headers";

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

  return defaultLocale;
}
