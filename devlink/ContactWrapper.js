"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalButton } from "./GlobalButton";
import * as _utils from "./utils";
import _styles from "./ContactWrapper.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3911":{"id":"e-3911","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-4364"}},"mediaQueries":["main"],"target":{"id":"00edc154-e236-742c-33da-a23e7d620433","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"00edc154-e236-742c-33da-a23e7d620433","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1735788519889},"e-3913":{"id":"e-3913","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-344","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4367"}},"mediaQueries":["main"],"target":{"id":"00edc154-e236-742c-33da-a23e7d620437","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"00edc154-e236-742c-33da-a23e7d620437","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1735789725157},"e-3915":{"id":"e-3915","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-345","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4365"}},"mediaQueries":["main"],"target":{"id":"00edc154-e236-742c-33da-a23e7d620441","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"00edc154-e236-742c-33da-a23e7d620441","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1735790026082},"e-3917":{"id":"e-3917","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-346","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4369"}},"mediaQueries":["main"],"target":{"id":"00edc154-e236-742c-33da-a23e7d62044b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"00edc154-e236-742c-33da-a23e7d62044b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1735790045188},"e-3919":{"id":"e-3919","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-4371"}},"mediaQueries":["main"],"target":{"id":"00edc154-e236-742c-33da-a23e7d620454","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"00edc154-e236-742c-33da-a23e7d620454","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1735790447943}},"actionLists":{"a-344":{"id":"a-344","title":"Contact Detail Card","actionItemGroups":[{"actionItems":[{"id":"a-344-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"00edc154-e236-742c-33da-a23e7d620437"},"xValue":20,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-344-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"00edc154-e236-742c-33da-a23e7d620437"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-344-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":"CHILDREN","id":"00edc154-e236-742c-33da-a23e7d620437"},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-344-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","id":"00edc154-e236-742c-33da-a23e7d620437"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1724473266448},"a-345":{"id":"a-345","title":"Contact Detail Card 2nd","actionItemGroups":[{"actionItems":[{"id":"a-345-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"00edc154-e236-742c-33da-a23e7d620441"},"xValue":20,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-345-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"00edc154-e236-742c-33da-a23e7d620441"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-345-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"ease","duration":900,"target":{"id":"00edc154-e236-742c-33da-a23e7d620441"},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-345-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":800,"target":{"id":"00edc154-e236-742c-33da-a23e7d620441"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1724473266448},"a-346":{"id":"a-346","title":"Contact Detail Card 3rd","actionItemGroups":[{"actionItems":[{"id":"a-346-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"00edc154-e236-742c-33da-a23e7d62044b"},"xValue":20,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-346-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"00edc154-e236-742c-33da-a23e7d62044b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-346-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"ease","duration":1200,"target":{"id":"00edc154-e236-742c-33da-a23e7d62044b"},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-346-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":110,"target":{"id":"00edc154-e236-742c-33da-a23e7d62044b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1724473266448},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ContactWrapper({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "contact-wrapper")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "nc-title-wrap")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-stye-h5-32-40")}
          data-w-id="00edc154-e236-742c-33da-a23e7d620433"
          tag="h2"
        >
          {"Contact us"}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "nc-grid")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "grid-item")}
          id={_utils.cx(
            _styles,
            "w-node-_00edc154-e236-742c-33da-a23e7d620436-7d620431"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "detail-item", "news-details")}
            data-w-id="00edc154-e236-742c-33da-a23e7d620437"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "details-icon-wrap")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "detail-icon")}
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb3f_map-pin.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "typo-r-16-18", "font-weight-500")}
              tag="div"
            >
              {"Office location"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "typo-s-14-16")}
              tag="div"
              color="cgrey500"
            >
              {"Drop in and say hello"}
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "typo-s-14-16")}
              button={false}
              color="cgrey500"
              block=""
              options={{
                href: "https://g.co/kgs/W99uaP2",
                target: "_blank",
              }}
            >
              {"10 Devonshire Square London EC2M 4YP"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "grid-item")}
          id={_utils.cx(
            _styles,
            "w-node-_00edc154-e236-742c-33da-a23e7d620440-7d620431"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "detail-item", "news-details")}
            data-w-id="00edc154-e236-742c-33da-a23e7d620441"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "details-icon-wrap")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "detail-icon")}
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb49_phone-call.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "typo-r-16-18", "font-weight-500")}
              tag="div"
            >
              {"Call us directly"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "typo-s-14-16")}
              tag="div"
              color="cgrey500"
            >
              {"We're always at the other end of the phone"}
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "typo-s-14-16")}
              button={false}
              color="cgrey500"
              block=""
              options={{
                href: "tel:02071188833",
              }}
            >
              {"0207 118 8833"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "grid-item")}
          id={_utils.cx(
            _styles,
            "w-node-_00edc154-e236-742c-33da-a23e7d62044a-7d620431"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "detail-item", "news-details")}
            data-w-id="00edc154-e236-742c-33da-a23e7d62044b"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "details-icon-wrap")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "detail-icon")}
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb2f_mail.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "typo-r-16-18", "font-weight-500")}
              tag="div"
            >
              {"Drop us a mail"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "typo-s-14-16")}
              tag="div"
              color="cgrey500"
            >
              {"We aim to answer all emails within 24hrs"}
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "typo-s-14-16")}
              button={false}
              color="cgrey500"
              block=""
              options={{
                href: "mailto:info@kene.partners",
              }}
            >
              {"info@kene.partners"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "nc-btn-wrap")}
        data-w-id="00edc154-e236-742c-33da-a23e7d620454"
        tag="div"
      >
        <GlobalButton
          variant="Base"
          buttonLink={{
            href: "#",
          }}
        />
        <GlobalButton
          variant="Secondary"
          buttonText="Send us a quick message"
          buttonLink={{
            href: "#",
          }}
        />
      </_Builtin.Block>
    </_Component>
  );
}
