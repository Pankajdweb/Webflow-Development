import * as React from "react";
import * as Types from "./types";

declare function ArticleCard(props: {
  as?: React.ElementType;
  newsImage?: Types.Asset.Image;
  updatedDate?: React.ReactNode;
  newsTitle?: React.ReactNode;
  newsAuthorImage?: Types.Asset.Image;
  newsAuthorName?: React.ReactNode;
  newsAuthorPosition?: React.ReactNode;
  cardLnk?: Types.Basic.Link;
  publishedDate?: React.ReactNode;
  variant?: "Base" | "With Right Date";
}): React.JSX.Element;
