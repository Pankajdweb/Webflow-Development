"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MarqueeItem.module.css";

export function MarqueeItem({
  as: _Component = _Builtin.Block,
  marqueeText = "Software",
}) {
  return (
    <_Component className={_utils.cx(_styles, "marquee-item")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "marquee-text")} tag="div">
        {marqueeText}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "marquee-icon-wrap")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "images")}
          width="Auto"
          height="Auto"
          loading="lazy"
          alt="marquee small image"
          src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cbe7_Asset%2088%404x%203.svg"
        />
      </_Builtin.Block>
    </_Component>
  );
}
