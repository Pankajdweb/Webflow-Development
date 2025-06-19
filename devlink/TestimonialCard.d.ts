import * as React from "react";
import * as Types from "./types";

declare function TestimonialCard(props: {
  as?: React.ElementType;
  testimonialTag?: React.ReactNode;
  testimonialLogo?: Types.Asset.Image;
  testimonialDesc?: React.ReactNode;
}): React.JSX.Element;
