"use client";

import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";

import { createTranslator } from "next-intl";

import type { Messages } from "./types";
import { resolveMessages } from "./messages";

interface TranslationProviderProps {
  children: ReactNode;
  locale: string;
  messages: Messages | string | undefined;
  namespace?: string;
}

const TranslationContext = createContext<ReturnType<typeof createTranslator> | null>(null);

export function TranslationProvider({ children, locale, messages, namespace }: TranslationProviderProps) {
  const resolvedMessages = useMemo(() => resolveMessages(messages), [messages]);

  const translator = useMemo(
    () => createTranslator({ locale, messages: resolvedMessages, namespace }),
    [locale, namespace, resolvedMessages]
  );

  return <TranslationContext.Provider value={translator}>{children}</TranslationContext.Provider>;
}

export function useTranslator() {
  const translator = useContext(TranslationContext);

  if (!translator) {
    throw new Error("useTranslator must be used within a TranslationProvider");
  }

  return translator;
}

export function useNamespacedTranslator(namespace: string) {
  const translator = useTranslator();

  return useMemo(() => (key: string, values?: Record<string, any>) => translator(`${namespace}.${key}`, values), [namespace, translator]);
}
