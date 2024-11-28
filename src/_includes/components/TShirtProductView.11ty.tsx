import React from "react";
import { TShirt } from "../../_data/products/Product";
import ProductView, {
  ProductImage,
  ProductInfoItem,
  PurchaseButton,
} from "./ProductView.11ty";
import { I18nContext } from "../i18n/index.11ty";

interface TShirtProductViewProps {
  tshirt: TShirt;
}

const DEFAULT_TYPE = "Male";

function TShirtDetails({ tshirt }: TShirtProductViewProps) {
  const { i18n } = React.useContext(I18nContext);
  return (
    <>
      <ProductInfoItem label={i18n.Color} value={i18n[tshirt.color]} />
      <ProductInfoItem label={i18n.Material} value={i18n[tshirt.material]} />

      {tshirt.variants.map((value) => {
        return (
          <div
            key={value.type}
            data-switch-group="type"
            data-switch="class"
            data-Male={value.type == DEFAULT_TYPE ? "wide" : "wide hide"}
            data-Female={value.type == DEFAULT_TYPE ? "wide hide" : "wide"}
            className={"wide" + (value.type == DEFAULT_TYPE ? "" : " hide")}
          >
            <ProductInfoItem
              label={i18n.Sizes}
              value={
                <div className="wide flex-column margin-bottom">
                  <table className="table responsive margin-bottom margin-top">
                    <thead>
                      <tr>
                        <th></th>
                        {Object.keys(value.sizes).map((size) => (
                          <th key={size}>{size}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i18n.Width}</td>
                        {Object.entries(value.sizes).map(
                          ([size, { width, height }], index) => (
                            <td
                              key={size}
                              className="text-center"
                              data-label={size}
                              scope={index == 0 ? "row" : undefined}
                            >
                              {width}
                            </td>
                          )
                        )}
                      </tr>
                      <tr>
                        <td>{i18n.Height}</td>
                        {Object.entries(value.sizes).map(
                          ([size, { width, height }], index) => (
                            <td
                              key={size}
                              className="text-center"
                              scope={index == 0 ? "row" : undefined}
                            >
                              {height}
                            </td>
                          )
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
            />
          </div>
        );
      })}
    </>
  );
}

function Buttons({ tshirt }: TShirtProductViewProps) {
  const { i18n } = React.useContext(I18nContext);
  const defaultVariant = tshirt.variants.find(
    (value) => value.type == DEFAULT_TYPE
  );
  return (
    <>
      <ProductInfoItem
        label={i18n.Type}
        value={
          <select
            defaultValue={DEFAULT_TYPE}
            data-switch-group="type"
            className="padding-4 padding-vertical-2 margin-bottom"
          >
            <option value="Male">{i18n.Male}</option>
            <option value="Female">{i18n.Female}</option>
          </select>
        }
      />

      <PurchaseButton
        href={defaultVariant!.stripeURL}
        data-switch-group="type"
        data-switch="href"
        data-Male={tshirt.variants[0].stripeURL}
        data-Female={tshirt.variants[1].stripeURL}
      />
    </>
  );
}

function Images({ tshirt }: TShirtProductViewProps) {
  const { i18n } = React.useContext(I18nContext);
  const defaultVariant = tshirt.variants.find(
    (value) => value.type == DEFAULT_TYPE
  );
  return (
    <ProductImage
      src={`/img/products/${defaultVariant?.image}`}
      alt={i18n[tshirt.name]}
      data-switch-group="type"
      data-switch="src"
      data-Male={`/img/products/${tshirt.variants[0].image}`}
      data-Female={`/img/products/${tshirt.variants[1].image}`}
    />
  );
}

export default function TShirtProductView({ tshirt }: TShirtProductViewProps) {
  return (
    <ProductView
      name={tshirt.name}
      description={tshirt.description}
      price={tshirt.price}
      details={<TShirtDetails tshirt={tshirt} />}
      form={<Buttons tshirt={tshirt} />}
      image={<Images tshirt={tshirt} />}
    />
  );
}
