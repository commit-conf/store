import en from "./en.11ty";
import es from "./es.11ty";
import { ResType } from "./ResType.11ty";

export type Lang = "en" | "es";

const _i18n = {
  en,
  es
} as Record<Lang, ResType>;

export function getI18n(lang: Lang): ResType {
  const i18n = _i18n[lang];
  return i18n;
}

export default _i18n;