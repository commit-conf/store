import { ResType } from "../../_includes/i18n/ResType.11ty";
import site from "../site";
import { Body } from "./Product";

const Body2025: Body = {
  id: "body-2025",
  name: 'Body2025',
  description: 'Body2025Description',
  price: 19,
  images: [`${site.productImageFolder}/body-2025.avif`],
  stripeURL: site.TSHIRT_2025_BODY_STRIPE_URL,
  color: 'White',
  material: '96%Cotton4%Elastane',
  sizes: {
    '3m': {
      width: "19cm",
      height: "37cm",
    },
    '6m': {
      width: "21cm",
      height: "38cm",
    },
    '9m': {
      width: "23cm",
      height: "40cm",
    },
    '12m': {
      width: "25cm",
      height: "42cm",
    },
    '18m': {
      width: "27cm",
      height: "44cm",
    }
  },
}

export default Body2025;

export function getBody2025Scheme(i18n: ResType) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: i18n[Body2025.name],
    description: i18n[Body2025.description],
    image: Body2025.images,
    productId: Body2025.id,
    color: i18n[Body2025.color],
    material: i18n[Body2025.material],
    size: Object.keys(Body2025.sizes),
    offers: {
      "@type": "Offer",
      price: Body2025.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${site.baseUrl}/products/body-2025`,
    },
  }
}