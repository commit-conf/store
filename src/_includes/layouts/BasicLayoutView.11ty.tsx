import React, { PropsWithChildren } from "react";
import { Eleventy } from "../../../types";
import Layout from "./BaseLayoutView.11ty";
import LimitedWidthView from "../components/LimitedWidthView";
import { BaseProduct } from "../../_data/products/Product";

interface BasicLayoutViewData extends Eleventy, PropsWithChildren {
  product?: BaseProduct;
}

export default function BasicLayoutView(data: BasicLayoutViewData) {
  return (
    <Layout {...data}>
      <LimitedWidthView>{data.children}</LimitedWidthView>
    </Layout>
  );
}
