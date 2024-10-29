import React from "react";
import { Eleventy } from "../../../types";
import { getI18n } from "../i18n/index.11ty";

export default function render(data: Eleventy) {
  const i18n = getI18n(data.lang);
  const navigationItems = [
    {
      name: i18n.TheEvent,
      url: "https://commit-conf.com",
    },
    data.lang == "en"
      ? {
          name: "Español",
          url: data.page.url.replace("/en/", "/es/"),
        }
      : {
          name: "English",
          url:
            data.page.url == "/"
              ? "/en"
              : data.page.url.replace("/es/", "/en/"),
        },
  ];
  return (
    <nav
      className="topbar top-bar-section sticky-topbar"
      role="navigation"
      aria-label="Topbar"
    >
      <ul className="flex-row items-center no-margin unstyled">
        <li className="flex-grow">
          <a
            href={`/${data.lang}`}
            className="topbar-logo"
            aria-label={i18n.goHome}
          >
            <img
              aria-hidden="true"
              className="topbar-logo-img"
              src="/svg/wlogo.svg"
            />
          </a>
        </li>
        <li>
          <ul
            className="flex-row items-center no-margin unstyled topbar-full"
            role="menu"
            aria-hidden="false"
          >
            {navigationItems.map((navigationItem) => (
              <li role="none" key={navigationItem.name}>
                <a
                  href={navigationItem.url}
                  className="topbar-link"
                  role="menuitem"
                  tabIndex={0}
                >
                  {navigationItem.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="topbar-dropdown topbar-minified" aria-hidden="true">
            <a className="topbar-hamburger">
              <svg
                className="topbar-hamburguer-icon"
                fill="#000"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enableBackground="new 0 0 100 100"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M92.028,25h-84c-1.657,0-3-1.343-3-3V8c0-1.657,1.343-3,3-3h84c1.657,0,3,1.343,3,3v14C95.028,23.657,93.685,25,92.028,25z   "></path>
                </g>
                <g>
                  <path d="M92.028,59.938h-84c-1.657,0-3-1.343-3-3v-14c0-1.657,1.343-3,3-3h84c1.657,0,3,1.343,3,3v14   C95.028,58.594,93.685,59.938,92.028,59.938z"></path>
                </g>
                <g>
                  <path d="M92.028,94.875h-84c-1.657,0-3-1.343-3-3v-14c0-1.657,1.343-3,3-3h84c1.657,0,3,1.343,3,3v14   C95.028,93.532,93.685,94.875,92.028,94.875z"></path>
                </g>
              </svg>
            </a>
            <ul className="topbar-dropdown-content unstyled">
              {navigationItems.map((navigationItem) => (
                <li key={navigationItem.name}>
                  <a
                    href={navigationItem.url}
                    className="topbar-link"
                    tabIndex={0}
                  >
                    {navigationItem.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
