import { Lang } from "../i18n/index.11ty";

export function printPrice(price: number, lang: Lang): string {
  const amount = price.toFixed(2);
  return lang == "en" ? `€${amount}` : `${amount}€`;
}
