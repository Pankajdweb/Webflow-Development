"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ServiceWithNumber.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3841":{"id":"e-3841","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-3842"}},"mediaQueries":["main"],"target":{"id":"0a0a11c6-1315-d9ed-3715-77303940ddc8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0a0a11c6-1315-d9ed-3715-77303940ddc8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1735734180150},"e-3843":{"id":"e-3843","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-3844"}},"mediaQueries":["main"],"target":{"id":"0a0a11c6-1315-d9ed-3715-77303940ddcb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0a0a11c6-1315-d9ed-3715-77303940ddcb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1735734180150},"e-3909":{"id":"e-3909","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-3910"}},"mediaQueries":["main"],"target":{"id":"fec33206-d16c-069d-64ed-0e9037ffd82f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fec33206-d16c-069d-64ed-0e9037ffd82f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":350,"direction":"BOTTOM","effectIn":true},"createdOn":1735788122611}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ServiceWithNumber({
  as: _Component = _Builtin.Block,
  title = "Ensure high availability of your services",
  description = "We offer a comprehensive range of services including software development, cybersecurity.",
  slotContent,
  tagline = "To qualify, your business must:",
  taglineVisiblity = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "service_with-point-wrap")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "service_wp-left-col")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "service_wp-title-wrap")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-stye-h3-48-56")}
            data-w-id="0a0a11c6-1315-d9ed-3715-77303940ddc8"
            tag="h2"
          >
            {title}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "service_wp-desc-wrap")}
          tag="div"
        >
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "typo-r-16-18")}
            data-w-id="0a0a11c6-1315-d9ed-3715-77303940ddcb"
          >
            {description}
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "ser_wp-right-col")}
        tag="div"
      >
        {taglineVisiblity ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "overflow_hidden")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "typo-xl-30-32", "font-weight-500")}
              data-w-id="fec33206-d16c-069d-64ed-0e9037ffd82f"
              tag="div"
              color="blue800"
            >
              {tagline}
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
        <_Builtin.NotSupported _atom="Slot" />
      </_Builtin.Block>
    </_Component>
  );
}
