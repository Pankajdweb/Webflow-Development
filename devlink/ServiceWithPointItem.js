"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ServiceWithPointItem.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3845":{"id":"e-3845","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-337","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3846"}},"mediaQueries":["main"],"target":{"id":"0c0abf5c-f9b4-4364-2266-40feae1355f8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0c0abf5c-f9b4-4364-2266-40feae1355f8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1735734180150}},"actionLists":{"a-337":{"id":"a-337","title":"Service with  Number [Line Animation]","actionItemGroups":[{"actionItems":[{"id":"a-337-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".ser_wp-item-line","selectorGuids":["039d06d0-8745-39d6-f954-2cb0d2edf5b5"]},"widthValue":0,"heightValue":0.0625,"widthUnit":"rem","heightUnit":"rem","locked":false}}]},{"actionItems":[{"id":"a-337-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":1200,"target":{"useEventTarget":"CHILDREN","selector":".ser_wp-item-line","selectorGuids":["039d06d0-8745-39d6-f954-2cb0d2edf5b5"]},"widthValue":100,"heightValue":0.0625,"widthUnit":"%","heightUnit":"rem","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1723614990621}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ServiceWithPointItem({
  as: _Component = _Builtin.Block,
  variant = "Base",
  pointNumber = "01",
  title = "Exploring the problem",
  description = "It is a long established fact that a reader will be distracted by the readable content",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Base: "",
    "No Line": "w-variant-d3e13ee4-229c-7a2e-4a6d-620615171e48",
    "First Item": "w-variant-4b0536cc-6c6e-250b-7df4-4892d9812a87",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "ser_wp-item", _activeStyleVariant)}
      data-w-id="0c0abf5c-f9b4-4364-2266-40feae1355f8"
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "ser_wp-item-row", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "typo-l-24-24",
            "font-weight-600",
            _activeStyleVariant
          )}
          tag="div"
        >
          {pointNumber}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "ser_wp-item-content",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "typo-l-24-24",
              "font-weight-600",
              _activeStyleVariant
            )}
            tag="div"
          >
            {title}
          </_Builtin.Block>
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "typo-r-16-18", _activeStyleVariant)}
          >
            {description}
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "ser_wp-item-line", _activeStyleVariant)}
        tag="div"
      />
    </_Component>
  );
}
