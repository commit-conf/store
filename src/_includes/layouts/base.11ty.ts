import { Eleventy } from '../../../types';
import site from '../../_data/site';
import { getI18n } from '../i18n/index.11ty';
import topbar from '../components/topbar.11ty';
import footer from '../components/footer.11ty';

export default async function(data: Eleventy): Promise<string> {
  const {lang, assets, title, content} = data;
  const i18n = getI18n(lang);

  return `
    <!DOCTYPE html>
    <html lang="${lang}">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,minimum-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta http-equiv="Content-Security-Policy" content="default-src 'none'; base-uri 'self'; block-all-mixed-content; font-src fonts.gstatic.com 'self'; frame-src *.youtube.com *.youtube-nocookie.com; img-src 'self' data: www.google-analytics.com *.googleapis.com *.youtube.com *.ytimg.com; script-src ${site.environment == "dev"? 'unsafe-inline' : ''} 'self' www.google-analytics.com www.googletagmanager.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; connect-src 'self' www.google-analytics.com *.googleapis.com; manifest-src 'self'">

      <link rel="stylesheet" href="${assets.css}">
      <title>${title}</title>
      <meta name="author" content="Carlos Coloma">
      <meta name="description" content="${i18n.metaDescription}">

      <!-- open graph -->
      <meta property="og:type" content="website">
      <meta property="og:title" content="${title}">
      <meta property="og:site_name" content="${site.name}">
      <meta property="og:description" content="${i18n.metaDescription}">
      <meta property="og:url" content="https://store.commit-conf.com">
      <meta property="og:image:type" content="image/png">
      <meta property="og:image:width" content="512">
      <meta property="og:image:height" content="512">
      <meta property="og:image" content="${site.baseUrl}/android-chrome-512x512.png">

      <!-- X -->
      <meta name="twitter:card" content="summary">
      <meta name="twitter:site" content="${site.xAccount}">
      <meta name="twitter:title" content="${title}">
      <meta name="twitter:description" content="${ i18n.metaDescription }">
      <meta name="twitter:image" content="${site.baseUrl}/android-chrome-512x512.png">
      <meta name="twitter:image:type" content="image/png">
      <meta name="twitter:image:width" content="512">
      <meta name="twitter:image:height" content="512">

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      <link rel="icon" href="/img/favicon.ico" type="image/x-icon">
      <link rel="manifest" href="/manifest.json">
      <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Lato:wght@400;700&display=swap" rel="stylesheet">
      <meta name="msapplication-TileColor" content="#ffc40d">
      <meta name="theme-color" content="#ffffff">
      ${assets.js.main.map((part) => `<script src="${part}" defer></script>`).join('\n')}
    </head>
    <body>
      <div>
        ${topbar(data)}
        ${content}
      </div>
      ${footer(data)}
    </body>
    </html>
  `;
}