import * as React from "react";
import * as Types from "./types";

declare function ServiceAboutr(props: {
  as?: React.ElementType;
  slotContent?: Types.Slots.SlotContent;
  title?: React.ReactNode;
  image?: Types.Asset.Image;
  description?: React.ReactNode;
}): React.JSX.Element;
