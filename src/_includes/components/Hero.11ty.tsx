import React, { useContext } from "react";
import { Eleventy } from "../../../types";
import site from "../../_data/site";
import { I18nContext } from "../i18n/index.11ty";

export function Hero({}: Eleventy) {
  const { i18n } = useContext(I18nContext);
  return (
    <div className="flex-column items-center justify-center hero">
      <div className="text-center hero-text flex-column gap-2">
        <span>
          <h1 className="">{site.name}</h1>
          <h2 className="font-size-2xl">{i18n.SiteDescription}</h2>
        </span>
        <div className="flex-row justify-center">
          <a
            className="button primary small"
            href="https://commit-conf.com"
            target="_blank"
          >
            {i18n.GoToTheEventPage}
          </a>
        </div>
      </div>
    </div>
  );
}
