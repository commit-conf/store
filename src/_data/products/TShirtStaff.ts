import { ResType } from "../../_includes/i18n/ResType.11ty";
import site from "../site";
import { TShirt, TShirtVariant } from "./Product";

const maleVariant: TShirtVariant = {
  type: 'Male',
  price: 18,
  image: `${site.productImageFolder}/tshirt-staff-male.avif`,
  sizes: {
    S: { width: "49cm", height: "69cm" },
    M: { width: "52cm", height: "71cm" },
    L: { width: "55cm", height: "73cm" },
    XL: { width: "58cm", height: "75cm" },
    '2XL': { width: "62cm", height: "77cm" },
    '3XL': { width: "66cm", height: "79cm" },
    '4XL': { width: "70cm", height: "81cm" },
  },
  stripeURL: site.TSHIRT_STAFF_MALE_STRIPE_URL
}

const femaleVariant: TShirtVariant = {
  type: 'Female',
  price: 18,
  image: `${site.productImageFolder}/tshirt-staff-female.avif`,
  sizes: {
    S: { width: "41cm", height: "62cm" },
    M: { width: "44cm", height: "64cm" },
    L: { width: "47cm", height: "66cm" },
    XL: { width: "50cm", height: "68cm" },
    '2XL': { width: "54cm", height: "69cm" },
    '3XL': { width: "57cm", height: "70cm" },
  },
  stripeURL: site.TSHIRT_STAFF_FEMLAE_STRIPE_URL
}

const kidsVariant: TShirtVariant = {
  type: 'Kids',
  price: 15,
  image: `${site.productImageFolder}/tshirt-2025-kids.avif`,
  sizes: {
    '1/2': { width: "29cm", height: "39cm" },
    '3/4': { width: "32cm", height: "43cm" },
    '5/6': { width: "35cm", height: "47cm" },
    '7/8': { width: "38cm", height: "51cm" },
    '9/10': { width: "41cm", height: "55cm" },
    '11/12': { width: "44cm", height: "59cm" },
  },
  stripeURL: site.TSHIRT_STAFF_KIDS_STRIPE_URL
}

const variants = [maleVariant, femaleVariant, kidsVariant];

const TShirtStaff: TShirt = {
  color: 'Black',
  id: "tshirt-staff",
  name: 'TShirtStaff',
  description: 'TShirtStaffDescription',
  material: '100%Cotton',
  minPrice: variants.reduce((min, variant) => Math.min(min, variant.price), Number.MAX_SAFE_INTEGER),
  images: [`${site.productImageFolder}/tshirt-staff-male.avif`, `${site.productImageFolder}/tshirt-staff-female.avif`],
  variants
}

export default TShirtStaff;

export function getTShirtStaffScheme(i18n: ResType) {
  return [
    {
      '@context': "https://schema.org/",
      '@type': "ProductGroup",
      name: i18n[TShirtStaff.name],
      description: i18n[TShirtStaff.description],
      url: site.baseUrl,
      productGroupID: TShirtStaff.id,
      material: i18n[TShirtStaff.material],
      color: i18n[TShirtStaff.color],
      variesBy: [
        "https://schema.org/audience"
      ],
      hasVariant: TShirtStaff.variants.map(variant => (
        {
          "@type": "Product",
          "sku": `${TShirtStaff.id}-${variant.type.toLowerCase()}`,
          "image": variant.image,
          "name": `${i18n[TShirtStaff.name]} - ${i18n[variant.type]}`,
          "size": Object.keys(variant.sizes),
          audience: {
            "@type": "PeopleAudience",
            "suggestedGender": variant.type == 'Kids' ? "unisex" : variant.type.toLowerCase()
          },
          "offers": {
            "@type": "Offer",
            "url": `${site.baseUrl}/${i18n.locale}/products/tshirt-staff?type=${variant.type.toLowerCase()}`,
            "priceCurrency": "EUR",
            "price": variant.price,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
          }
        }
      ))
    }
  ];
} 