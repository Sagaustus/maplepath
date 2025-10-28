"use client";

import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";

import type { Messages, Translator } from "./types";
import { resolveMessages } from "./messages";
import { createTranslator } from "./translator";

interface TranslationProviderProps {
  children: ReactNode;
  locale: string;
  messages: Messages | string | undefined;
  namespace?: string;
}

interface TranslationContextValue {
  locale: string;
  translate: Translator;
}

const TranslationContext = createContext<TranslationContextValue | null>(null);

export function TranslationProvider({ children, locale, messages, namespace }: TranslationProviderProps) {
  if (messages === undefined) {
    throw new Error("TranslationProvider requires resolved messages.");
  }

  const resolvedMessages = useMemo<Messages>(() => resolveMessages(messages), [messages]);

  const translator = useMemo(
    () => createTranslator({ messages: resolvedMessages, namespace }),
    [namespace, resolvedMessages]
  );

  const value = useMemo<TranslationContextValue>(
    () => ({ locale, translate: translator }),
    [locale, translator]
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslator() {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("useTranslator must be used within a TranslationProvider");
  }

  return context.translate;
}

export function useNamespacedTranslator(namespace: string) {
  const translator = useTranslator();

  return useMemo(() => (key: string, values?: Record<string, any>) => translator(`${namespace}.${key}`, values), [namespace, translator]);
}

export function useCurrentLocale() {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("useCurrentLocale must be used within a TranslationProvider");
  }

  return context.locale;
}
