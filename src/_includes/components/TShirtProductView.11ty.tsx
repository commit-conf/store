import React from "react";
import { ClothingType, TShirt } from "../../_data/products/Product";
import ProductView, {
  ProductImage,
  ProductInfoItem,
  PurchaseButton,
} from "./ProductView.11ty";
import { I18nContext } from "../i18n/index.11ty";
import ClothingSizesView from "./ClothingSizesView.11ty";
import PriceView from "./PriceView";
import { printPrice } from "../utils/price";

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
            data-Male={value.type == "Male" ? "wide" : "wide hide"}
            data-Female={value.type == "Female" ? "wide" : "wide hide"}
            data-Kids={value.type == "Kids" ? "wide" : "wide hide"}
            className={"wide" + (value.type == DEFAULT_TYPE ? "" : " hide")}
          >
            <ProductInfoItem
              label={i18n.Sizes}
              value={<ClothingSizesView sizes={value.sizes} />}
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
            <option value="Kids">{i18n.Kids}</option>
          </select>
        }
      />

      <PurchaseButton
        href={defaultVariant!.stripeURL}
        data-switch-group="type"
        data-switch="href"
        data-Male={tshirt.variants[0].stripeURL}
        data-Female={tshirt.variants[1].stripeURL}
        data-Kids={tshirt.variants[2].stripeURL}
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
      src={defaultVariant?.image}
      alt={i18n[tshirt.name]}
      data-switch-group="type"
      data-switch="src"
      data-Male={tshirt.variants[0].image}
      data-Female={tshirt.variants[1].image}
      data-Kids={tshirt.variants[2].image}
    />
  );
}

interface TypeIndexedPrices {
  "data-Male": number;
  "data-Female": number;
  "data-Kids": number;
}

function Price({ tshirt }: TShirtProductViewProps) {
  const { i18n } = React.useContext(I18nContext);
  const defaultVariant = tshirt.variants.find(
    (value) => value.type == DEFAULT_TYPE
  );
  // create an object where keys are the variant types and the value the price of the variant
  let prices: any = {};
  tshirt.variants.forEach((variant) => {
    prices[`data-${variant.type}`] = printPrice(variant.price, i18n.locale);
  });

  return (
    <PriceView
      price={defaultVariant!.price}
      lang={i18n.locale}
      data-switch="innerHTML"
      data-switch-group="type"
      {...prices}
    />
  );
}

export default function TShirtProductView({ tshirt }: TShirtProductViewProps) {
  return (
    <ProductView
      name={tshirt.name}
      description={tshirt.description}
      price={<Price tshirt={tshirt} />}
      details={<TShirtDetails tshirt={tshirt} />}
      form={<Buttons tshirt={tshirt} />}
      image={<Images tshirt={tshirt} />}
    />
  );
}
