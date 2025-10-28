export type Messages = {
  [key: string]: string | Messages;
};

export interface I18nContextValue {
  locale: string;
  messages: Messages;
}
