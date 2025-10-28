import type { Metadata } from "next";
import type { ReactNode } from "react";

import AppProviders from "@/components/providers/AppProviders";
import QuickExitButton from "@/components/ui/QuickExitButton";

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
        <AppProviders>
          <a className="skip-link" href="#main-content">
            Skip to main content
          </a>
          <div className="flex min-h-screen flex-col">
            <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
              <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
                <span className="text-lg font-semibold tracking-wide">Maplepath</span>
                <QuickExitButton />
              </div>
            </header>
            <main id="main-content" className="flex-1">
              {children}
            </main>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
