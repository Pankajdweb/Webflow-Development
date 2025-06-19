import * as React from "react";
import * as Types from "./types";

declare function AccordianWithImage(props: {
  as?: React.ElementType;
  sectionTitle?: React.ReactNode;
  sectionDesc?: React.ReactNode;
  mainImage?: Types.Asset.Image;
  ratingImage?: Types.Asset.Image;
  slotContent?: Types.Slots.SlotContent;
}): React.JSX.Element;
