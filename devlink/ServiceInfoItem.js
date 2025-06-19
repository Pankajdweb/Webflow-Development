"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ServiceInfoItem.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3893":{"id":"e-3893","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-3894"}},"mediaQueries":["main"],"target":{"id":"89428abf-e8df-9f83-72fc-7cb341ea6319","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"89428abf-e8df-9f83-72fc-7cb341ea6319","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":350,"direction":"BOTTOM","effectIn":true},"createdOn":1735787423730}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ServiceInfoItem({
  as: _Component = _Builtin.Block,
  itemTitle = "Ttitle",
  itemDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  variant = "Base",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Base: "",
    "With Out Bullet": "w-variant-4d24ffca-2166-e3e0-6b0f-5ea89c3c67a7",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "service-info-item", _activeStyleVariant)}
      data-w-id="89428abf-e8df-9f83-72fc-7cb341ea6319"
      tag="div"
      sinfo="item"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "service-list-dot-wrap",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "service-list-dot",
            _activeStyleVariant
          )}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "service-list-content",
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
          {itemTitle}
        </_Builtin.Block>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "typo-r-16-18", _activeStyleVariant)}
        >
          {itemDescription}
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
