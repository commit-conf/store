import { Eleventy } from "../../../types";
import site from "../../_data/site";
import { getI18n } from "../i18n/index.11ty";

export default function({lang}: Eleventy) {
  const i18n = getI18n(lang);
  const links = [
    { title: i18n.Contact, links: [
      { title: 'E-mail', href: `mailto:${site.email}` },
      { title: 'X', href: `https://x.com/${site.xAccount}` },
      { title: 'YouTube', href: `https://www.youtube.com/channel/${site.youtubeChannel}` }
    ]
    }, {
      title: i18n.Links, links: [
        { title: i18n.TheEvent, href: 'https://commit-conf.com' },
        { title: 'Blog', href: 'https://blog.commit-conf.com' }
      ]
    }, {
      title: i18n.AboutUs, links: [
        { title: i18n.PrivacyPolicy, href: `https://commit-conf.com/${lang}/privacy-policy` },
        { title: i18n.CodeOfConduct, href: `https://commit-conf.com/${lang}/code-of-conduct` },
        { title: i18n.TermsAndConditions, href: `https://commit-conf.com/${lang}/terms-and-conditions` },
        { title: i18n.TheTeam, href: `https://commit-conf.com/${lang}/team` }
      ]
    }
  ]
  return `
<footer class="hide-for-print">
  <div class="footer-row limited-large">
    ${
      links.map(({ title, links }) => `
      <div class="flex-grow">
        <h2 class="footer-column-title">${title}</h2>
        <ul class="unstyled">
          ${
            links.map(({ title, href }) => `
            <li>
              <a class="footer-link" href="${href}">${title}</a>
            </li>
            `
            ).join('')
          }
        </ul>
      </div>
      `
      ).join('')
    }
  </div>
  <div class="footer-row theme-2">
    <a href="/${lang}" class="logo-footer" aria-label="${i18n.goHome}"></a>
  </div>
</footer>
`;
}