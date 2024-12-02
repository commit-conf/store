import React from "react";
import { Lang } from "../i18n/index.11ty";
import { printPrice } from "../utils/price";

interface PriceViewProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  price: number;
  lang: Lang;
}

export default function PriceView({ price, lang, ...rest }: PriceViewProps) {
  return <span {...rest}>{printPrice(price, lang)}</span>;
}
