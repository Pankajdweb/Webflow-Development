"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ProcessSteps.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3773":{"id":"e-3773","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-3774"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"86bee7e1-ecfd-8924-c37f-afe38393c098","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"86bee7e1-ecfd-8924-c37f-afe38393c098","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1735008817022},"e-3775":{"id":"e-3775","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-3776"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"86bee7e1-ecfd-8924-c37f-afe38393c096","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"86bee7e1-ecfd-8924-c37f-afe38393c096","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1735008875610}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ProcessSteps({
  as: _Component = _Builtin.Block,
  stepMainTitle = "Let’s make it happen",
  stepTitle1 = "Complete the form",
  stepDescription1 = "provide your details to get started",
  stepTitle2 = "Connect with an advisor",
  stepDescription2 = "one of our dedicated experts will reach out to schedule a meeting within 24 working hours.",
  stepTitle3 = "Discuss your eligibility",
  stepDescription3 = "we’ll assess your R&D funding potential and guide you through the next steps.",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "lets-make-wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "overflow-hidden")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-stye-h3-48-56")}
          data-w-id="86bee7e1-ecfd-8924-c37f-afe38393c096"
          tag="h2"
        >
          {stepMainTitle}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "lets-make-grid")}
        data-w-id="86bee7e1-ecfd-8924-c37f-afe38393c098"
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "make-row")}
          id={_utils.cx(
            _styles,
            "w-node-_86bee7e1-ecfd-8924-c37f-afe38393c099-8393c094"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "make-divider-holder")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "moke-divider")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "grid-item")}
          id={_utils.cx(
            _styles,
            "w-node-_86bee7e1-ecfd-8924-c37f-afe38393c09c-8393c094"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "make-step-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "step-no")}
              tag="div"
              color="coral"
            >
              {"01"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "make-pointer")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "step-name-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "step-title")}
                tag="div"
              >
                {stepTitle1}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "typo-r-16-18")}
              tag="div"
              color="cgrey100"
            >
              {stepDescription1}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "grid-item")}
          id={_utils.cx(
            _styles,
            "w-node-_86bee7e1-ecfd-8924-c37f-afe38393c0a6-8393c094"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "make-step-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "step-no")}
              tag="div"
              color="coral"
            >
              {"02"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "step-name-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "step-title")}
                tag="div"
              >
                {stepTitle2}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "typo-r-16-18")}
              tag="div"
              color="cgrey100"
            >
              {stepDescription2}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "make-pointer")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "grid-item")}
          id={_utils.cx(
            _styles,
            "w-node-_86bee7e1-ecfd-8924-c37f-afe38393c0b0-8393c094"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "make-step-wrap", "is_3")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "step-no")}
              tag="div"
              color="coral"
            >
              {"03"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "step-name-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "step-title")}
                tag="div"
              >
                {stepTitle3}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "typo-r-16-18")}
              tag="div"
              color="cgrey100"
            >
              {stepDescription3}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "make-pointer")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
