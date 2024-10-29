import { Eleventy } from "../../types";
import React from "react";

export const data = {
  layout: "base",
  title: "Página Principal",
  lang: "es",
};

export function render(data: Eleventy) {
  return <p>Hello world 2</p>;
}
