import * as React from "react";
import * as Types from "./types";

declare function ServiceWithPointItem(props: {
  as?: React.ElementType;
  variant?: "Base" | "No Line" | "First Item";
  pointNumber?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}): React.JSX.Element;
