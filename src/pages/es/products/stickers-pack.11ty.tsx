import React from "react";
import { Eleventy } from "../../../../types";
import ProductView from "../../../_includes/components/ProductView.11ty";
import StickersPack from "../../../_data/products/StickersPack";
import es from "../../../_includes/i18n/es.11ty";
import BasicLayoutView from "../../../_includes/layouts/BasicLayoutView.11ty";

export function render(data: Eleventy) {
  const i18n = es;
  return (
    <BasicLayoutView {...data} lang="es" title={i18n[StickersPack.name]}>
      <ProductView product={StickersPack} />
    </BasicLayoutView>
  );
}
