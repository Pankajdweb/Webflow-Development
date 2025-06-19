import * as React from "react";
import * as Types from "./types";

declare function PopularArticle(props: {
  as?: React.ElementType;
  cardLink?: Types.Basic.Link;
  title?: React.ReactNode;
  thumbnail?: Types.Asset.Image;
  date?: React.ReactNode;
}): React.JSX.Element;
