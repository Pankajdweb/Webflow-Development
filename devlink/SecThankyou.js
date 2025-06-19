"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SecThankyou.module.css";

export function SecThankyou({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "sec-thankyou")} tag="section">
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "thanks-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "thanks-logo-wrap")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt="kene logo image\n"
              src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb4c_KENE%20logo%20light.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "thanks-content")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-style-h1-68-78")}
              tag="h1"
            >
              {"Thank you!"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "typo-m-18-20", "opacity-80")}
            >
              {
                "We've received your request, and our team will be in touch shortly to confirm the details and schedule a meeting. For anything else, you can contact us here."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
