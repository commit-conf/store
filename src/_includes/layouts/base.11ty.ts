import { Eleventy } from '../../../types';
import header from '../components/header.11ty';

export default function(data: Eleventy): string {
  console.log(data.assets)
  return `
    <!DOCTYPE html>
    <html lang="${data.lang}">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="${data.assets.css}" data-precedence="next">
      <title>${data.title}</title>
      <meta name="description" content="A performant frontend ecommerce starter template with Next.js 14 and Medusa.">
      <meta property="og:title" content="${data.title}">
      <meta property="og:description" content="A performant frontend ecommerce starter template with Next.js 14 and Medusa.">
      <meta property="og:image:type" content="image/jpeg">
      <meta property="og:image:width" content="1600">
      <meta property="og:image:height" content="900">
      <meta property="og:image" content="https://next.medusajs.com/opengraph-image.jpg?443c03a007878a5d">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="${data.title}">
      <meta name="twitter:description" content="A performant frontend ecommerce starter template with Next.js 14 and Medusa.">
      <meta name="twitter:image:type" content="image/jpeg">
      <meta name="twitter:image:width" content="1600">
      <meta name="twitter:image:height" content="900">
      <meta name="twitter:image" content="https://next.medusajs.com/twitter-image.jpg?443c03a007878a5d">
    </head>
    <body>
      ${header(data)}
      ${data.content}
    </body>
    </html>
  `;
}