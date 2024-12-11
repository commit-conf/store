import { I18nEntry } from "../../_includes/i18n/index.11ty";

export interface BaseProduct {
  id: string;
  name: I18nEntry;
  description: I18nEntry;
  images: string[];
}

export interface BaseProductWithPrice extends BaseProduct{
  price: number;
}

interface TShirtSizeDetails {
  width: string;
  height: string;
}

export interface ClothingSize {
  [size: string]: TShirtSizeDetails;
}

export type ClothingType = "Male" | "Female" | "Kids";

export interface TShirtVariant {
  type: ClothingType;
  sizes: ClothingSize;
  stripeURL: string;
  price: number;
  image: string;
}

export interface TShirt extends BaseProduct {
  variants: TShirtVariant[];
  color: I18nEntry;
  minPrice: number;
  material: I18nEntry;
}

export interface Body extends BaseProductWithPrice {
  color: I18nEntry;
  material: I18nEntry;
  stripeURL: string;
  sizes: ClothingSize;
}

export interface Sticker {
  dimensions: string;
  image: string;
  description: string;
}

export interface StickersPack extends BaseProductWithPrice {
  stickers: Sticker[];
  stripeURL: string;
}

export interface Cup extends BaseProductWithPrice {
  color: I18nEntry;
  capacity: string;
  stripeURL: string;
  size: {
    height: string;
    diameter: string;
  }
}