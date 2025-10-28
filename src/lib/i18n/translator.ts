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
    // previous behavior threw when a segment was missing; return undefined instead
    const [next, ...rest] = pathSegments;
    if (next == null) return obj;
    if (obj == null || !(next in obj)) {
      return undefined;
    }

    const nextVal = obj[next];

    if (rest.length === 0) {
      return nextVal;
    }

    return getNestedValue(nextVal, rest);
  }

  if (rest.length === 0) {
    if (typeof next === "string") {
      return next;
    }

    throw new Error(`Expected string translation at key: ${segment}`);
  }

  return getNestedValue(next, rest);
}

export function translate(
  locale: string,
  key: string,
  options?: { fallback?: string }
): string {
  const pathSegments = key.split(".");
  const val = getNestedValue(translationsForLocale, pathSegments);

  if (val == null) {
    const fallback = options?.fallback ?? key;
    console.warn(`Missing translation for key: ${key} (locale: ${locale}), falling back to: ${fallback}`);
    return fallback;
  }

  return String(val);
}

export function createTranslator(messages: Messages, namespace?: string) {
  return (key: string) => {
    const qualifiedKey = namespace ? `${namespace}.${key}` : key;
    return translate(messages, qualifiedKey);
  };
}
