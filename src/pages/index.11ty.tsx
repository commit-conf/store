import { Eleventy } from "../../types";
import React from "react";
import CatalogueView from "../_includes/components/CatalogView.11ty";
import HeroLayoutView from "../_includes/layouts/HeroLayoutView.11ty";

export function render(data: Eleventy) {
  return (
    <HeroLayoutView {...data} lang="es" title="Pægina principal">
      <CatalogueView {...data} />
    </HeroLayoutView>
  );
}
