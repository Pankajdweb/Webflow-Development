import * as React from "react";
import * as Types from "./types";

declare function ProcessSteps(props: {
  as?: React.ElementType;
  stepMainTitle?: React.ReactNode;
  stepTitle1?: React.ReactNode;
  stepDescription1?: React.ReactNode;
  stepTitle2?: React.ReactNode;
  stepDescription2?: React.ReactNode;
  stepTitle3?: React.ReactNode;
  stepDescription3?: React.ReactNode;
}): React.JSX.Element;
