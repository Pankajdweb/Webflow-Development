import * as React from "react";
import * as Types from "./types";

declare function ServiceHero(props: {
  as?: React.ElementType;
  ttitle?: React.ReactNode;
  description?: React.ReactNode;
  slotContent?: Types.Slots.SlotContent;
  image?: Types.Asset.Image;
}): React.JSX.Element;
