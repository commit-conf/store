import React from "react";
import Catalogue from "../../_data/products/Catalogue";
import { Eleventy } from "../../../types";
import {
  BaseProduct,
  BaseProductWithPrice,
  TShirt,
} from "../../_data/products/Product";
import { I18nContext } from "../i18n/index.11ty";
import { printPrice } from "../utils/price";

interface ProductItemViewProps {
  product: BaseProduct;
  price: number;
}

function ProductItemView({ product, price }: ProductItemViewProps) {
  // TODO srcset, sizes
  const { i18n, lang } = React.useContext(I18nContext);
  return (
    <li>
      <a className="no-decoration" href={`/es/products/${product.id}`}>
        <div className="flex-column">
          <img
            alt={i18n[product.name]}
            draggable="false"
            loading="lazy"
            decoding="async"
            className="aspect-4-4 cover"
            aria-description={i18n[product.description]}
            title={i18n[product.description]}
            src={product.images[0]}
          />
          <div className="flex-column justify-between gap-05 padding-2">
            <p className="no-margin small text-color-default">
              {i18n[product.name]}
            </p>
            <p className="no-margin small text-muted">
              {(product as TShirt).minPrice ? `${i18n.From} ` : undefined}
              {printPrice(price, lang)}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default function CatalogueView(data: Eleventy) {
  const { i18n } = React.useContext(I18nContext);
  return (
    <div>
      <h1>{i18n.Catalogue}</h1>
      <ul className="unstyled grid medium-grid-cols-3 row-gap-5 column-gap-min margin-top-8">
        {Catalogue.map((product) => (
          <ProductItemView
            product={product}
            key={product.id}
            price={
              (product as TShirt).minPrice
                ? (product as TShirt).minPrice
                : (product as BaseProductWithPrice).price
            }
          />
        ))}
      </ul>
    </div>
  );
}
