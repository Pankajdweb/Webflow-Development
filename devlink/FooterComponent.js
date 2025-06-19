"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FooterComponent.module.css";

export function FooterComponent({
  as: _Component = _Builtin.Section,
  changePaddingVisibility = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "global_footer")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "global_container")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "footer-grid")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "grid-item")}
            id={_utils.cx(
              _styles,
              "w-node-cd51a660-f6e2-e3b6-7543-68b42b4aac7b-3e0c12aa"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-left_col")}
              id={_utils.cx(
                _styles,
                "w-node-fbb86085-777f-fce6-7114-9e783e0c12b5-3e0c12aa"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer_logo-wrap")}
                button={false}
                aria-label="back to hom page  "
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  width="182"
                  height="30"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cacd_KENE%20logo%20light.svg"
                />
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_social-row")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "social_icon-wrap")}
                  button={false}
                  aria-label="facbook"
                  block="inline"
                  options={{
                    href: "https://www.facebook.com/Kene.Partners",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "social-icon-img")}
                    value="%3Csvg%20width%3D%228%22%20height%3D%2216%22%20viewBox%3D%220%200%208%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.309811%208.59174H1.98395V15.3568C1.98395%2015.4904%202.09421%2015.5986%202.23028%2015.5986H5.06884C5.20492%2015.5986%205.31518%2015.4904%205.31518%2015.3568V8.62361H7.23974C7.36487%208.62361%207.47016%208.53143%207.48445%208.40942L7.77675%205.91885C7.78478%205.85033%207.76266%205.78171%207.71595%205.7303C7.6692%205.67885%207.60229%205.6494%207.53209%205.6494H5.31527V4.08819C5.31527%203.61756%205.57343%203.37891%206.08266%203.37891C6.15523%203.37891%207.53209%203.37891%207.53209%203.37891C7.66816%203.37891%207.77842%203.27063%207.77842%203.13711V0.851005C7.77842%200.717438%207.66816%200.609211%207.53209%200.609211H5.53456C5.52047%200.608534%205.48919%200.607422%205.44307%200.607422C5.09648%200.607422%203.89176%200.674205%202.94012%201.53354C1.88571%202.48582%202.03228%203.62602%202.06731%203.82371V5.64935H0.309811C0.173736%205.64935%200.0634766%205.75758%200.0634766%205.89114V8.34989C0.0634766%208.48346%200.173736%208.59174%200.309811%208.59174Z%22%20fill%3D%22%23FEF4F2%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "social_icon-wrap")}
                  button={false}
                  aria-label="linkdin"
                  block="inline"
                  options={{
                    href: "https://www.linkedin.com/company/kene-partners-limited",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "social-icon-img")}
                    value="%3Csvg%20width%3D%2216%22%20height%3D%2214%22%20viewBox%3D%220%200%2016%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.541979%204.52331H3.80696V13.9204H0.541979V4.52331ZM2.19441%200C1.08614%200%200.353943%200.701846%200.353943%201.62217C0.353943%202.52246%201.0567%203.24342%202.15453%203.24342H2.17447C3.31218%203.24342%204.02444%202.52246%204.01494%201.62217C4.00449%200.701846%203.31218%200%202.19441%200V0ZM11.7994%204.30484C10.0625%204.30484%209.28944%205.21696%208.86113%205.86055V4.52331H5.6066C5.6066%204.52331%205.64648%205.4054%205.6066%2013.9204H8.86113V8.67613C8.86113%208.39211%208.89152%208.11629%208.9694%207.90874C9.20777%207.3489%209.74053%206.77086%2010.6427%206.77086C11.8184%206.77086%2012.2933%207.63383%2012.2933%208.8946V13.9204H15.5487V8.53412C15.5487%205.65118%2013.9457%204.30484%2011.7994%204.30484V4.30484Z%22%20fill%3D%22%23FEF4F2%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "social_icon-wrap")}
                  button={false}
                  aria-label="youtube"
                  block="inline"
                  options={{
                    href: "https://www.youtube.com/@wearekene",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "social-icon-img")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M23.7609%207.20005C23.7609%207.20005%2023.5266%205.54536%2022.8047%204.8188C21.8906%203.86255%2020.8688%203.85786%2020.4%203.80161C17.0438%203.55786%2012.0047%203.55786%2012.0047%203.55786H11.9953C11.9953%203.55786%206.95625%203.55786%203.6%203.80161C3.13125%203.85786%202.10938%203.86255%201.19531%204.8188C0.473438%205.54536%200.24375%207.20005%200.24375%207.20005C0.24375%207.20005%200%209.14536%200%2011.086V12.9047C0%2014.8454%200.239062%2016.7907%200.239062%2016.7907C0.239062%2016.7907%200.473437%2018.4454%201.19062%2019.1719C2.10469%2020.1282%203.30469%2020.0954%203.83906%2020.1985C5.76094%2020.3813%2012%2020.4375%2012%2020.4375C12%2020.4375%2017.0438%2020.4282%2020.4%2020.1891C20.8688%2020.1329%2021.8906%2020.1282%2022.8047%2019.1719C23.5266%2018.4454%2023.7609%2016.7907%2023.7609%2016.7907C23.7609%2016.7907%2024%2014.85%2024%2012.9047V11.086C24%209.14536%2023.7609%207.20005%2023.7609%207.20005ZM9.52031%2015.1125V8.36724L16.0031%2011.7516L9.52031%2015.1125Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "grid-item")}
            id={_utils.cx(
              _styles,
              "w-node-c89a691d-3ea2-f797-8df2-0acea625f296-3e0c12aa"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer_link-container")}
              id={_utils.cx(
                _styles,
                "w-node-_8d3a7deb-8dff-97d3-10c7-40f906cf7050-3e0c12aa"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-link-row")}
                id={_utils.cx(
                  _styles,
                  "w-node-_8ed87282-d051-94f9-1e63-83dc5fb76963-3e0c12aa"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-list-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer_link-box")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link-label")}
                      tag="div"
                    >
                      {"R&D Services"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer_link-list")}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"R&D tax credits"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Grants"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Patent box"}
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer_link-box")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link-label")}
                      tag="div"
                    >
                      {"R&D explained"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer_link-list")}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"What is R&D?"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"R&D tax credits explained"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"RDEC scheme explained"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link", "hide")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Client stories"}
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-list-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer_link-box")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link-label")}
                      tag="div"
                    >
                      {"Who we are"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer_link-list")}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link", "hide")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"What sets us apart?"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"About us"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Meet our team"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link", "hide")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Impact beyond business"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Join our team"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Client stories"}
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer_link-box")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link-label")}
                      tag="div"
                    >
                      {"Resources"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer_link-list")}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"News and insights"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link", "hide")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Client stories"}
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-list-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer_link-box")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link-label")}
                      tag="div"
                    >
                      {"Get in touch"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-menu-wrap")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "footer-location-wrap")}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">{"Location"}</_Builtin.Block>
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "footer-link",
                            "is_internallink"
                          )}
                          button={false}
                          color="cgrey200"
                          block=""
                          options={{
                            href: "https://g.co/kgs/DGCeSwc",
                            target: "_blank",
                          }}
                        >
                          {"10 Devonshire Square, London EC2M 4YP"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "footer-location-wrap")}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">{"Email"}</_Builtin.Block>
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "footer-link",
                            "is_internallink"
                          )}
                          button={false}
                          color="cgrey200"
                          block=""
                          options={{
                            href: "mailto:info@kene.partners",
                          }}
                        >
                          {"info@kene.partners"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "footer-location-wrap")}
                        tag="div"
                      >
                        <_Builtin.Block tag="div">{"Contact"}</_Builtin.Block>
                        <_Builtin.Link
                          className={_utils.cx(
                            _styles,
                            "footer-link",
                            "is_internallink"
                          )}
                          button={false}
                          color="cgrey200"
                          block=""
                          options={{
                            href: "tel:02071188833",
                          }}
                        >
                          {"0207 118 8833"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-list-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer_link-box")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link-label")}
                      tag="div"
                    >
                      {"Quick links"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer_link-list")}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Latest article"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Contact us"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                          preload: "none",
                        }}
                      >
                        {"Book a consultation"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "footer-link", "hide")}
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Client stories"}
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-logo-row")}
                id={_utils.cx(
                  _styles,
                  "w-node-_18bd1ee5-5309-1128-3b1c-dcb3334ca1f8-3e0c12aa"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-logo-wrap")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_18bd1ee5-5309-1128-3b1c-dcb3334ca1f9-3e0c12aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "images")}
                    loading="lazy"
                    width="32.5"
                    height="90"
                    alt=""
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cbef_B-Corp-Logo-White-RGB.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-logo-wrap")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_18bd1ee5-5309-1128-3b1c-dcb3334ca1fb-3e0c12aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "images")}
                    loading="lazy"
                    width="106.5"
                    height="90"
                    alt=""
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cbe3_CTAsPM_WHITEpng%20(1).svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-logo-wrap")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_18bd1ee5-5309-1128-3b1c-dcb3334ca1fd-3e0c12aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "images")}
                    loading="lazy"
                    width="43"
                    height="90"
                    alt=""
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cc00_new.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-logo-wrap")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_18bd1ee5-5309-1128-3b1c-dcb3334ca1ff-3e0c12aa"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "images")}
                    loading="lazy"
                    width="72.5"
                    height="90"
                    alt=""
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cbe6_Sunday%20times.svg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-bottom-content")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-one-bottom-link-left")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "copy_right-font")}
              tag="div"
            >
              {
                "© 2025 Kene Partners Limited | Company number 10813376 | VAT number 275396464"
              }
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-bottom-link")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link", "is_secoundry")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Terms"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link", "is_secoundry")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Privacy"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link", "is_secoundry")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Cookie policy"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "footer-link",
                "is_secoundry",
                "hide"
              )}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Site map"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link", "is_secoundry")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"AMLCompliance"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
