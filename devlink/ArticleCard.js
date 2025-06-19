"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ArticleCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3743":{"id":"e-3743","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-328","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3744"}},"mediaQueries":["main"],"target":{"selector":".news-card","originalId":"6835ac0e320162939cd9c793|af2c8cbb-e44e-7069-54d8-b2a8fd8f5d69","appliesTo":"CLASS"},"targets":[{"selector":".news-card","originalId":"6835ac0e320162939cd9c793|af2c8cbb-e44e-7069-54d8-b2a8fd8f5d69","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734870361328},"e-3744":{"id":"e-3744","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-329","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3743"}},"mediaQueries":["main"],"target":{"selector":".news-card","originalId":"6835ac0e320162939cd9c793|af2c8cbb-e44e-7069-54d8-b2a8fd8f5d69","appliesTo":"CLASS"},"targets":[{"selector":".news-card","originalId":"6835ac0e320162939cd9c793|af2c8cbb-e44e-7069-54d8-b2a8fd8f5d69","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734870361339}},"actionLists":{"a-328":{"id":"a-328","title":"News Card [Hover In]","actionItemGroups":[{"actionItems":[{"id":"a-328-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".news-img","selectorGuids":["36f8509f-f07b-ac5c-1ecc-b43fdd9ddf83"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-328-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".news-img","selectorGuids":["36f8509f-f07b-ac5c-1ecc-b43fdd9ddf83"]},"xValue":1.05,"yValue":1.05,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1724316693819},"a-329":{"id":"a-329","title":"News Card [Hover Out]","actionItemGroups":[{"actionItems":[{"id":"a-329-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".news-img","selectorGuids":["36f8509f-f07b-ac5c-1ecc-b43fdd9ddf83"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1724316693819}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ArticleCard({
  as: _Component = _Builtin.Link,
  newsImage = "https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cba5_news%20thumbnail.webp",
  updatedDate = "21 Nov 2024",
  newsTitle = "Always on, always connected, our cloud is ready",
  newsAuthorImage = "https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb4a_news%20author%20profile.webp",
  newsAuthorName = "Kenneth Walker",
  newsAuthorPosition = "R&D Tax consultant",

  cardLnk = {
    href: "#",
  },

  publishedDate = "21 Nov 2024",
  variant = "Base",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Base: "",
    "With Right Date": "w-variant-75b64fcf-5b7d-5499-cdb6-ca6c0ff992e9",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "news-card", _activeStyleVariant)}
      button={false}
      block="inline"
      options={cardLnk}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "news-content-card", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "news-img-wrap", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "news-img", _activeStyleVariant)}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={newsImage}
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "new-update-row", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "news-posted-wrap",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "typo-s-14-16",
                _activeStyleVariant
              )}
              tag="div"
            >
              {"Posted :"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "typo-s-14-16",
                "format-date",
                _activeStyleVariant
              )}
              tag="div"
              fs-cmssort-field="date"
            >
              {publishedDate}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "new-news", _activeStyleVariant)}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "typo-r-16-18",
                "font-weight-500",
                _activeStyleVariant
              )}
              tag="div"
              color="ecoteal"
            >
              {"New"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "typo-l-24-24",
            "font-weight-600",
            _activeStyleVariant
          )}
          tag="div"
          fs-cmsfilter-field="title"
        >
          {newsTitle}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "author-wrap", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "author-img-wrap", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "author-img", _activeStyleVariant)}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={newsAuthorImage}
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "author-details", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "typo-m-18-20",
              "font-weight-500",
              _activeStyleVariant
            )}
            tag="div"
            color="cgrey800"
          >
            {newsAuthorName}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "typo-s-14-16", _activeStyleVariant)}
            tag="div"
            color="cgrey600"
          >
            {newsAuthorPosition}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "date-absolute", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "date-line", _activeStyleVariant)}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "news-date-wrap", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "",
              "typo-xs-12-14",
              _activeStyleVariant
            )}
            tag="div"
            date="news"
          >
            {publishedDate}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed value="%3Cscript%3E%0A%20%20%20%20%20%20%20%20document.addEventListener('DOMContentLoaded'%2C%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Helper%20function%20to%20parse%20and%20format%20a%20variety%20of%20date%20formats%20to%20%22DD%20Month%20YYYY%22%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20parseAndFormatDate(dateStr)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20dateObj%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Sanitize%20date%20input%20(e.g.%2C%20replace%20slashes%2C%20dashes%2C%20etc.)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20sanitizedStr%20%3D%20dateStr.replace(%2F%5B-%5C%2F.%5D%2Fg%2C%20'%2F').trim()%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Try%20parsing%20the%20date%20using%20JavaScript's%20Date%20object%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dateObj%20%3D%20new%20Date(sanitizedStr)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20If%20the%20date%20object%20is%20invalid%2C%20log%20an%20error%20and%20return%20null%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(isNaN(dateObj.getTime()))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.warn(%60Invalid%20date%20format%3A%20%24%7BdateStr%7D%60)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20null%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Format%20the%20date%20to%20%22DD%20Month%20YYYY%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20options%20%3D%20%7B%20day%3A%20'numeric'%2C%20month%3A%20'long'%2C%20year%3A%20'numeric'%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20dateObj.toLocaleDateString('en-GB'%2C%20options)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Function%20to%20format%20all%20dates%20with%20the%20class%20'.format-date'%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20formatDates()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Select%20all%20elements%20with%20the%20class%20'format-date'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20dateElements%20%3D%20document.querySelectorAll('.format-date')%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Iterate%20over%20each%20element%20and%20format%20the%20date%20inside%20it%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dateElements.forEach((element)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20dateStr%20%3D%20element.textContent.trim()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20formattedDate%20%3D%20parseAndFormatDate(dateStr)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20If%20the%20date%20is%20valid%2C%20update%20the%20element's%20content%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(formattedDate)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20element.textContent%20%3D%20formattedDate%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20If%20no%20date%2C%20hide%20the%20parent%20.new-update-row%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20parentRow%20%3D%20element.closest('.new-update-row')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(parentRow)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20parentRow.style.display%20%3D%20'none'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Ensure%20dates%20are%20formatted%20initially%20if%20they%20already%20exist%0A%20%20%20%20%20%20%20%20%20%20%20%20formatDates()%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Function%20to%20observe%20dynamically%20injected%20CMS%20content%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20observeCMSContent()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20observer%20%3D%20new%20MutationObserver(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20formatDates()%3B%20%2F%2F%20Re-run%20the%20date%20formatting%20whenever%20content%20is%20added%2Fupdated%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Observe%20changes%20in%20the%20body%20or%20any%20part%20of%20the%20page%20where%20CMS%20content%20is%20loaded%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20observer.observe(document.body%2C%20%7B%20childList%3A%20true%2C%20subtree%3A%20true%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Start%20observing%20for%20any%20changes%20or%20CMS%20content%20being%20injected%0A%20%20%20%20%20%20%20%20%20%20%20%20observeCMSContent()%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%3C%2Fscript%3E" />
    </_Component>
  );
}
