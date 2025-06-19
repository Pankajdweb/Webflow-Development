"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./PageProgressBar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-4047":{"id":"e-4047","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-351","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-351-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1736328405004}},"actionLists":{"a-351":{"id":"a-351","title":"Progress-bar","continuousParameterGroups":[{"id":"a-351-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-351-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"1bf9d5dd-063d-a467-626e-8602eb71a917"},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}}]},{"keyframe":100,"actionItems":[{"id":"a-351-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"1bf9d5dd-063d-a467-626e-8602eb71a917"},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]}]}],"createdOn":1736328408734}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PageProgressBar({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "progress-bar")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "progress-bar-line")}
        data-w-id="1bf9d5dd-063d-a467-626e-8602eb71a917"
        tag="div"
      />
    </_Component>
  );
}
