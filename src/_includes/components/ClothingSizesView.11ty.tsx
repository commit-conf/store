import React from "react";
import { ClothingSize } from "../../_data/products/Product";
import { I18nContext } from "../i18n/index.11ty";

interface ClothingSizesViewProps {
  sizes: ClothingSize;
}

export default function ClothingSizesView({ sizes }: ClothingSizesViewProps) {
  const { i18n } = React.useContext(I18nContext);
  return (
    <div className="wide flex-column margin-bottom">
      <table className="table responsive margin-bottom margin-top">
        <thead>
          <tr>
            <th></th>
            {Object.keys(sizes).map((size) => (
              <th key={size}>{size}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{i18n.Width}</td>
            {Object.entries(sizes).map(([size, { width, height }], index) => (
              <td
                key={size}
                className="text-center"
                data-label={size}
                scope={index == 0 ? "row" : undefined}
              >
                {width}
              </td>
            ))}
          </tr>
          <tr>
            <td>{i18n.Height}</td>
            {Object.entries(sizes).map(([size, { width, height }], index) => (
              <td
                key={size}
                className="text-center"
                scope={index == 0 ? "row" : undefined}
              >
                {height}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
