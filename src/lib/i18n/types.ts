export type MessageLeaf = string;
export type MessageValue = MessageLeaf | { [key: string]: MessageValue };

export type Messages = { [key: string]: MessageValue };

export type Translator = (key: string, values?: Record<string, unknown>) => string;
