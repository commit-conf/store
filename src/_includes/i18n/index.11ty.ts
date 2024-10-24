import en from "./en.11ty";
import es from "./es.11ty";
import { ResType } from "./ResType.11ty";

export type Lang = "en" | "es";

export default {
  en,
  es
} as Record<Lang, ResType>;