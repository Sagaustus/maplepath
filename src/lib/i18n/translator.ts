import type { Messages } from "./types";

function getNestedValue(source: Messages | string, pathSegments: string[]): string {
  const [segment, ...rest] = pathSegments;

  if (typeof source === "string") {
    if (pathSegments.length === 0) {
      return source;
    }

    throw new Error(`Expected object while resolving translation, received string at segment "${segment}"`);
  }

  const next = source[segment];

  if (next == null) {
    throw new Error(`Missing translation for key: ${pathSegments.join(".")}`);
  }

  if (rest.length === 0) {
    if (typeof next === "string") {
      return next;
    }

    throw new Error(`Expected string translation at key: ${segment}`);
  }

  return getNestedValue(next, rest);
}

export function translate(messages: Messages, key: string): string {
  return getNestedValue(messages, key.split("."));
}

export function createTranslator(messages: Messages, namespace?: string) {
  return (key: string) => {
    const qualifiedKey = namespace ? `${namespace}.${key}` : key;
    return translate(messages, qualifiedKey);
  };
}
