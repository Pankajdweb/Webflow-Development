import * as React from "react";
import * as Types from "./types";

declare function ServiceFaq(props: {
  as?: React.ElementType;
  slotContent?: Types.Slots.SlotContent;
  sectionTitle?: React.ReactNode;
  serviceDescVisibility?: Types.Visibility.VisibilityConditions;
  sectionDesc?: React.ReactNode;
  serviceButton?: Types.Visibility.VisibilityConditions;
  buttonVariant?:
    | "Base"
    | "Default Small"
    | "Secondary Small"
    | "Secondary"
    | "Secoundry White"
    | "Blue primary"
    | "white button";
  buttonLink?: Types.Basic.Link;
  buttonText?: React.ReactNode;
}): React.JSX.Element;
