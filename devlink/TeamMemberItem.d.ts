import * as React from "react";
import * as Types from "./types";

declare function TeamMemberItem(props: {
  as?: React.ElementType;
  mainImage?: Types.Asset.Image;
  backImage?: Types.Asset.Image;
  memberName?: React.ReactNode;
  memberPosition?: React.ReactNode;
  memberDesc?: React.ReactNode;
}): React.JSX.Element;
