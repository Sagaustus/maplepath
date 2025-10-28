import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { TranslationsProvider } from "@/lib/i18n/translation-context";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { AppLocale } from "@/lib/i18n/config";
import QuickExitButton from "@/components/ui/QuickExitButton";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maplepath",
  description: "Maplepath app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: AppLocale };
}) {
  const messages = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        {/* Skip to content */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:inline-block absolute left-4 top-4 z-50 rounded px-3 py-2 bg-white shadow-md"
        >
          Skip to content
        </a>

        <header className="border-b bg-white">
          <div className="container mx-auto flex items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-lg">Maplepath</span>
              <nav className="hidden md:flex gap-3 text-sm">
                <a
                  href="/"
                  className="px-2 py-1 rounded-2xl hover:bg-gray-100"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="px-2 py-1 rounded-2xl hover:bg-gray-100"
                >
                  About
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <QuickExitButton />
            </div>
          </div>
        </header>

        <main id="content" className="container mx-auto p-6">
          <TranslationsProvider locale={locale} messages={messages}>
            {children}
          </TranslationsProvider>
        </main>

        <footer className="border-t bg-white">
          <div className="container mx-auto p-4 text-sm text-center">
            &copy; {new Date().getFullYear()} Maplepath
          </div>
        </footer>
      </body>
    </html>
  );
}
