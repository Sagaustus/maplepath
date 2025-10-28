"use client";

import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from "react";

import type { AppLocale } from "./config";
import type { Messages } from "./types";
import { createTranslator } from "./translator";

type TranslationContextValue = {
  locale: AppLocale;
  messages: Messages;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

export function TranslationsProvider({
  children,
  locale,
  messages,
}: PropsWithChildren<{
  locale: AppLocale;
  messages: Messages;
}>) {
  const value = useMemo(
    () => ({ locale, messages }),
    [locale, messages],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

function useTranslationContext() {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error(
      "useTranslations must be used within a TranslationsProvider",
    );
  }

  return context;
}

export function useLocale() {
  return useTranslationContext().locale;
}

export function useTranslations(namespace?: string) {
  const { messages } = useTranslationContext();

  return useMemo(
    () =>
      createTranslator({
        messages: (messages ?? {}) as Messages,
        namespace,
      }),
    [messages, namespace],
  );
}
