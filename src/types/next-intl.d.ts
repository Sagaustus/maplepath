declare module "next-intl" {
  import type { ReactElement, ReactNode } from "react";

  export type AbstractIntlMessages = Record<string, any>;

  export interface NextIntlClientProviderProps {
    children: ReactNode;
    locale?: string;
    messages?: AbstractIntlMessages;
    timeZone?: string;
  }

  export type Translator = (key: string, values?: Record<string, any>) => string;

  export interface CreateTranslatorOptions {
    locale: string;
    messages: AbstractIntlMessages;
    namespace?: string;
  }

  export function NextIntlClientProvider(props: NextIntlClientProviderProps): ReactElement;
  export function useLocale(): string;
  export function useTranslations<Namespace extends string = string>(
    namespace?: Namespace
  ): (key: string, values?: Record<string, any>) => string;
  export function createTranslator(options: CreateTranslatorOptions): Translator;
}
