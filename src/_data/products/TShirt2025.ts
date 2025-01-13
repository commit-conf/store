import { ResType } from "../../_includes/i18n/ResType.11ty";
import site from "../site";
import { ClothingType, TShirt, TShirtVariant } from "./Product";

const maleVariant: TShirtVariant = {
  type: 'Male',
  price: 15,
  images: [`${site.productImageFolder}/tshirt-2025-male.avif`,`${site.productImageFolder}/tshirt-2025-isolated.avif`],
  sizes: {
    S: { width: "49", height: "69" },
    M: { width: "52", height: "71" },
    L: { width: "55", height: "73" },
    XL: { width: "58", height: "75" },
    '2XL': { width: "62", height: "77" },
    '3XL': { width: "66", height: "79" },
    '4XL': { width: "70", height: "81" },
  },
};

const femaleVariant: TShirtVariant = {
  type: 'Female',
  price: 15,
  images: [`${site.productImageFolder}/tshirt-2025-female.avif`,`${site.productImageFolder}/tshirt-2025-isolated.avif`],
  sizes: {
    S: { width: "41", height: "62" },
    M: { width: "44", height: "64" },
    L: { width: "47", height: "66" },
    XL: { width: "50", height: "68" },
    '2XL': { width: "54", height: "69" },
    '3XL': { width: "57", height: "70" },
  },
}
const kidsVariant: TShirtVariant = {
  type: 'Kids',
  price: 15,
  images: [`${site.productImageFolder}/tshirt-2025-kids.avif`,`${site.productImageFolder}/tshirt-2025-isolated.avif`],
  sizes: {
    '1/2': { width: "29", height: "39" },
    '3/4': { width: "32", height: "43" },
    '5/6': { width: "35", height: "47" },
    '7/8': { width: "38", height: "51" },
    '9/10': { width: "41", height: "55" },
    '11/12': { width: "44", height: "59" },
  },
};

const variants: {[K in ClothingType]: TShirtVariant} =  {
  'Male': maleVariant,
  'Female': femaleVariant,
  'Kids': kidsVariant
};

const TShirt2025: TShirt = {
  color: 'White',
  id: "tshirt-2025",
  name: 'TShirt2025',
  description: 'TShirt2025Description',
  material: '100%Cotton',
  minPrice: Object.values(variants).reduce((min, variant) => Math.min(min, variant.price), Number.MAX_SAFE_INTEGER),
  images: [`${site.productImageFolder}/tshirt-2025-male.avif`],
  variants
}

export default TShirt2025;

export function getTShirt2025Scheme(i18n: ResType) {
  return [
    {
      '@context': "https://schema.org/",
      '@type': "ProductGroup",
      name: i18n[TShirt2025.name],
      description: i18n[TShirt2025.description],
      url: "https://store.commit-conf.com/",
      productGroupID: TShirt2025.id,
      material: i18n[TShirt2025.material],
      color: i18n[TShirt2025.color],
      variesBy: [
        "https://schema.org/audience"
      ],
      hasVariant: Object.values(TShirt2025.variants).map(variant => (
        {
          "@type": "Product",
          "sku": `${TShirt2025.id}-${variant.type.toLowerCase()}`,
          "image": variant.images,
          "name": `${i18n[TShirt2025.name]} - ${i18n[variant.type]}`,
          "size": Object.keys(variant.sizes),
          audience: {
            "@type": "PeopleAudience",
            "suggestedGender": variant.type == 'Kids' ? "unisex" : variant.type.toLowerCase()
          },
          "offers": {
            "@type": "Offer",
            "url": `${site.baseUrl}/products/tshirt-2025?type=${variant.type.toLowerCase()}`,
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