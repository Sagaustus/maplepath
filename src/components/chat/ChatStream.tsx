"use client";

import { useMemo } from "react";

import { getPersonaById } from "@/data/personas";
import { useOnboardingState } from "@/context/onboarding-context";

import ReportOutdatedLink from "./ReportOutdatedLink";
import VerifiedBadge from "./VerifiedBadge";

type AssistantMessage = {
  role: "assistant";
  content: string;
  verifiedOn?: string;
};

type UserMessage = {
  role: "user";
  content: string;
};

type ChatMessage = AssistantMessage | UserMessage;

const FALLBACK_MESSAGES: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Hi there! I’m here to guide you through resources, programs, and next steps tailored to your journey in Canada.",
    verifiedOn: "May 2024",
  },
  {
    role: "user",
    content: "I’m not sure where to start. Can you help me find newcomer supports?",
  },
  {
    role: "assistant",
    content:
      "Absolutely. Based on what you’ve shared we can explore housing, employment, and community programs near you.",
    verifiedOn: "May 2024",
  },
];

export default function ChatStream() {
  const { personaId, city, province, needs } = useOnboardingState();
  const persona = getPersonaById(personaId);

  const introMessage = useMemo<AssistantMessage | null>(() => {
    if (!persona && !city && !province) {
      return null;
    }

    const location = [city, province].filter(Boolean).join(", ");
    const needsSummary = needs.length
      ? `You highlighted ${needs.join(", ")} as priorities.`
      : "Let’s discover the right supports for you.";

    const personaIntro = persona
      ? `${persona.icon} You’re chatting as the ${persona.name.toLowerCase()}.`
      : "";

    return {
      role: "assistant",
      content: `${personaIntro} ${location ? `Let’s focus on services around ${location}.` : ""} ${needsSummary}`.trim(),
      verifiedOn: "May 2024",
    };
  }, [persona, city, province, needs]);

  const messages = introMessage
    ? [FALLBACK_MESSAGES[0], introMessage, ...FALLBACK_MESSAGES.slice(1)]
    : FALLBACK_MESSAGES;

  return (
    <div className="space-y-4">
      {messages.map((message, index) => {
        const isAssistant = message.role === "assistant";
        return (
          <article
            key={`${message.role}-${index}`}
            className={`max-w-3xl rounded-3xl border border-slate-800 px-5 py-4 text-sm leading-relaxed shadow-lg shadow-black/10${
              isAssistant
                ? " ml-0 bg-slate-900/70 text-slate-200"
                : " ml-auto bg-amber-300/10 text-amber-50"
            }`}
            aria-label={`${isAssistant ? "Assistant" : "You"} message`}
          >
            <p>{message.content}</p>
            {isAssistant ? (
              <footer className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px]">
                {message.verifiedOn ? (
                  <VerifiedBadge verifiedOn={message.verifiedOn} />
                ) : null}
                <ReportOutdatedLink />
              </footer>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
