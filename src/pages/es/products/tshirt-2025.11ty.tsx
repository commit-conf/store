import React from "react";
import { Eleventy } from "../../../../types";
import TShirt2025, {
  getTShirt2025Scheme,
} from "../../../_data/products/TShirt2025";
import es from "../../../_includes/i18n/es.11ty";
import BasicLayoutView from "../../../_includes/layouts/BasicLayoutView.11ty";
import TShirtProductView from "../../../_includes/components/TShirtProductView.11ty";

export function render(data: Eleventy) {
  const i18n = es;
  return (
    <BasicLayoutView
      {...data}
      lang={i18n.locale}
      title={i18n[TShirt2025.name]}
      product={TShirt2025}
      scheme={getTShirt2025Scheme(i18n)}
    >
      <TShirtProductView tshirt={TShirt2025} />
    </BasicLayoutView>
  );
}
