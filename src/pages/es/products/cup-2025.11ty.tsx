import React from "react";
import { Eleventy } from "../../../../types";
import Cup2025 from "../../../_data/products/Cup2025";
import en from "../../../_includes/i18n/en.11ty";
import BasicLayoutView from "../../../_includes/layouts/BasicLayoutView.11ty";
import CupProductView from "../../../_includes/components/CupProductView.11ty";

export function render(data: Eleventy) {
  const i18n = en;
  return (
    <BasicLayoutView {...data} lang="es" title={i18n[Cup2025.name]}>
      <CupProductView cup={Cup2025} />
    </BasicLayoutView>
  );
}
