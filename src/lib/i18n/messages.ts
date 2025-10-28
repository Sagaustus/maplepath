import type { Messages } from "./types";

export function resolveMessages(input: Messages | string | undefined): Messages {
  if (typeof input === "string") {
    try {
      return JSON.parse(input) as Messages;
    } catch (error) {
      throw new Error("Failed to parse serialized messages. Ensure they are valid JSON.");
    }
  }

  if (!input) {
    throw new Error("messages cannot be undefined");
  }

  return input;
}
