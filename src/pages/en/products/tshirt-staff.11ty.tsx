import React from "react";
import { Eleventy } from "../../../../types";
import en from "../../../_includes/i18n/en.11ty";
import BasicLayoutView from "../../../_includes/layouts/BasicLayoutView.11ty";
import TShirtProductView from "../../../_includes/components/TShirtProductView.11ty";
import TShirtStaff, {
  getTShirtStaffScheme,
} from "../../../_data/products/TShirtStaff";

export function render(data: Eleventy) {
  const i18n = en;
  return (
    <BasicLayoutView
      {...data}
      lang={i18n.locale}
      title={i18n[TShirtStaff.name]}
      product={TShirtStaff}
      scheme={getTShirtStaffScheme(i18n)}
    >
      <TShirtProductView tshirt={TShirtStaff} />
    </BasicLayoutView>
  );
}
