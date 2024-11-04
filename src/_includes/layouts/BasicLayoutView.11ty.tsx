import React, { PropsWithChildren } from "react";
import { Eleventy } from "../../../types";
import Layout from "./BaseLayoutView.11ty";
import LimitedWidthView from "../components/LimitedWidthView";

interface BasicLayoutViewData extends Eleventy, PropsWithChildren {}

export default function BasicLayoutView(data: BasicLayoutViewData) {
  return (
    <Layout {...data}>
      <LimitedWidthView>{data.children}</LimitedWidthView>
    </Layout>
  );
}
