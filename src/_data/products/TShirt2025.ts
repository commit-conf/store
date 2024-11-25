import { TShirt } from "./Product";

const TShirt2025: TShirt = {
  color: 'White',
  id: "tshirt-2025",
  name: 'TShirt2025',
  description: 'TShirt2025Description',
  material: '100%Cotton',
  images: ['tshirt-2025.avif'],
  price: 18,
  variants: [{
    type: 'male',
    sizes: {
      S: { width: "49cm", height: "69cm" },
      M: { width: "52cm", height: "71cm" },
      L: { width: "55cm", height: "73cm" },
      XL: { width: "58cm", height: "75cm" },
      '2XL': { width: "62cm", height: "77cm" },
      '3XL': { width: "66cm", height: "79cm" },
      '4XL': { width: "70cm", height: "81cm" },
    },
    stripeURL: "https://buy.stripe.com/test_male"
  }, {
    type: 'female',
    sizes: {
      S: { width: "41cm", height: "62cm" },
      M: { width: "44cm", height: "64cm" },
      L: { width: "47cm", height: "66cm" },
      XL: { width: "50cm", height: "68cm" },
      '2XL': { width: "54cm", height: "69cm" },
      '3XL': { width: "57cm", height: "70cm" },
    },
    stripeURL: "https://buy.stripe.com/test_female"
  }]
}

export default TShirt2025;