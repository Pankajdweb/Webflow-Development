"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./PopularArticle.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3753":{"id":"e-3753","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FLIP_EFFECT","instant":false,"config":{"actionListId":"flipInBottom","autoStopEventId":"e-3754"}},"mediaQueries":["main"],"target":{"selector":".article-card","originalId":"48081f2d-1aa0-8a08-0069-934e7af18bbc","appliesTo":"CLASS"},"targets":[{"selector":".article-card","originalId":"48081f2d-1aa0-8a08-0069-934e7af18bbc","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":600,"direction":"BOTTOM","effectIn":true},"createdOn":1734929064745}},"actionLists":{"flipInBottom":{"id":"flipInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-90,"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PopularArticle({
  as: _Component = _Builtin.Link,

  cardLink = {
    href: "#",
  },

  title = "Unlocking business agility with cloud solutions",
  thumbnail = "https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cc21_Article%20Profile%20Image.webp",
  date = "25 June 2024",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "article-card")}
      button={false}
      block="inline"
      options={cardLink}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "article-img-wrap")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "article-img")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={thumbnail}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "article-content")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "format-date")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "article-date")}
            tag="div"
            date="news"
          >
            {date}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "typo-l-24-24", "font-weight-500")}
          tag="div"
          lineclamp="2"
        >
          {title}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "article-icon-wrap")}
        tag="div"
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "article-arrow-icon")}
          value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2012%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1%2011.3594L11%201.35938M11%201.35938H1M11%201.35938V11.3594%22%20stroke%3D%22currentcolor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.Block>
    </_Component>
  );
}
