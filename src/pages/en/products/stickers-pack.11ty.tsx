import React from "react";
import { Eleventy } from "../../../../types";
import StickersPack from "../../../_data/products/StickersPack";
import en from "../../../_includes/i18n/en.11ty";
import BasicLayoutView from "../../../_includes/layouts/BasicLayoutView.11ty";
import StickersPackProductView from "../../../_includes/components/StickersPackProductView.11ty";

export function render(data: Eleventy) {
  const i18n = en;
  return (
    <BasicLayoutView {...data} lang="en" title={i18n[StickersPack.name]}>
      <StickersPackProductView stickersPack={StickersPack} />
    </BasicLayoutView>
  );
}
