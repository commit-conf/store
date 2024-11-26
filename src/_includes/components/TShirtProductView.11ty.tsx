import React from "react";
import Product, { TShirt } from "../../_data/products/Product";
import ProductView, {
  ProductInfoItem,
  PurchaseButton,
} from "./ProductView.11ty";
import { I18nContext } from "../i18n/index.11ty";

interface TShirtProductViewProps {
  tshirt: TShirt;
}

const DEFAULT_TYPE = "male";

function TShirtDetails({ tshirt }: TShirtProductViewProps) {
  const { i18n } = React.useContext(I18nContext);
  return (
    <>
      <ProductInfoItem label={i18n.Color} value={i18n[tshirt.color]} />
      <ProductInfoItem label={i18n.Material} value={i18n[tshirt.material]} />

      {tshirt.variants.map((value) => (
        <div
          key={value.type}
          data-switch={value.type}
          className={"wide" + (value.type == DEFAULT_TYPE ? "" : " hide")}
        >
          <ProductInfoItem
            label={i18n.Sizes}
            value={
              <div className="wide flex-column">
                <table className="table margin-bottom responsive">
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
      ))}
    </>
  );
}

function Buttons({ tshirt }: TShirtProductViewProps) {
  const { i18n } = React.useContext(I18nContext);
  return (
    <>
      <ProductInfoItem
        label={i18n.Type}
        value={
          <select
            defaultValue={DEFAULT_TYPE}
            id="switch"
            className="padding-4 padding-vertical-2 margin-bottom"
          >
            <option value="male">{i18n.Male}</option>
            <option value="female">{i18n.Female}</option>
          </select>
        }
      />
      {tshirt.variants.map(({ type, stripeURL }) => (
        <PurchaseButton
          key={type}
          href={stripeURL}
          className={type == DEFAULT_TYPE ? "" : "hide"}
          data-switch={type}
        />
      ))}
    </>
  );
}

export default function TShirtProductView({ tshirt }: TShirtProductViewProps) {
  return (
    <ProductView
      product={tshirt}
      details={<TShirtDetails tshirt={tshirt} />}
      form={<Buttons tshirt={tshirt} />}
    />
  );
}
