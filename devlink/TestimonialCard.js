"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./TestimonialCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3602":{"id":"e-3602","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-326","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3603"}},"mediaQueries":["main"],"target":{"selector":".testimonial-card","originalId":"1b7a1198-c0d6-de9e-8c28-edd2920a80c0","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-card","originalId":"1b7a1198-c0d6-de9e-8c28-edd2920a80c0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734329105053},"e-3603":{"id":"e-3603","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-327","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3602"}},"mediaQueries":["main"],"target":{"selector":".testimonial-card","originalId":"1b7a1198-c0d6-de9e-8c28-edd2920a80c0","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-card","originalId":"1b7a1198-c0d6-de9e-8c28-edd2920a80c0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734329105053},"e-4308":{"id":"e-4308","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-362","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4309"}},"mediaQueries":["main"],"target":{"selector":".testimonial-card","originalId":"6835ac0e320162939cd9c782|67dfa415-51b1-7edc-b04e-f97e640a90a0","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-card","originalId":"6835ac0e320162939cd9c782|67dfa415-51b1-7edc-b04e-f97e640a90a0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737018643048},"e-4309":{"id":"e-4309","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-363","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4308"}},"mediaQueries":["main"],"target":{"selector":".testimonial-card","originalId":"6835ac0e320162939cd9c782|67dfa415-51b1-7edc-b04e-f97e640a90a0","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-card","originalId":"6835ac0e320162939cd9c782|67dfa415-51b1-7edc-b04e-f97e640a90a0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737018643048}},"actionLists":{"a-326":{"id":"a-326","title":"Testimonial Card [Hover in]","actionItemGroups":[{"actionItems":[{"id":"a-326-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-card-content","selectorGuids":["fc8f4310-f4d8-7a77-309d-e32ade6077c0"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-326-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"value":0,"unit":""}},{"id":"a-326-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"xValue":-0.4375,"yValue":-0.5,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-326-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-card-content","selectorGuids":["fc8f4310-f4d8-7a77-309d-e32ade6077c0"]},"globalSwatchId":"","rValue":59,"bValue":79,"gValue":72,"aValue":1}},{"id":"a-326-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"value":1,"unit":""}},{"id":"a-326-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"xValue":0,"yValue":0,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1723033323463},"a-327":{"id":"a-327","title":"Testimonial Card [Hover Out]","actionItemGroups":[{"actionItems":[{"id":"a-327-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-card-content","selectorGuids":["fc8f4310-f4d8-7a77-309d-e32ade6077c0"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-327-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"value":0,"unit":""}},{"id":"a-327-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"xValue":-0.4375,"yValue":-0.4375,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1723033323463},"a-362":{"id":"a-362","title":"Testimonial Card [Hover in] 2","actionItemGroups":[{"actionItems":[{"id":"a-362-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-card-content","selectorGuids":["fc8f4310-f4d8-7a77-309d-e32ade6077c0"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-362-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"value":0,"unit":""}},{"id":"a-362-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"xValue":-0.4375,"yValue":-0.5,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-362-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-card-content","selectorGuids":["fc8f4310-f4d8-7a77-309d-e32ade6077c0"]},"globalSwatchId":"","rValue":59,"bValue":79,"gValue":72,"aValue":1}},{"id":"a-362-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"value":1,"unit":""}},{"id":"a-362-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"xValue":0,"yValue":0,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1723033323463},"a-363":{"id":"a-363","title":"Testimonial Card [Hover Out] 2","actionItemGroups":[{"actionItems":[{"id":"a-363-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-card-content","selectorGuids":["fc8f4310-f4d8-7a77-309d-e32ade6077c0"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-363-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"value":0,"unit":""}},{"id":"a-363-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"xValue":-0.4375,"yValue":-0.4375,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1723033323463}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TestimonialCard({
  as: _Component = _Builtin.Block,
  testimonialTag = "printing",
  testimonialLogo = "https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb3a_logo-Signbox.webp",
  testimonialDesc = "As the tax benefit came through, we have experienced first-hand the benefit of the positive experience in engaging with Kene Partners for our claim, and we look forward to conducting more claims with them in the future.",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "testimonial-card")}
      id={_utils.cx(
        _styles,
        "w-node-e3e20b35-43e7-8cdd-e1bd-29b06d6de6a8-6d6de6a8"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "testimonial-card-content")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "testimonial-tag")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "typo-s-14-16")}
            tag="div"
            color="paragraph2"
          >
            {testimonialTag}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "testimonial-logo-wrap")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "testimonial-logo")}
            width="auto"
            height="30"
            loading="lazy"
            alt=""
            src={testimonialLogo}
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "testimonial-desc-wrap")}
          tag="div"
        >
          <_Builtin.Paragraph className={_utils.cx(_styles, "typo-r-16-18")}>
            {testimonialDesc}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "testimonial-link")}
          button={false}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Read the full story here"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "testimonial-overlay")}
        tag="div"
      />
    </_Component>
  );
}
