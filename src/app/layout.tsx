import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { I18nProvider } from "@/lib/i18n/context";
import { getMessages } from "@/lib/i18n/get-messages";
import { resolveLocale } from "@/lib/i18n/resolve-locale";
import { translate } from "@/lib/i18n/translator";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maplepath",
  description: "An accessible Next.js starter with internationalisation.",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = resolveLocale();
  const messages = await getMessages(locale);
  const skipLinkLabel = translate(messages, "navigation.skipToContent");

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}
      >
        <I18nProvider locale={locale} messages={messages}>
          <a className="skip-link" href="#main-content">
            {skipLinkLabel}
          </a>
          <div className="flex min-h-screen flex-col">
            <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
              <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
                <span className="text-lg font-semibold tracking-wide">Maplepath</span>
                <LanguageSwitcher />
              </div>
            </header>
            <div className="flex-1">{children}</div>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
