import React from "react";
import es from "./es.11ty";
import { ResType } from "./ResType.11ty";

export type Lang = "en" | "es";

export type I18nEntry = keyof ResType;

const _i18n = {
  es
} as Record<Lang, ResType>;

export function getI18n(lang: Lang): ResType {
  const i18n = _i18n[lang];
  return i18n;
}

interface I18nContextProps {
  lang: Lang;
  i18n: ResType;
}

export const I18nContext = React.createContext<I18nContextProps>({
  i18n: es,
  lang: 'es'
});

export default _i18n;