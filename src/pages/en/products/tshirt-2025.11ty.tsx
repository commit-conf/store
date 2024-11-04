import React from "react";
import { Eleventy } from "../../../../types";
import ProductView from "../../../_includes/components/ProductView.11ty";
import TShirt2025 from "../../../_data/products/TShirt2025";
import en from "../../../_includes/i18n/en.11ty";
import BasicLayoutView from "../../../_includes/layouts/BasicLayoutView.11ty";

export function render(data: Eleventy) {
  const i18n = en;
  return (
    <BasicLayoutView {...data} lang="en" title={i18n[TShirt2025.name]}>
      <ProductView product={TShirt2025} />
    </BasicLayoutView>
  );
}
