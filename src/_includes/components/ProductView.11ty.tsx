import React from "react";
import Product from "../../_data/products/Product";
import { I18nContext } from "../i18n/index.11ty";
import { printPrice } from "../utils/price";

interface ProductInfoItemProps {
  label: string;
  value?: string | JSX.Element;
}

export function ProductInfoItem({ label, value }: ProductInfoItemProps) {
  return !value ? undefined : (
    <div>
      <span className="font-weight-bold">{label}</span>
      <div>{value}</div>
    </div>
  );
}

interface PurchaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
}

export function PurchaseButton({
  className = "",
  href,
  ...rest
}: PurchaseButtonProps) {
  const { i18n } = React.useContext(I18nContext);
  return (
    <div aria-live="assertive" aria-relevant="additions">
      <button
        className={
          "purchase-button button primary text-center no-margin " + className
        }
        {...rest}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="200px"
          width="200px"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
          <path d="M10 17h-4v-14h-2"></path>
          <path d="M6 5l14 1l-.717 5.016m-7.783 1.984h-5.5"></path>
          <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
        </svg>
        {i18n.OrderNow}
      </button>
      <div className="purchase-confirmation hide">
        <p className="text-muted message warning">{i18n.NoShipping}</p>
        <div className="flex-row gap-1">
          <a
            href={href}
            className="button primary text-center no-margin"
            target="_blank"
          >
            {i18n.Continue}
          </a>
          <button className="purchase-cancel button tertiary text-center no-margin">
            {i18n.Cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

interface ProductViewProps {
  product: Product;
  details: JSX.Element;
  form: JSX.Element;
}

export default function ProductView({
  product,
  details,
  form,
}: ProductViewProps) {
  const { i18n, lang } = React.useContext(I18nContext);
  // TODO carrousel?
  return (
    <div className="flex-row gap-2 margin-top margin-bottom block medium-flex">
      <div className="">
        <div className="">
          <a className="small" href={`/${lang}`}>
            &lt; {i18n.goHome}
          </a>
          <h2 className="">{i18n[product.name]}</h2>
          <p className="">{i18n[product.description]}</p>
        </div>
        <div className="">
          <div role="region" className="flex-column flex-wrap gap-1">
            {details}
          </div>
        </div>
      </div>
      <div className="flex-column gap-2">
        <img
          src={`/img/products/${product.images[0]}`}
          alt={i18n[product.name]}
          fetchPriority="high"
          decoding="async"
          className="border-radius-m aspect-4-4 cover"
        />
        <div className="flex-column gap-05">
          <p className="no-margin font-weight-bold font-size-2xl">
            {i18n.Price}: {printPrice(product.price, lang)}{" "}
            <small className="font-size-m font-weight-normal">
              ({i18n.TaxIncluded})
            </small>
          </p>
          <div className="flex-column">{form}</div>
        </div>
      </div>
    </div>
  );
}
