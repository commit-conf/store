import React from "react";
import { Cup } from "../../_data/products/Product";
import ProductView, {
  ProductImage,
  ProductInfoItem,
  PurchaseButton,
} from "./ProductView.11ty";
import { I18nContext } from "../i18n/index.11ty";

interface CupProductViewProps {
  cup: Cup;
}

export default function CupProductView({ cup }: CupProductViewProps) {
  const { i18n } = React.useContext(I18nContext);
  return (
    <ProductView
      product={cup}
      details={<ProductInfoItem label={i18n.Dimensions} value={cup.capacity} />}
      form={<PurchaseButton href={cup.stripeURL} />}
      image={
        <ProductImage
          src={`/img/products/${cup.images[0]}`}
          alt={i18n[cup.name]}
        />
      }
    />
  );
}
