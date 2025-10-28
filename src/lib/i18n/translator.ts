import type { Messages } from "./types";

type CreateTranslatorArgs = {
  messages: Messages;
  namespace?: string;
};

function resolveMessage(messages: Messages, key: string): string {
  const segments = key.split(".");
  let current: unknown = messages;

  for (const segment of segments) {
    if (typeof current !== "object" || current === null) {
      return key;
    }

    const nextValue = (current as Record<string, unknown>)[segment];

    if (nextValue === undefined) {
      return key;
    }

    current = nextValue;
  }

  return typeof current === "string" ? current : key;
}

export function createTranslator({ messages, namespace }: CreateTranslatorArgs) {
  const prefix = namespace ? `${namespace}.` : "";

  return (key: string) => resolveMessage(messages, `${prefix}${key}`);
}
