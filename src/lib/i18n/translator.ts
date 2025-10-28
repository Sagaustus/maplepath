import type { Messages } from "./types";

function getNestedValue(obj: any, pathSegments: string[]): any {
  // handle empty path
  if (!pathSegments || pathSegments.length === 0) return obj;

  const [next, ...rest] = pathSegments;

  // if next segment is not present, just return the current object
  if (next == null) return obj;

  // if current object is null/undefined or doesn't contain the key, return undefined
  if (obj == null || typeof obj !== "object" || !(next in obj)) {
    return undefined;
  }

  const nextVal = (obj as any)[next];

  if (rest.length === 0) {
    return nextVal;
  }

  return getNestedValue(nextVal, rest);
}

export function translate(
  locale: string,
  key: string,
  options?: { fallback?: string; translations?: Record<string, any> }
): string {
  const pathSegments = key.split(".");

  // Prefer explicit translations passed in options, then a possible global container
  // (e.g. globalThis.__translations[locale]), otherwise use an empty object.
  const translationsForLocale: Record<string, any> =
    options?.translations ?? (globalThis as any).__translations?.[locale] ?? {};

  const val = getNestedValue(translationsForLocale, pathSegments);

  if (val == null) {
    const fallback = options?.fallback ?? key;
    console.warn(
      `Missing translation for key: ${key} (locale: ${locale}), falling back to: ${fallback}`
    );
    return fallback;
  }

  return String(val);
}

export function createTranslator(messages: Messages, namespace?: string) {
  // Return a translator that looks up keys directly on the provided messages object.
  return (key: string, options?: { fallback?: string }) => {
    const qualifiedKey = namespace ? `${namespace}.${key}` : key;
    const pathSegments = qualifiedKey.split(".");
    const val = getNestedValue(messages, pathSegments);

    if (val == null) {
      const fallback = options?.fallback ?? qualifiedKey;
      console.warn(
        `Missing translation for key: ${qualifiedKey}, falling back to: ${fallback}`
      );
      return fallback;
    }

    return String(val);
  };
}
