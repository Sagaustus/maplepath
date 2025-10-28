import { createTranslator } from "next-intl";

import { getMessages } from "@/lib/i18n/get-messages";
import { resolveLocale } from "@/lib/i18n/resolve-locale";
import { resolveMessages } from "@/lib/i18n/messages";

const featureKeys = [
  "accessibility",
  "internationalisation",
  "performance",
] as const;

export default async function Home() {
  const locale = resolveLocale();
  const messages = await getMessages(locale);
  const resolvedMessages = resolveMessages(messages);
  const t = createTranslator({ locale, messages: resolvedMessages, namespace: "home" });

  return (
    <main
      id="main-content"
      className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-12 lg:py-16"
    >
      <section aria-labelledby="welcome-heading" className="space-y-6">
        <div className="space-y-4">
          <h1 id="welcome-heading" className="text-4xl font-bold tracking-tight md:text-5xl">
            {t("title")}
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            {t("subtitle")}
          </p>
        </div>
        <div>
          <a
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            href="https://github.com/Sagaustus/maplepath#readme"
            target="_blank"
            rel="noreferrer"
          >
            {t("cta")}
          </a>
          <p className="mt-2 text-sm text-slate-400">{t("ctaDescription")}</p>
        </div>
      </section>

      <section aria-labelledby="features-heading" className="space-y-6">
        <h2 id="features-heading" className="text-2xl font-semibold">
          {t("featuresHeading")}
        </h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {featureKeys.map((feature) => (
            <li
              key={feature}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/30"
            >
              <h3 className="text-xl font-semibold text-amber-300">
                {t(`features.${feature}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {t(`features.${feature}.description`)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="getting-started-heading" className="space-y-4">
        <h2 id="getting-started-heading" className="text-2xl font-semibold">
          {t("gettingStartedHeading")}
        </h2>
        <p className="max-w-2xl text-base text-slate-300">
          {t("gettingStartedDescription")}
        </p>
      </section>

      <footer className="border-t border-slate-800 pt-6 text-sm text-slate-400">
        {t("footerNote")}
      </footer>
    </main>
  );
}
