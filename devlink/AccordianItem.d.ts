import * as React from "react";
import * as Types from "./types";

declare function AccordianItem(props: {
  as?: React.ElementType;
  accordianHead?: React.ReactNode;
  accordianBody?: React.ReactNode;
  variant?: "Base" | "Small Title 18" | "Service Accordian";
  accordionSimpleTextBlock?: Types.Visibility.VisibilityConditions;
  accordionSimpleRichText?: Types.Visibility.VisibilityConditions;
  accordionRichBody?: Types.Basic.RichTextChildren;
}): React.JSX.Element;
