import * as React from "react";
import * as Types from "./types";

declare function ServiceWithNumber(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  description?: React.ReactNode;
  slotContent?: Types.Slots.SlotContent;
  tagline?: React.ReactNode;
  taglineVisiblity?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
