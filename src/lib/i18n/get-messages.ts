import "server-only";

import type { AppLocale } from "./config";
import { defaultLocale, locales } from "./config";
import type { Messages } from "./types";

const loaders: Record<AppLocale, () => Promise<Messages>> = {
  en: () => import("./messages/en.json").then((module) => module.default),
  fr: () => import("./messages/fr.json").then((module) => module.default),
};

function isLocale(value: string): value is AppLocale {
  return locales.includes(value as AppLocale);
}

export async function getMessages(locale: string): Promise<Messages> {
  const normalizedLocale = isLocale(locale) ? locale : defaultLocale;
  return loaders[normalizedLocale]();
}
