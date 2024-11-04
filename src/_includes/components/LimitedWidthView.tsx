import React, { PropsWithChildren } from "react";

export default function LimitedWidthView(data: PropsWithChildren) {
  return (
    <div className="max-width-1280 padding-4 margin-center">
      {data.children}
    </div>
  );
}
