"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalButton } from "./GlobalButton";
import * as _utils from "./utils";
import _styles from "./ServiceFaq.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3899":{"id":"e-3899","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-3900"}},"mediaQueries":["main"],"target":{"id":"90e04a34-e00b-74b2-23e0-63a7955f135a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"90e04a34-e00b-74b2-23e0-63a7955f135a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1735787747930},"e-3901":{"id":"e-3901","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-3902"}},"mediaQueries":["main"],"target":{"id":"90e04a34-e00b-74b2-23e0-63a7955f135c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"90e04a34-e00b-74b2-23e0-63a7955f135c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":250,"direction":"BOTTOM","effectIn":true},"createdOn":1735787769054}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ServiceFaq({
  as: _Component = _Builtin.Block,
  slotContent,
  sectionTitle = "R&D tax credits – FAQs",
  serviceDescVisibility = true,
  sectionDesc = "We know that the R&D legislation can be dense and daunting, so we answered some of the most frequently asked questions in a clear and simple way below. If you still have a question or want to know more, please contact us, we’d love to hear from you.",
  serviceButton = false,
  buttonVariant = null,

  buttonLink = {
    href: "https://kene.partners/book-a-free-consultation/",
    target: "_blank",
  },

  buttonText = "Book a free consultation",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "sec_service-faq")}
      tag="section"
      id="faqs"
    >
      <_Builtin.Block className={_utils.cx(_styles, "faq-shadow")} tag="div" />
      <_Builtin.Block
        className={_utils.cx(_styles, "global_container", "container-medium")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "service_faq-header")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "overflow_hidden")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-stye-h5-32-40")}
              data-w-id="90e04a34-e00b-74b2-23e0-63a7955f135a"
              tag="h2"
            >
              {sectionTitle}
            </_Builtin.Heading>
          </_Builtin.Block>
          {serviceDescVisibility ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "typo-r-16-18")}
              data-w-id="90e04a34-e00b-74b2-23e0-63a7955f135c"
              tag="div"
            >
              {sectionDesc}
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
        <_Builtin.NotSupported _atom="Slot" />
        {serviceButton ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "", "service-btn-wrap")}
            tag="div"
          >
            <GlobalButton
              variant={buttonVariant}
              buttonLink={buttonLink}
              buttonText={buttonText}
            />
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
