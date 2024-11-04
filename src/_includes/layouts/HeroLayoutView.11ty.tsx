import React, { PropsWithChildren } from "react";
import { Eleventy } from "../../../types";
import Layout from "./BaseLayoutView.11ty";
import { Hero } from "../components/Hero.11ty";
import LimitedWidthView from "../components/LimitedWidthView";

interface HeroLayoutViewData extends Eleventy, PropsWithChildren {}

export default function HeroLayoutView(data: HeroLayoutViewData) {
  return (
    <Layout {...data}>
      <Hero {...data} />
      <LimitedWidthView>{data.children}</LimitedWidthView>
    </Layout>
  );
}
