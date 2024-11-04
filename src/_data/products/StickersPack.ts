import { StickersPack, Sticker } from "./Product";

const sticketrsPack: StickersPack = {
  id: "stickers-pack",
  name: 'StickersPack',
  description: 'StickersPackDescription',
  price: 6,
  images: ['stickers-pack-1.avif'],
  stripeURL: "https://buy.stripe.com/test_9AQc3v7kUc3e5aE00z",
  stickers: [{
    description: 'This machine has no brain. Please use your own.',
    image: 'no-brain-sticker.jpg',
    dimensions: "10.4x3.6cm"
  }, {
    description: ' Code. Test. Review. Commit Conf.',
    image: 'code-test-review-sticker.jpg',
    dimensions: "4.8x3.8cm"
  }, {
    description: 'Guru Laptop. Guru stuff inside.',
    image: 'guru-developer-sticker.jpg',
    dimensions: "10.4x3.4cm"
  }, {
    description: 'It\'s dangerous to go alone. Take this.',
    image: 'beginner-developer-sticker.jpg',
    dimensions: "10.4x3.6cm"
  }]
}

export default sticketrsPack;