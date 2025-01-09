import React from "react";
import { Eleventy } from "../../../types";
import StickersPack, {
  getStickersPackScheme,
} from "../../_data/products/StickersPack";
import es from "../../_includes/i18n/es.11ty";
import BasicLayoutView from "../../_includes/layouts/BasicLayoutView.11ty";
import StickersPackProductView from "../../_includes/components/StickersPackProductView.11ty";

export function render(data: Eleventy) {
  const i18n = es;
  return (
    <BasicLayoutView
      {...data}
      lang={i18n.locale}
      title={i18n[StickersPack.name]}
      product={StickersPack}
      scheme={getStickersPackScheme(i18n)}
    >
      <StickersPackProductView stickersPack={StickersPack} />
    </BasicLayoutView>
  );
}
