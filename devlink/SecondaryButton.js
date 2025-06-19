"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SecondaryButton.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3655":{"id":"e-3655","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-305","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3674"}},"mediaQueries":["main"],"target":{"selector":".secondary_button","originalId":"07abd408-1b32-f71a-c5c0-9fe7fbd20300","appliesTo":"CLASS"},"targets":[{"selector":".secondary_button","originalId":"07abd408-1b32-f71a-c5c0-9fe7fbd20300","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734529252913},"e-3656":{"id":"e-3656","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-306","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3673"}},"mediaQueries":["main"],"target":{"selector":".secondary_button","originalId":"07abd408-1b32-f71a-c5c0-9fe7fbd20300","appliesTo":"CLASS"},"targets":[{"selector":".secondary_button","originalId":"07abd408-1b32-f71a-c5c0-9fe7fbd20300","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734529252920},"e-3673":{"id":"e-3673","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-305","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3674"}},"mediaQueries":["main"],"target":{"id":"77a8af4e-f520-e021-6de4-c0d6eb6c2798","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"77a8af4e-f520-e021-6de4-c0d6eb6c2798","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734529252913},"e-3674":{"id":"e-3674","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-306","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3673"}},"mediaQueries":["main"],"target":{"id":"77a8af4e-f520-e021-6de4-c0d6eb6c2798","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"77a8af4e-f520-e021-6de4-c0d6eb6c2798","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734529252920}},"actionLists":{"a-305":{"id":"a-305","title":"Secondary Button [Hover]","actionItemGroups":[{"actionItems":[{"id":"a-305-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button_overlay","selectorGuids":["0e2696b6-0bb8-6bf6-7805-fb9d1f78b71e"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-305-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":1800,"target":{"useEventTarget":"CHILDREN","selector":".button_overlay","selectorGuids":["0e2696b6-0bb8-6bf6-7805-fb9d1f78b71e"]},"xValue":30,"yValue":30,"locked":true}}]},{"actionItems":[{"id":"a-305-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button_overlay","selectorGuids":["0e2696b6-0bb8-6bf6-7805-fb9d1f78b71e"]},"yValue":-50,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1734529256168},"a-306":{"id":"a-306","title":"Secondary Button [Hover Out]","actionItemGroups":[{"actionItems":[{"id":"a-306-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button_overlay","selectorGuids":["0e2696b6-0bb8-6bf6-7805-fb9d1f78b71e"]},"xValue":-50,"yValue":-250,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-306-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCirc","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button_overlay","selectorGuids":["0e2696b6-0bb8-6bf6-7805-fb9d1f78b71e"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-306-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCirc","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".button_overlay","selectorGuids":["0e2696b6-0bb8-6bf6-7805-fb9d1f78b71e"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-306-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutCirc","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".button_overlay","selectorGuids":["0e2696b6-0bb8-6bf6-7805-fb9d1f78b71e"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1722849926869}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SecondaryButton({
  as: _Component = _Builtin.Link,
  variant = "Base",
  buttonText = "Take our free eligibility test",

  buttonLink = {
    href: "https://eligibility.kene.partners/p/rd-eligibility-scorecard-ws",
    target: "_blank",
  },
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Base: "",
    "White Text": "w-variant-c07eb7ee-278d-ef5b-4c07-c380de642bb8",
    "Small [Navbar]": "w-variant-a5ac6b35-c358-3e3b-93f2-38b6339f5f7e",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "secondary_button", _activeStyleVariant)}
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
        className={_utils.cx(_styles, "button_overlay", _activeStyleVariant)}
        tag="div"
      />
    </_Component>
  );
}
