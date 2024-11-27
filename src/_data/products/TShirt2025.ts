import { TShirt } from "./Product";

const TShirt2025: TShirt = {
  color: 'White',
  id: "tshirt-2025",
  name: 'TShirt2025',
  description: 'TShirt2025Description',
  material: '100%Cotton',
  price: 18,
  images: ['tshirt-2025-male.avif', 'tshirt-2025-female.avif'],
  variants: [{
    type: 'Male',
    image: 'tshirt-2025-male.avif',
    sizes: {
      S: { width: "49cm", height: "69cm" },
      M: { width: "52cm", height: "71cm" },
      L: { width: "55cm", height: "73cm" },
      XL: { width: "58cm", height: "75cm" },
      '2XL': { width: "62cm", height: "77cm" },
      '3XL': { width: "66cm", height: "79cm" },
      '4XL': { width: "70cm", height: "81cm" },
    },
    stripeURL: "https://book.stripe.com/test_5kAeXT51raTV2mA288"
  }, {
    type: 'Female',
    image: 'tshirt-2025-female.avif',
    sizes: {
      S: { width: "41cm", height: "62cm" },
      M: { width: "44cm", height: "64cm" },
      L: { width: "47cm", height: "66cm" },
      XL: { width: "50cm", height: "68cm" },
      '2XL': { width: "54cm", height: "69cm" },
      '3XL': { width: "57cm", height: "70cm" },
    },
    stripeURL: "https://book.stripe.com/test_fZecPL3XnaTV5yM001"
  }]
}

export default TShirt2025;