import * as React from "react";
import * as Types from "./types";

declare function TeamMemberItemRichText(props: {
  as?: React.ElementType;
  mainImage?: Types.Asset.Image;
  backImage?: Types.Asset.Image;
  memberName?: React.ReactNode;
  memberPosition?: React.ReactNode;
  memberDesc?: React.ReactNode;
  richtext?: Types.Basic.RichTextChildren;
  teamLink?: Types.Basic.Link;
}): React.JSX.Element;
