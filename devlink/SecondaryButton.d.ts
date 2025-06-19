import * as React from "react";
import * as Types from "./types";

declare function SecondaryButton(props: {
  as?: React.ElementType;
  variant?: "Base" | "White Text" | "Small [Navbar]";
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
}): React.JSX.Element;
