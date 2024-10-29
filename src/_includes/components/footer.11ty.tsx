import { Eleventy } from "../../../types";
import React from "react";
import site from "../../_data/site";
import { getI18n } from "../i18n/index.11ty";

export default function Footer({ lang }: Eleventy) {
  const i18n = getI18n(lang);
  const links = [
    {
      title: i18n.Contact,
      links: [
        { title: "E-mail", href: `mailto:${site.email}` },
        { title: "X", href: `https://x.com/${site.xAccount}` },
        {
          title: "YouTube",
          href: `https://www.youtube.com/channel/${site.youtubeChannel}`,
        },
      ],
    },
    {
      title: i18n.Links,
      links: [
        { title: i18n.TheEvent, href: "https://commit-conf.com" },
        { title: "Blog", href: "https://blog.commit-conf.com" },
      ],
    },
    {
      title: i18n.AboutUs,
      links: [
        {
          title: i18n.PrivacyPolicy,
          href: `https://commit-conf.com/${lang}/privacy-policy`,
        },
        {
          title: i18n.CodeOfConduct,
          href: `https://commit-conf.com/${lang}/code-of-conduct`,
        },
        {
          title: i18n.TermsAndConditions,
          href: `https://commit-conf.com/${lang}/terms-and-conditions`,
        },
        { title: i18n.TheTeam, href: `https://commit-conf.com/${lang}/team` },
      ],
    },
  ];
  return (
    <footer className="hide-for-print">
      <div className="footer-row limited-large">
        {links.map(({ title, links }, index) => (
          <div className="flex-grow" key={index}>
            <h2 className="footer-column-title">{title}</h2>
            <ul className="unstyled">
              {links.map(({ title, href }, index) => (
                <li key={index}>
                  <a className="footer-link" href={href}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-row theme-2">
        <a href={lang} className="logo-footer" aria-label={i18n.goHome}></a>
      </div>
    </footer>
  );
}
