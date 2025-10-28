import type { Metadata } from "next";
import type { ReactNode } from "react";

import QuickExitButton from "@/components/ui/QuickExitButton";
import AppProviders from "@/components/providers/AppProviders";
import { LanguageSwitcher } from "@/components/language-switcher";

import "./globals.css";

export const metadata: Metadata = {
  title: "Maplepath",
  description: "An accessible Next.js starter.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 font-sans antialiased">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <header
            role="banner"
            className="border-b border-slate-800 bg-slate-950/80 backdrop-blur"
          >
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
              <div className="flex items-center gap-4">
                {/* Logo placeholder */}
                <a href="/" className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400" aria-label="Maplepath home">
                  <span className="inline-block h-8 w-8 rounded bg-amber-400" aria-hidden="true" />
                  <span className="text-lg font-semibold tracking-wide">Maplepath</span>
                </a>
              </div>

              <div className="flex items-center gap-4">
                {/* Language switcher (persisted via cookie) */}
                <LanguageSwitcher />

                {/* Quick exit button (client) */}
                <QuickExitButton />
              </div>
            </div>
          </header>

          <main id="main-content" className="flex-1" tabIndex={-1}>
            <AppProviders>{children}</AppProviders>
          </main>

          <footer role="contentinfo" className="border-t border-slate-800 bg-slate-950/80">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4 text-sm text-slate-400">
              <div className="flex items-center gap-4">
                <a href="/about" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">About</a>
                <a href="/privacy" className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">Privacy</a>
              </div>
              <div>&copy; {new Date().getFullYear()} Maplepath</div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
