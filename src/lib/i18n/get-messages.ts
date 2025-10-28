import "server-only";

import type { AbstractIntlMessages } from "next-intl";

import type { AppLocale } from "./config";
import { defaultLocale, locales } from "./config";

const loaders: Record<AppLocale, () => Promise<AbstractIntlMessages>> = {
  en: () => import("./messages/en.json").then((module) => module.default),
  fr: () => import("./messages/fr.json").then((module) => module.default),
};

function isLocale(value: string): value is AppLocale {
  return locales.includes(value as AppLocale);
}

export async function getMessages(locale: string): Promise<AbstractIntlMessages> {
  const normalizedLocale = isLocale(locale) ? locale : defaultLocale;
  return loaders[normalizedLocale]();
}
