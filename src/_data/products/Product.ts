import { I18nEntry } from "../../_includes/i18n/index.11ty";

interface BaseProduct {
  id: string;
  name: I18nEntry;
  description: I18nEntry;
  price: number;
  images: string[];
}

interface TShirtSizeDetails {
  width: string;
  height: string;
}

export interface TShirtSize {
  [size: string]: TShirtSizeDetails;
}

interface TShirtVariants {
  type: 'male' | 'female';
  sizes: TShirtSize;
  stripeURL: string;
}

export interface TShirt extends BaseProduct {
  variants: TShirtVariants[];
  color: I18nEntry;
  material: I18nEntry;
}

export interface Sticker {
  dimensions: string;
  image: string;
  description: string;
}

export interface StickersPack extends BaseProduct {
  stickers: Sticker[];
  stripeURL: string;
}

type Product = TShirt | StickersPack;

export default Product;