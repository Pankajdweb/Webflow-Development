import * as React from "react";
import * as Types from "./types";

declare function SolutionBox(props: {
  as?: React.ElementType;
  variant?: "Base" | "Right Image";
  solutionTitle?: React.ReactNode;
}): React.JSX.Element;
