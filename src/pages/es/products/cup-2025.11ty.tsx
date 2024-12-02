import React from "react";
import { Eleventy } from "../../../../types";
import Cup2025, { getCup2025Scheme } from "../../../_data/products/Cup2025";
import en from "../../../_includes/i18n/en.11ty";
import BasicLayoutView from "../../../_includes/layouts/BasicLayoutView.11ty";
import CupProductView from "../../../_includes/components/CupProductView.11ty";

export function render(data: Eleventy) {
  const i18n = en;
  return (
    <BasicLayoutView
      {...data}
      lang={i18n.locale}
      title={i18n[Cup2025.name]}
      product={Cup2025}
      scheme={getCup2025Scheme(i18n)}
    >
      <CupProductView cup={Cup2025} />
    </BasicLayoutView>
  );
}
