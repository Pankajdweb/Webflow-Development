"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { TeamMemberItem } from "./TeamMemberItem";
import * as _utils from "./utils";
import _styles from "./TeamWrapper.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3322":{"id":"e-3322","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-3323"}},"mediaQueries":["main"],"target":{"id":"98282a4a-5098-c119-315d-e012d0c18b88","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"98282a4a-5098-c119-315d-e012d0c18b88","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1732478212505},"e-3324":{"id":"e-3324","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-3325"}},"mediaQueries":["main"],"target":{"id":"98282a4a-5098-c119-315d-e012d0c18b8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"98282a4a-5098-c119-315d-e012d0c18b8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1732478212505},"e-4245":{"id":"e-4245","name":"","animationType":"custom","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-324","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4246"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".slider-slide","originalId":"6835ac0e320162939cd9c782|c9b65a96-7d27-2342-3363-4ff5ff366e9e","appliesTo":"CLASS"},"targets":[{"selector":".slider-slide","originalId":"6835ac0e320162939cd9c782|c9b65a96-7d27-2342-3363-4ff5ff366e9e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1736775560406},"e-4246":{"id":"e-4246","name":"","animationType":"custom","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-325","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4245"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".slider-slide","originalId":"6835ac0e320162939cd9c782|c9b65a96-7d27-2342-3363-4ff5ff366e9e","appliesTo":"CLASS"},"targets":[{"selector":".slider-slide","originalId":"6835ac0e320162939cd9c782|c9b65a96-7d27-2342-3363-4ff5ff366e9e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1736775560429}},"actionLists":{"a-324":{"id":"a-324","title":"Team_Slide [IN]","actionItemGroups":[{"actionItems":[{"id":"a-324-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-one-testimonial-image-main","selectorGuids":["ee23fbda-5900-7472-b489-272644b66fff"]},"zValue":-160,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-324-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".member_detail-row","selectorGuids":["df58dc5c-debc-17aa-8bdf-536c20bade69"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-324-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".member_btn-wrap","selectorGuids":["79eb1ee3-3a4e-fdcb-12d6-ad92ea1fa240"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-324-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-five.responsive-align-center","selectorGuids":["4b8935e3-8d33-28db-f4c8-697a22b9c377","eeb726e9-05be-fd1d-4fd9-7efd0a36c004"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-324-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".home-one-testimonial-image-main","selectorGuids":["ee23fbda-5900-7472-b489-272644b66fff"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-324-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".member_detail-row","selectorGuids":["df58dc5c-debc-17aa-8bdf-536c20bade69"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-324-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".member_btn-wrap","selectorGuids":["79eb1ee3-3a4e-fdcb-12d6-ad92ea1fa240"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-324-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-five.responsive-align-center","selectorGuids":["4b8935e3-8d33-28db-f4c8-697a22b9c377","eeb726e9-05be-fd1d-4fd9-7efd0a36c004"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-324-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".home-one-testimonial-image-main","selectorGuids":["ee23fbda-5900-7472-b489-272644b66fff"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1723055095378},"a-325":{"id":"a-325","title":"Team_Slide [Out]","actionItemGroups":[{"actionItems":[{"id":"a-325-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":100,"target":{"selector":".home-one-testimonial-image-main","selectorGuids":["ee23fbda-5900-7472-b489-272644b66fff"]},"zValue":-160,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-325-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".member_btn-wrap","selectorGuids":["79eb1ee3-3a4e-fdcb-12d6-ad92ea1fa240"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-325-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-five.responsive-align-center","selectorGuids":["4b8935e3-8d33-28db-f4c8-697a22b9c377","eeb726e9-05be-fd1d-4fd9-7efd0a36c004"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-325-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".member_detail-row","selectorGuids":["df58dc5c-debc-17aa-8bdf-536c20bade69"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1723055297577},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TeamWrapper({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "team-wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "team-title-wrap")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-stye-h3-48-56")}
          data-w-id="98282a4a-5098-c119-315d-e012d0c18b88"
          tag="h2"
          color="charcoal-grey"
        >
          {"Meet our team"}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.SliderWrapper
        className={_utils.cx(_styles, "home-one-testimonial-slider")}
        data-w-id="98282a4a-5098-c119-315d-e012d0c18b8a"
        navSpacing={3}
        navShadow={false}
        autoplay={true}
        delay={4000}
        iconArrows={true}
        animation="slide"
        navNumbers={true}
        easing="ease"
        navRound={true}
        hideArrows={false}
        disableSwipe={false}
        duration={0}
        infinite={true}
        autoMax={0}
        navInvert={false}
      >
        <_Builtin.SliderMask className={_utils.cx(_styles, "mask")}>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slider-slide")}
            tag="div"
          >
            <TeamMemberItem
              mainImage="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c8b7_Client%20Two.webp"
              backImage="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c830_Client%20Image.webp"
              memberName="Adam Kene"
              memberPosition="CEO"
            />
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slider-slide")}
            tag="div"
          >
            <TeamMemberItem
              mainImage="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c975_Client%20Five.webp"
              backImage="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c8b7_Client%20Two.webp"
              memberName="RobertSilvey"
              memberPosition="Cofounder"
            />
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slider-slide")}
            tag="div"
          >
            <TeamMemberItem
              mainImage="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c835_Client%20Three.webp"
              backImage="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c975_Client%20Five.webp"
              memberName="Maria Granier"
              memberPosition="Product designer"
            />
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slider-slide")}
            tag="div"
          >
            <TeamMemberItem
              mainImage="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c969_Client%20Four.webp"
              backImage="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c835_Client%20Three.webp"
              memberName="LauraGilman"
              memberPosition="Cloud Engineer"
            />
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slider-slide")}
            tag="div"
          >
            <TeamMemberItem />
          </_Builtin.SliderSlide>
        </_Builtin.SliderMask>
        <_Builtin.SliderArrow
          className={_utils.cx(_styles, "testimonial-arrow-right", "is_left")}
          dir="left"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "testimonial-arrow", "is_left")}
            value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2017%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.09558%206.962H15.6789M15.6789%206.962L9.05012%200.996094M15.6789%206.962L9.05012%2013.5908%22%20stroke%3D%22currentcolor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderArrow
          className={_utils.cx(_styles, "testimonial-arrow-right")}
          dir="right"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "testimonial-arrow")}
            value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2017%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.09558%206.962H15.6789M15.6789%206.962L9.05012%200.996094M15.6789%206.962L9.05012%2013.5908%22%20stroke%3D%22currentcolor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderNav className={_utils.cx(_styles, "display-off")} />
      </_Builtin.SliderWrapper>
    </_Component>
  );
}
