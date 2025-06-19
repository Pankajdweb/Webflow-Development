"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./GlobalButton.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-4255":{"id":"e-4255","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-356","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4256"}},"mediaQueries":["main"],"target":{"id":"7d1879ce-a20f-ccf7-de64-f6265a1948bd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7d1879ce-a20f-ccf7-de64-f6265a1948bd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1736834991710},"e-4256":{"id":"e-4256","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-357","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4255"}},"mediaQueries":["main"],"target":{"id":"7d1879ce-a20f-ccf7-de64-f6265a1948bd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7d1879ce-a20f-ccf7-de64-f6265a1948bd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1736834991724}},"actionLists":{"a-356":{"id":"a-356","title":"Global Button [Hover In]","actionItemGroups":[{"actionItems":[{"id":"a-356-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button__overlay","selectorGuids":["262a6584-ab90-beb6-2c49-0890a02e6cb0"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-356-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":1800,"target":{"useEventTarget":"CHILDREN","selector":".button__overlay","selectorGuids":["262a6584-ab90-beb6-2c49-0890a02e6cb0"]},"xValue":30,"yValue":30,"locked":true}},{"id":"a-356-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button__overlay","selectorGuids":["262a6584-ab90-beb6-2c49-0890a02e6cb0"]},"yValue":-50,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1722849926869},"a-357":{"id":"a-357","title":"Global Button [Hover out]","actionItemGroups":[{"actionItems":[{"id":"a-357-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button__overlay","selectorGuids":["262a6584-ab90-beb6-2c49-0890a02e6cb0"]},"xValue":-50,"yValue":-250,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-357-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCirc","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button__overlay","selectorGuids":["262a6584-ab90-beb6-2c49-0890a02e6cb0"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-357-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCirc","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".button__overlay","selectorGuids":["262a6584-ab90-beb6-2c49-0890a02e6cb0"]},"xValue":null,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-357-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutCirc","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".button__overlay","selectorGuids":["262a6584-ab90-beb6-2c49-0890a02e6cb0"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1722849926869}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function GlobalButton({
  as: _Component = _Builtin.Link,
  variant = "Base",

  buttonLink = {
    href: "#",
  },

  buttonText = "Book a free consultation",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Base: "",
    "Default Small": "w-variant-966eebf3-d2e3-fa7e-a16e-f15e969688e0",
    "Secondary Small": "w-variant-cc4f5599-315a-c471-f303-8c431879b804",
    Secondary: "w-variant-ae89c6ed-9760-1540-06c6-23a96b933172",
    "Secoundry White": "w-variant-2a35d354-685c-cc3b-73fb-c9d23ae99a22",
    "Blue primary": "w-variant-38ef95e5-44eb-454a-8e5d-0c9a89ec4eee",
    "white button": "w-variant-35783af1-9fc0-f4bb-f683-4f27595f53c4",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "global_button", _activeStyleVariant)}
      data-w-id="7d1879ce-a20f-ccf7-de64-f6265a1948bd"
      button={false}
      block="inline"
      options={buttonLink}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "button_text", _activeStyleVariant)}
        tag="div"
      >
        {buttonText}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "button__overlay", _activeStyleVariant)}
        tag="div"
      />
    </_Component>
  );
}
