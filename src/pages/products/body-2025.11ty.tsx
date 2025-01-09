import React from "react";
import { Eleventy } from "../../../types";
import BasicLayoutView from "../../_includes/layouts/BasicLayoutView.11ty";
import Body2025, { getBody2025Scheme } from "../../_data/products/Body2025";
import BodyProductView from "../../_includes/components/BodyProductView.11ty";
import es from "../../_includes/i18n/es.11ty";

export function render(data: Eleventy) {
  const i18n = es;
  return (
    <BasicLayoutView
      {...data}
      lang={i18n.locale}
      title={i18n[Body2025.name]}
      product={Body2025}
      scheme={getBody2025Scheme(i18n)}
    >
      <BodyProductView body={Body2025} />
    </BasicLayoutView>
  );
}
