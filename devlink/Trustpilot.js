"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Trustpilot.module.css";

export function Trustpilot({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "sec-advice")} tag="section">
      <_Builtin.Block
        className={_utils.cx(_styles, "global_container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "advice-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "advice-icon-wrap")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "advice-icon")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb4d_reviewus_sticker_2%201.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "advice-header")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-stye-h5-32-40")}
              tag="h2"
            >
              {"Advice you can trust"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "typo-r-16-18")}>
              {
                "We’ve helped businesses like yours unlock millions in R&D tax incentives. Don’t just take our word for it—read our client reviews and see how we can support your growth."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "advice-logo-wrap")}
            tag="div"
          />
          <_Builtin.HtmlEmbed value="%3C!--%20TrustBox%20script%20--%3E%0A%3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22%2F%2Fwidget.trustpilot.com%2Fbootstrap%2Fv5%2Ftp.widget.bootstrap.min.js%22%3E%3C%2Fscript%3E%0A%3C!--%20End%20TrustBox%20script%20--%3E%0A%0A%0A%3C!--%20TrustBox%20widget%20-%20Micro%20Star%20--%3E%0A%3Cdiv%20class%3D%22trustpilot-widget%22%20data-locale%3D%22en-GB%22%20data-template-id%3D%225419b732fbfb950b10de65e5%22%20data-businessunit-id%3D%22607467231a16a9000102b96b%22%20data-style-height%3D%2224px%22%20data-style-width%3D%22100%25%22%20data-theme%3D%22dark%22%3E%0A%20%20%3Ca%20href%3D%22https%3A%2F%2Fuk.trustpilot.com%2Freview%2Fkene.partners%22%20target%3D%22_blank%22%20rel%3D%22noopener%22%3ETrustpilot%3C%2Fa%3E%0A%3C%2Fdiv%3E%0A%3C!--%20End%20TrustBox%20widget%20--%3E" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
