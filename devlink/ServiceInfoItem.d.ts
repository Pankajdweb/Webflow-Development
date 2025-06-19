import * as React from "react";
import * as Types from "./types";

declare function ServiceInfoItem(props: {
  as?: React.ElementType;
  itemTitle?: React.ReactNode;
  itemDescription?: React.ReactNode;
  variant?: "Base" | "With Out Bullet";
}): React.JSX.Element;
