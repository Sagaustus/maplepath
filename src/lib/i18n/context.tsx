"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

import type { Messages } from "./types";
import { createTranslator } from "./translator";

type TranslationFunction = (key: string) => string;

interface ContextValue {
  locale: string;
  messages: Messages;
  getTranslator: (namespace?: string) => TranslationFunction;
}

const I18nContext = createContext<ContextValue | null>(null);

interface ProviderProps {
  children: ReactNode;
  locale: string;
  messages: Messages;
}

export function I18nProvider({ children, locale, messages }: ProviderProps) {
  const value = useMemo<ContextValue>(() => ({
    locale,
    messages,
    getTranslator: (namespace?: string) => createTranslator(messages, namespace),
  }), [locale, messages]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

function useI18nContext(): ContextValue {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18nContext must be used within an I18nProvider");
  }

  return context;
}

export function useLocale(): string {
  return useI18nContext().locale;
}

export function useTranslations(namespace?: string): TranslationFunction {
  const { getTranslator } = useI18nContext();
  return useMemo(() => getTranslator(namespace), [getTranslator, namespace]);
}
