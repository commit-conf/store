import React from "react";
import { I18nContext, I18nEntry } from "../i18n/index.11ty";
import { NoDeliveryWarning } from "./NoDeliveryWarning";
import PriceView from "./PriceView";

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
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

// Ahora se le pasarían las props del href y data-switch al enlace directamente
export function PurchaseButton({
  className = "",
  href,
  ...rest
}: PurchaseButtonProps) {
  const { i18n } = React.useContext(I18nContext);
  return (
    <div
      aria-live="assertive"
      aria-relevant="additions"
      className={"flex-row " + className}
    >
      <a
        href={href}
        {...rest}
        className="button primary text-center no-margin"
        target="_blank"
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
      </a>
    </div>
  );
}

interface ProductImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

export function ProductImage({ className = "", ...data }: ProductImageProps) {
  return (
    <img
      {...data}
      fetchPriority="high"
      decoding="async"
      className={"aspect-4-4 cover " + className}
    />
  );
}

interface ProductImagesProps {
  images: React.ReactNode[] | string[];
  alt: string;
}

export function ProductImages({ images, alt }: ProductImagesProps) {
  return (
    <section aria-label={`Fotos de ${alt}`} className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {images.map((image, index) => (
            <li className="splide__slide" key={index}>
              {typeof image == "string" ? (
                <ProductImage src={image} alt={alt} />
              ) : (
                image
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

interface ProductViewProps {
  name: I18nEntry;
  description: I18nEntry;
  price: number | JSX.Element;
  details: JSX.Element;
  form: JSX.Element;
  image: JSX.Element;
}

export default function ProductView({
  name,
  description,
  price,
  details,
  form,
  image,
}: ProductViewProps) {
  const { i18n, lang } = React.useContext(I18nContext);
  // TODO carrousel?
  return (
    <div className="gap-4 margin-top margin-bottom block medium-grid grid-cols-2">
      <div>
        <p className="small">
          <a className="font-weight-bold" href="/">
            &lt; {i18n.goHome}
          </a>
        </p>
        <h2>{i18n[name]}</h2>
        <p>{i18n[description]}</p>
        <NoDeliveryWarning />
        <div role="region" className="flex-column flex-wrap gap-1">
          {details}
        </div>
      </div>
      <div className="flex-column gap-2">
        {image}
        <div className="flex-column gap-05">
          <div>
            <div className="font-weight-bold">{i18n.Price}</div>
            <div>
              {typeof price == "number" ? (
                <PriceView price={price} lang={lang} />
              ) : (
                price
              )}{" "}
              ({i18n.TaxIncluded})
            </div>
          </div>
          <div className="flex-column">{form}</div>
        </div>
      </div>
    </div>
  );
}
