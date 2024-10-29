import { Eleventy } from "../../../types";
import React from "react";
import Layout from "../../_includes/layouts/base.11ty";

export function render(data: Eleventy) {
  return (
    <Layout {...data} lang="en" title="Home page">
      <p>Hello world 23</p>
    </Layout>
  );
}
