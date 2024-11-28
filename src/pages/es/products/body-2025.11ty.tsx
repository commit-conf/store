import React from "react";
import { Eleventy } from "../../../../types";
import en from "../../../_includes/i18n/en.11ty";
import BasicLayoutView from "../../../_includes/layouts/BasicLayoutView.11ty";
import Body2025 from "../../../_data/products/Body2025";
import BodyProductView from "../../../_includes/components/BodyProductView.11ty";

export function render(data: Eleventy) {
  const i18n = en;
  return (
    <BasicLayoutView
      {...data}
      lang="es"
      title={i18n[Body2025.name]}
      product={Body2025}
    >
      <BodyProductView body={Body2025} />
    </BasicLayoutView>
  );
}
