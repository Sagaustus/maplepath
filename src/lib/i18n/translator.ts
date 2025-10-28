import type { Messages, MessageValue, Translator } from "./types";

interface CreateTranslatorOptions {
  messages: Messages;
  namespace?: string;
}

function resolvePath(root: MessageValue, path: string[]): MessageValue | undefined {
  return path.reduce<MessageValue | undefined>((accumulator, segment) => {
    if (accumulator && typeof accumulator === "object" && segment in accumulator) {
      return accumulator[segment];
    }

    return undefined;
  }, root);
}

function formatMessage(value: MessageValue, values?: Record<string, unknown>): string {
  if (typeof value !== "string") {
    return "";
  }

  if (!values) {
    return value;
  }

  return value.replace(/\{(\w+)\}/g, (match, token) => {
    if (token in values) {
      return String(values[token]);
    }

    return match;
  });
}

export function createTranslator({ messages, namespace }: CreateTranslatorOptions): Translator {
  const prefix = namespace ? namespace.split(".") : [];

  return (key, values) => {
    const path = [...prefix, ...key.split(".")];
    const value = resolvePath(messages, path);

    if (value === undefined) {
      return key;
    }

    return formatMessage(value, values);
  };
}
