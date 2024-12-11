import { ResType } from "../../_includes/i18n/ResType.11ty";
import site from "../site";
import { StickersPack } from "./Product";

const sticketrsPack: StickersPack = {
  id: "stickers-pack",
  name: 'StickersPack',
  description: 'StickersPackDescription',
  price: 6,
  images: [`${site.productImageFolder}/stickers-pack-1.avif`],
  stripeURL: site.STICKERS_PACK_1_STRIPE_URL,
  stickers: [{
    description: 'This machine has no brain. Please use your own.',
    image: `${site.productImageFolder}/no-brain-sticker.jpg`,
    dimensions: "10.4x3.6cm"
  }, {
    description: ' Code. Test. Review. Commit Conf.',
    image: `${site.productImageFolder}/code-test-review-sticker.jpg`,
    dimensions: "4.8x3.8cm"
  }, {
    description: 'Guru Laptop. Guru stuff inside.',
    image: `${site.productImageFolder}/guru-developer-sticker.jpg`,
    dimensions: "10.4x3.4cm"
  }, {
    description: 'It\'s dangerous to go alone. Take this.',
    image: `${site.productImageFolder}/beginner-developer-sticker.jpg`,
    dimensions: "10.4x3.6cm"
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
      url: `${site.baseUrl}/${i18n.locale}/products/stickers-pack`,
    },
  }
}