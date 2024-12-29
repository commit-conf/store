import React from "react";
import { Eleventy } from "../../../types";
import Catalogue from "../../_data/products/Catalogue";
import {
  BaseProduct,
  BaseProductWithPrice,
  TShirt,
} from "../../_data/products/Product";
import { I18nContext } from "../i18n/index.11ty";
import { printPrice } from "../utils/price";
import { NoDeliveryWarning } from "./NoDeliveryWarning";

interface ProductItemViewProps {
  product: BaseProduct;
  price: number;
}

function ProductItemView({ product, price }: ProductItemViewProps) {
  // TODO srcset, sizes
  const { i18n, lang } = React.useContext(I18nContext);
  return (
    <li>
      <a
        className="no-decoration product-image"
        href={`/es/products/${product.id}`}
      >
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
          <div className="flex-column justify-between padding-4">
            <div className="no-margin text-color-default">
              {i18n[product.name]}
            </div>
            <div className="no-margin text-muted">
              {(product as TShirt).minPrice ? `${i18n.From} ` : undefined}
              {printPrice(price, lang)}
            </div>
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
      <h1>Bienvenido a la Tienda de Commit Conf</h1>
      <p>
        Estés depurando a las tres de la mañana o presentando tu último proyecto
        en Commit Conf, tenemos lo que necesitas para mantener tu imagen en
        línea con tu código.
      </p>
      <p>
        Revisita los diseños de años anteriores y da soporte a tu comunidad
        mientras te llevas a casa un poco de la magia de Commit Conf.
      </p>
      <NoDeliveryWarning />
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
