import React from "react";
import ProductView, {
  ProductImage,
  ProductInfoItem,
  PurchaseButton,
} from "./ProductView.11ty";
import { I18nContext } from "../i18n/index.11ty";
import { Body } from "../../_data/products/Product";
import ClothingSizesView from "./ClothingSizesView.11ty";

interface BodyProductViewProps {
  body: Body;
}

export default function BodyProductView({ body }: BodyProductViewProps) {
  const { i18n } = React.useContext(I18nContext);
  return (
    <ProductView
      name={body.name}
      description={body.description}
      price={body.price}
      details={
        <ProductInfoItem
          label={i18n.Sizes}
          value={<ClothingSizesView sizes={body.sizes} />}
        />
      }
      form={<PurchaseButton href={body.stripeURL} />}
      image={<ProductImage src={body.images[0]} alt={i18n[body.name]} />}
    />
  );
}
