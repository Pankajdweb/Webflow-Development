"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ServiceLine.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3895":{"id":"e-3895","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-3896"}},"mediaQueries":["main"],"target":{"id":"28f6d063-1272-a105-4042-8a5b5975ae1e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"28f6d063-1272-a105-4042-8a5b5975ae1e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":350,"direction":"BOTTOM","effectIn":true},"createdOn":1735787461277}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ServiceLine({
  as: _Component = _Builtin.Block,
  variant = "White Line",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    "White Line": "",
    "Dark Line": "w-variant-59125c99-ef89-2625-66d3-b5240c903b82",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "service-line", _activeStyleVariant)}
      data-w-id="28f6d063-1272-a105-4042-8a5b5975ae1e"
      tag="div"
      sinfo="line"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "inner-line", _activeStyleVariant)}
        tag="div"
      />
    </_Component>
  );
}
