"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DetailCard.module.css";

export function DetailCard({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "detail-item")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "details-icon-wrap")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "detail-icon")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb3f_map-pin.svg"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "typo-r-16-18", "font-weight-500")}
        tag="div"
      >
        {"Office location"}
      </_Builtin.Block>
      <_Builtin.Link
        className={_utils.cx(_styles, "typo-s-14-16")}
        button={false}
        color="cgrey500"
        block=""
        options={{
          href: "https://g.co/kgs/W99uaP2",
          target: "_blank",
        }}
      >
        {"10 Devonshire Square London EC2M 4YP"}
      </_Builtin.Link>
    </_Component>
  );
}
