"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BluePrimaryButton.module.css";

export function BluePrimaryButton({ as: _Component = _Builtin.Link }) {
  return (
    <_Component
      className={_utils.cx(_styles, "blue-primary-button")}
      button={false}
      block="inline"
      options={{
        href: "#",
      }}
    >
      <_Builtin.Block tag="div">{"Join our team"}</_Builtin.Block>
    </_Component>
  );
}
