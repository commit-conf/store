import React, { PropsWithChildren } from "react";

export default function LimitedWidthView(data: PropsWithChildren) {
  return <div className="max-width-1280">{data.children}</div>;
}
