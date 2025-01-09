import { ResType } from "../../_includes/i18n/ResType.11ty";
import site from "../site";
import { Cup } from "./Product";

const Cup2025: Cup = {
  id: "cup-2025",
  name: 'Cup2025',
  description: 'Cup2025Description',
  price: 9,
  images: [`${site.productImageFolder}/cup-2025.avif`],
  stripeURL: site.CUP_2025_STRIPE_URL,
  color: 'White',
  capacity: '360ml',
  size: {
    height: '9,6cm',
    diameter: '8,1cm'
  }
}

export default Cup2025;

export function getCup2025Scheme(i18n: ResType) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: i18n[Cup2025.name],
    description: i18n[Cup2025.description],
    image: Cup2025.images,
    productId: Cup2025.id,
    color: i18n[Cup2025.color],
    height: Cup2025.size.height,
    width: Cup2025.size.diameter,
    offers: {
      "@type": "Offer",
      price: Cup2025.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${site.baseUrl}/products/cup-2025`,
    },
  }
}