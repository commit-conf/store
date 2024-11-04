import React from "react";
import Catalogue from "../../_data/products/Catalogue";
import { Eleventy } from "../../../types";
import Product from "../../_data/products/Product";
import { getI18n, I18nContext } from "../i18n/index.11ty";
import { printPrice } from "../utils/price";

interface ProductItemViewProps {
  product: Product;
}

function ProductItemView({ product }: ProductItemViewProps) {
  // TODO srcset, sizes
  const { i18n, lang } = React.useContext(I18nContext);
  return (
    <li className="width-30">
      <a
        className="no-decoration shadow-container"
        href={`/es/products/${product.id}`}
      >
        <div className="flex-column border border-radius-m shadow">
          <img
            alt={i18n[product.name]}
            draggable="false"
            loading="lazy"
            decoding="async"
            className="aspect-4-4 cover border-radius-m"
            aria-description={i18n[product.description]}
            title={i18n[product.description]}
            src={`/img/products/${product.images[0]}`}
          />
          <div className="flex-row justify-between gap-2 padding-vertical-2 padding-horizontal-4">
            <p className="no-margin small text-color-default">
              {i18n[product.name]}
            </p>
            <p className="no-margin small text-muted">
              {printPrice(product.price, lang)}
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
      <ul className="unstyled flex-row flex-wrap gap-2">
        {Catalogue.map((product) => (
          <ProductItemView product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}
