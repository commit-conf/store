import en from "./en";
import es from "./es";
import { ResType } from "./ResType";

export type Lang = "en" | "es";

export default {
  en,
  es
} as Record<Lang, ResType>;