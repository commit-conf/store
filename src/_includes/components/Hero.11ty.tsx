import React, { useContext } from "react";
import { Eleventy } from "../../../types";
import { I18nContext } from "../i18n/index.11ty";

export function Hero({}: Eleventy) {
  const { i18n } = useContext(I18nContext);
  return (
    <div className="flex-column items-center justify-center hero">
      <img className="hero-image" src="/img/hero.avif" aria-hidden></img>
      <div className="text-center hero-text-container flex-column gap-2">
        <span>
          <img
            title="Commit Conference Logo"
            className="hero-logo margin-bottom"
            src="/svg/wlogo.svg"
          />
          <p className="font-size-2xl hero-text no-margin">
            {i18n.SiteDescription}
          </p>
        </span>
        <div className="flex-row justify-center">
          <a
            className="button primary"
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
