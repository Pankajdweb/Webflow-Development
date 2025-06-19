import * as React from "react";
import * as Types from "./types";

declare function ServiceInformation(props: {
  as?: React.ElementType;
  slotContent?: Types.Slots.SlotContent;
  slotContent2?: Types.Slots.SlotContent;
  variant?:
    | "Left Image"
    | "Right Image"
    | "No Btn Padding"
    | "Right Image No Btn Padding";
  sectionTitle?: React.ReactNode;
  tablineVisibility?: Types.Visibility.VisibilityConditions;
  sectionTagline?: React.ReactNode;
  sectionDescription?: React.ReactNode;
  sectionImage?: Types.Asset.Image;
}): React.JSX.Element;
