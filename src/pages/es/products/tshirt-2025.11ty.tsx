import React from "react";
import { Eleventy } from "../../../../types";
import ProductView from "../../../_includes/components/ProductView.11ty";
import TShirt2025 from "../../../_data/products/TShirt2025";
import es from "../../../_includes/i18n/es.11ty";
import BasicLayoutView from "../../../_includes/layouts/BasicLayoutView.11ty";

export function render(data: Eleventy) {
  const i18n = es;
  return (
    <BasicLayoutView {...data} lang="es" title={i18n[TShirt2025.name]}>
      <ProductView product={TShirt2025} />
    </BasicLayoutView>
  );
}
