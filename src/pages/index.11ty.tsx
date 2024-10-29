import { Eleventy } from "../../types";
import React from "react";
import Layout from "../_includes/layouts/base.11ty";

export function render(data: Eleventy) {
  return (
    <Layout {...data} lang="es" title="Pægina principal">
      <p>Hello world 3</p>
    </Layout>
  );
}
