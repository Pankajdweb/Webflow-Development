"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./AccordianItem.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2720":{"id":"e-2720","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2721"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa56","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa56","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726214622206},"e-2721":{"id":"e-2721","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2720"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa56","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa56","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726214622206},"e-2726":{"id":"e-2726","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2727"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa61","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa61","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726214622206},"e-2727":{"id":"e-2727","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2726"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa61","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa61","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726214622206},"e-2730":{"id":"e-2730","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2731"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa6c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa6c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726214622206},"e-2731":{"id":"e-2731","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2730"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa6c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa6c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726214622206},"e-2734":{"id":"e-2734","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2735"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa77","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa77","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726214622206},"e-2735":{"id":"e-2735","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2734"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa77","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa77","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726214622206},"e-3641":{"id":"e-3641","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3642"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2a5a65d0-1468-88e1-37e4-acdef48754af","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2a5a65d0-1468-88e1-37e4-acdef48754af","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734520463056},"e-3642":{"id":"e-3642","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-304","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3641"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2a5a65d0-1468-88e1-37e4-acdef48754af","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2a5a65d0-1468-88e1-37e4-acdef48754af","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734520463064},"e-3643":{"id":"e-3643","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-3644"}},"mediaQueries":["main"],"target":{"id":"2a5a65d0-1468-88e1-37e4-acdef48754ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2a5a65d0-1468-88e1-37e4-acdef48754ae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":400,"direction":"BOTTOM","effectIn":true},"createdOn":1734522017518}},"actionLists":{"a-14":{"id":"a-14","title":"Accordian [Open]","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".accodian_body","selectorGuids":["782a84d6-6b50-c030-05f0-83eda9652bce"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-14-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".accodian-icon-plus","selectorGuids":["223540cc-9244-112c-a4dc-daee52d4c981"]},"value":0,"unit":""}},{"id":"a-14-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".accodian-icon-minus","selectorGuids":["6519a609-9e68-b3ae-152d-f0333ebda5fb"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-14-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".accodian_body","selectorGuids":["782a84d6-6b50-c030-05f0-83eda9652bce"]},"widthValue":100,"widthUnit":"%","heightUnit":"AUTO","locked":false}},{"id":"a-14-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".accodian-icon-plus","selectorGuids":["223540cc-9244-112c-a4dc-daee52d4c981"]},"value":1,"unit":""}},{"id":"a-14-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".accodian-icon-minus","selectorGuids":["6519a609-9e68-b3ae-152d-f0333ebda5fb"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1722740668351},"a-15":{"id":"a-15","title":"Home One Accordian Open 2","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-one-business-accordian-paragraph","selectorGuids":["eeb726e9-05be-fd1d-4fd9-7efd0a36bfe1"]},"heightValue":0,"widthUnit":"AUTO","heightUnit":"px","locked":false}},{"id":"a-15-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".accordian-plus","selectorGuids":["eeb726e9-05be-fd1d-4fd9-7efd0a36bfec"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1722740668351},"a-304":{"id":"a-304","title":"Accordian [Close]","actionItemGroups":[{"actionItems":[{"id":"a-304-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".accodian_body","selectorGuids":["782a84d6-6b50-c030-05f0-83eda9652bce"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-304-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".accodian-icon-plus","selectorGuids":["223540cc-9244-112c-a4dc-daee52d4c981"]},"value":0,"unit":""}},{"id":"a-304-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".accodian-icon-minus","selectorGuids":["6519a609-9e68-b3ae-152d-f0333ebda5fb"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1722740668351},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AccordianItem({
  as: _Component = _Builtin.Block,
  accordianHead = "Accordian Head",
  accordianBody = "Accordian Body",
  variant = "Base",
  accordionSimpleTextBlock = true,
  accordionSimpleRichText = false,
  accordionRichBody = "",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Base: "",
    "Small Title 18": "w-variant-92331882-15a5-cbad-fe02-6bf8d05661be",
    "Service Accordian": "w-variant-b1dffc44-412e-b42f-b94c-e83d9de0a304",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "accodian-item", _activeStyleVariant)}
      data-w-id="2a5a65d0-1468-88e1-37e4-acdef48754ae"
      tag="div"
      accordian="item"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "accodian-item_head",
          _activeStyleVariant
        )}
        data-w-id="2a5a65d0-1468-88e1-37e4-acdef48754af"
        tag="div"
        accordion-element="accordion"
      >
        <_Builtin.Block tag="div">{accordianHead}</_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "accodian-icon-wrap",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(
              _styles,
              "accodian-icon-plus",
              _activeStyleVariant
            )}
            value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M5.80176%2012H19.8018%22%20stroke%3D%22%232C353A%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.HtmlEmbed
            className={_utils.cx(
              _styles,
              "accodian-icon-minus",
              _activeStyleVariant
            )}
            value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.8018%205V19M5.80176%2012H19.8018%22%20stroke%3D%22%232C353A%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "accodian_body", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "accodian-body_content",
            _activeStyleVariant
          )}
          tag="div"
        >
          {accordionSimpleTextBlock ? (
            <_Builtin.Block tag="div">{accordianBody}</_Builtin.Block>
          ) : null}
          {accordionSimpleRichText ? (
            <_Builtin.RichText
              className={_utils.cx(
                _styles,
                "accordian-richtext",
                _activeStyleVariant
              )}
              tag="div"
              slot=""
            >
              {accordionRichBody}
            </_Builtin.RichText>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
