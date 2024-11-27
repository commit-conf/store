import React from "react";
import { StickersPack } from "../../_data/products/Product";
import ProductView, {
  ProductImage,
  ProductInfoItem,
  PurchaseButton,
} from "./ProductView.11ty";
import { I18nContext } from "../i18n/index.11ty";

interface StickersPackProductViewProps {
  stickersPack: StickersPack;
}

export default function StickersPackProductView({
  stickersPack,
}: StickersPackProductViewProps) {
  const { i18n } = React.useContext(I18nContext);
  return (
    <ProductView
      name={stickersPack.name}
      description={stickersPack.description}
      price={stickersPack.price}
      details={
        <ProductInfoItem
          label={i18n.Dimensions}
          value={stickersPack.stickers
            .map(({ dimensions }) => dimensions)
            .join(" | ")}
        />
      }
      image={
        <ProductImage
          src={`/img/products/${stickersPack.images[0]}`}
          alt={i18n[stickersPack.name]}
        />
      }
      form={<PurchaseButton href={stickersPack.stripeURL} />}
    />
  );
}
