import React from "react";

interface NoDeliveryWarningProps {}

export function NoDeliveryWarning({}: NoDeliveryWarningProps) {
  return (
    <div className="warning">
      <b>Nota: no se realizan envíos</b>
      <br />
      Este website está en fase de pruebas. Por el momento no se realizan
      envíos. Puedes realizar tu pedido y recogerlo en el evento. Lamentamos las
      molestias.
    </div>
  );
}
