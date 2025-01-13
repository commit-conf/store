import { ResType } from "../../_includes/i18n/ResType.11ty";
import site from "../site";
import { StickersPack } from "./Product";

const sticketrsPack: StickersPack = {
  id: "stickers-pack",
  name: 'StickersPack',
  description: 'StickersPackDescription',
  price: 6,
  images: [`${site.productImageFolder}/stickers-pack-1.avif`],
  stickers: [{
    description: 'This machine has no brain. Please use your own.',
    dimensions: "10.4x3.6cm"
  }, {
    description: 'Code. Test. Review. Commit.',
    dimensions: "4.8x3.8cm"
  }, {
    description: 'Don\'t look back. You\'re not going that way.',
    dimensions: "5.2x3.8cm"
  }, {
    description: 'Awake is the new sleep.',
    dimensions: "6.2x3.8cm"
  }]
}

export default sticketrsPack;

export function getStickersPackScheme(i18n: ResType){
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: i18n[sticketrsPack.name],
    description: i18n[sticketrsPack.description],
    image: sticketrsPack.images[0],
    productId: sticketrsPack.id,
    offers: {
      "@type": "Offer",
      price: sticketrsPack.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${site.baseUrl}/products/stickers-pack`,
    },
  }
}