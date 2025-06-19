import * as React from "react";
import * as Types from "./types";

declare function GlobalButton(props: {
  as?: React.ElementType;
  variant?:
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
