import "server-only";
import type { AppLocale } from "./config";

const dictionaries = {
  en: () => import("./messages/en.json").then((module) => module.default),
  fr: () => import("./messages/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: AppLocale) => {
  if (locale in dictionaries) {
    return dictionaries[locale]();
  }
  // Fallback to English if the locale is not found
  return dictionaries.en();
};
