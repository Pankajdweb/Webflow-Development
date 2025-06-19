import * as React from "react";
import * as Types from "./types";

declare function ServiceItem(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  name?: React.ReactNode;
  smallDetailsOne?: React.ReactNode;
  mainImage?: Types.Asset.Image;
}): React.JSX.Element;
