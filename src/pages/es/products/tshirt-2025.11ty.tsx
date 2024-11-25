import React from "react";
import { Eleventy } from "../../../../types";
import TShirt2025 from "../../../_data/products/TShirt2025";
import es from "../../../_includes/i18n/es.11ty";
import BasicLayoutView from "../../../_includes/layouts/BasicLayoutView.11ty";
import TShirtProductView from "../../../_includes/components/TShirtProductView.11ty";

export function render(data: Eleventy) {
  const i18n = es;
  return (
    <BasicLayoutView {...data} lang="es" title={i18n[TShirt2025.name]}>
      <TShirtProductView tshirt={TShirt2025} />
    </BasicLayoutView>
  );
}
