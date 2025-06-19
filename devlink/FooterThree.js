"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./FooterThree.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-398":{"id":"e-398","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-72","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1286"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3a3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3a3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723036004421},"e-405":{"id":"e-405","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1304"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3a3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3a3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723036004424},"e-400":{"id":"e-400","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-72","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1312"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3a9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3a9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723036234729},"e-396":{"id":"e-396","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1290"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3a9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3a9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723036234732},"e-403":{"id":"e-403","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-72","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-408"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3af","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3af","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723036251569},"e-408":{"id":"e-408","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1284"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3af","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3af","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723036251573},"e-401":{"id":"e-401","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-72","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-409"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3b5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3b5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723036265909},"e-409":{"id":"e-409","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1308"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3b5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3b5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723036265913},"e-402":{"id":"e-402","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1285"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723035468684},"e-404":{"id":"e-404","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-75","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1283"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723035468802},"e-406":{"id":"e-406","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1307"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723035685306},"e-399":{"id":"e-399","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-75","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1287"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723035685309},"e-407":{"id":"e-407","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1293"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723035703201},"e-397":{"id":"e-397","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-75","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1288"}},"mediaQueries":["main"],"target":{"id":"01677851-319b-c715-16f7-f8375359e3d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"01677851-319b-c715-16f7-f8375359e3d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723035703204},"e-4245":{"id":"e-4245","name":"","animationType":"custom","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-324","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4246"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".slider-slide","originalId":"6835ac0e320162939cd9c782|c9b65a96-7d27-2342-3363-4ff5ff366e9e","appliesTo":"CLASS"},"targets":[{"selector":".slider-slide","originalId":"6835ac0e320162939cd9c782|c9b65a96-7d27-2342-3363-4ff5ff366e9e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1736775560406},"e-4246":{"id":"e-4246","name":"","animationType":"custom","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-325","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4245"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".slider-slide","originalId":"6835ac0e320162939cd9c782|c9b65a96-7d27-2342-3363-4ff5ff366e9e","appliesTo":"CLASS"},"targets":[{"selector":".slider-slide","originalId":"6835ac0e320162939cd9c782|c9b65a96-7d27-2342-3363-4ff5ff366e9e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1736775560429}},"actionLists":{"a-72":{"id":"a-72","title":"Footer Three Icon Hover","actionItemGroups":[{"actionItems":[{"id":"a-72-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-font","selectorGuids":["b2690dd7-3dbc-d929-dab2-312fffb452a0"]},"globalSwatchId":"@var_variable-0616958a","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-72-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"01677851-319b-c715-16f7-f8375359e3a3"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.3}},{"id":"a-72-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".green-arrow","selectorGuids":["9f737a45-b237-d1b5-9dca-f3e145cd16c7"]},"value":0,"unit":""}},{"id":"a-72-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".white-arrow","selectorGuids":["9f737a45-b237-d1b5-9dca-f3e145cd16cb"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-72-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-font","selectorGuids":["b2690dd7-3dbc-d929-dab2-312fffb452a0"]},"globalSwatchId":"@var_variable-8e8fdb2b-8071-5f68-d504-17e1e5774abf","rValue":201,"bValue":15,"gValue":232,"aValue":1}},{"id":"a-72-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":true,"id":"01677851-319b-c715-16f7-f8375359e3a3"},"globalSwatchId":"@var_variable-8e8fdb2b-8071-5f68-d504-17e1e5774abf","rValue":201,"bValue":15,"gValue":232,"aValue":1}},{"id":"a-72-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".green-arrow","selectorGuids":["9f737a45-b237-d1b5-9dca-f3e145cd16c7"]},"value":1,"unit":""}},{"id":"a-72-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".white-arrow","selectorGuids":["9f737a45-b237-d1b5-9dca-f3e145cd16cb"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1723036009999},"a-73":{"id":"a-73","title":"Footer Three Icon Hover 2","actionItemGroups":[{"actionItems":[{"id":"a-73-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".body-font","selectorGuids":["b2690dd7-3dbc-d929-dab2-312fffb452a0"]},"globalSwatchId":"@var_variable-0616958a","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-73-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":true,"id":"01677851-319b-c715-16f7-f8375359e3a3"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.3}},{"id":"a-73-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".green-arrow","selectorGuids":["9f737a45-b237-d1b5-9dca-f3e145cd16c7"]},"value":0,"unit":""}},{"id":"a-73-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".white-arrow","selectorGuids":["9f737a45-b237-d1b5-9dca-f3e145cd16cb"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1723036009999},"a-74":{"id":"a-74","title":"Footer Three Social Media Hover","actionItemGroups":[{"actionItems":[{"id":"a-74-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".black-image","selectorGuids":["8a679fa4-32c7-444c-333e-f9baa99d8c6c"]},"value":1,"unit":""}},{"id":"a-74-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".footer-three-social-media-item","selectorGuids":["9f737a45-b237-d1b5-9dca-f3e145cd16c8"]},"globalSwatchId":"","rValue":167,"bValue":192,"gValue":172,"aValue":1}},{"id":"a-74-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".green-image","selectorGuids":["9f737a45-b237-d1b5-9dca-f3e145cd16d0"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-74-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".black-image","selectorGuids":["8a679fa4-32c7-444c-333e-f9baa99d8c6c"]},"value":0,"unit":""}},{"id":"a-74-n-5","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".footer-three-social-media-item","selectorGuids":["9f737a45-b237-d1b5-9dca-f3e145cd16c8"]},"globalSwatchId":"@var_variable-8e8fdb2b-8071-5f68-d504-17e1e5774abf","rValue":201,"bValue":15,"gValue":232,"aValue":1}},{"id":"a-74-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".green-image","selectorGuids":["9f737a45-b237-d1b5-9dca-f3e145cd16d0"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1723035474262},"a-75":{"id":"a-75","title":"Footer Three Social Media Hover 2","actionItemGroups":[{"actionItems":[{"id":"a-75-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".black-image","selectorGuids":["8a679fa4-32c7-444c-333e-f9baa99d8c6c"]},"value":1,"unit":""}},{"id":"a-75-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".footer-three-social-media-item","selectorGuids":["9f737a45-b237-d1b5-9dca-f3e145cd16c8"]},"globalSwatchId":"","rValue":167,"bValue":192,"gValue":172,"aValue":1}},{"id":"a-75-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".green-image","selectorGuids":["9f737a45-b237-d1b5-9dca-f3e145cd16d0"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1723035474262},"a-324":{"id":"a-324","title":"Team_Slide [IN]","actionItemGroups":[{"actionItems":[{"id":"a-324-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-one-testimonial-image-main","selectorGuids":["ee23fbda-5900-7472-b489-272644b66fff"]},"zValue":-160,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-324-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".member_detail-row","selectorGuids":["df58dc5c-debc-17aa-8bdf-536c20bade69"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-324-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".member_btn-wrap","selectorGuids":["79eb1ee3-3a4e-fdcb-12d6-ad92ea1fa240"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-324-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-five.responsive-align-center","selectorGuids":["4b8935e3-8d33-28db-f4c8-697a22b9c377","eeb726e9-05be-fd1d-4fd9-7efd0a36c004"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-324-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".home-one-testimonial-image-main","selectorGuids":["ee23fbda-5900-7472-b489-272644b66fff"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-324-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".member_detail-row","selectorGuids":["df58dc5c-debc-17aa-8bdf-536c20bade69"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-324-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".member_btn-wrap","selectorGuids":["79eb1ee3-3a4e-fdcb-12d6-ad92ea1fa240"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-324-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-five.responsive-align-center","selectorGuids":["4b8935e3-8d33-28db-f4c8-697a22b9c377","eeb726e9-05be-fd1d-4fd9-7efd0a36c004"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-324-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".home-one-testimonial-image-main","selectorGuids":["ee23fbda-5900-7472-b489-272644b66fff"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1723055095378},"a-325":{"id":"a-325","title":"Team_Slide [Out]","actionItemGroups":[{"actionItems":[{"id":"a-325-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":100,"target":{"selector":".home-one-testimonial-image-main","selectorGuids":["ee23fbda-5900-7472-b489-272644b66fff"]},"zValue":-160,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-325-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".member_btn-wrap","selectorGuids":["79eb1ee3-3a4e-fdcb-12d6-ad92ea1fa240"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-325-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-five.responsive-align-center","selectorGuids":["4b8935e3-8d33-28db-f4c8-697a22b9c377","eeb726e9-05be-fd1d-4fd9-7efd0a36c004"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-325-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".member_detail-row","selectorGuids":["df58dc5c-debc-17aa-8bdf-536c20bade69"]},"yValue":101,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1723055297577}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FooterThree({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "footer-three")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-three-main-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-three-logo")}
            id={_utils.cx(
              _styles,
              "w-node-_01677851-319b-c715-16f7-f8375359e398-5359e395"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-three-logo-main")}
              tag="div"
            >
              <_Builtin.Link
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  width="165"
                  height="30"
                  loading="lazy"
                  alt="Logo"
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c80d_Logo.svg"
                />
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-three-logo-details")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "chnage-para-color",
                  "change-padding"
                )}
              >
                {
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-three-item")}
            id={_utils.cx(
              _styles,
              "w-node-_01677851-319b-c715-16f7-f8375359e39f-5359e395"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-three-item-heading")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "heading-five", "heading-colour")}
                tag="div"
              >
                {"Quick links"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-three-link-main")}
              data-w-id="01677851-319b-c715-16f7-f8375359e3a3"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "body-font")}
                tag="div"
              >
                {"Home"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-arrow-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "white-arrow")}
                  width="17"
                  height="15"
                  loading="lazy"
                  alt="Footer Arrow"
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c8a0_Footer%20Arrow.svg"
                />
                <_Builtin.Image
                  className={_utils.cx(_styles, "green-arrow")}
                  width="17"
                  height="15"
                  loading="lazy"
                  alt="Green Arrow"
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c98a_Green%20Arrow.svg"
                />
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-three-link-main")}
              data-w-id="01677851-319b-c715-16f7-f8375359e3a9"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "body-font")}
                tag="div"
              >
                {"About"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-arrow-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "white-arrow")}
                  width="17"
                  height="15"
                  loading="lazy"
                  alt="Footer Arrow"
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c8a0_Footer%20Arrow.svg"
                />
                <_Builtin.Image
                  className={_utils.cx(_styles, "green-arrow")}
                  width="17"
                  height="15"
                  loading="lazy"
                  alt="Green Arrow"
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c98a_Green%20Arrow.svg"
                />
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-three-link-main")}
              data-w-id="01677851-319b-c715-16f7-f8375359e3af"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "body-font")}
                tag="div"
              >
                {"Service"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-arrow-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "white-arrow")}
                  width="17"
                  height="15"
                  loading="lazy"
                  alt="Footer Arrow"
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c8a0_Footer%20Arrow.svg"
                />
                <_Builtin.Image
                  className={_utils.cx(_styles, "green-arrow")}
                  width="17"
                  height="15"
                  loading="lazy"
                  alt="Green Arrow"
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c98a_Green%20Arrow.svg"
                />
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "footer-three-link-main",
                "change-border-bottom"
              )}
              data-w-id="01677851-319b-c715-16f7-f8375359e3b5"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "body-font")}
                tag="div"
              >
                {"Blog"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-arrow-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "white-arrow")}
                  width="17"
                  height="15"
                  loading="lazy"
                  alt="Footer Arrow"
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c8a0_Footer%20Arrow.svg"
                />
                <_Builtin.Image
                  className={_utils.cx(_styles, "green-arrow")}
                  width="17"
                  height="15"
                  loading="lazy"
                  alt="Green Arrow"
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c98a_Green%20Arrow.svg"
                />
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-three-support-main")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-three-item-three")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-three-item-left")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-three-item-heading")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "heading-five",
                      "heading-colour"
                    )}
                    tag="div"
                  >
                    {"Support"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "footer-three-item-link-wrapper"
                  )}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "body-font", "hover-text")}
                    button={false}
                    block=""
                    options={{
                      href: "https://teknolab.webflow.io/404",
                    }}
                  >
                    {"404 Not Found"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "body-font", "hover-text")}
                    button={false}
                    block=""
                    options={{
                      href: "https://teknolab.webflow.io/401",
                    }}
                  >
                    {"Password protect"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "body-font", "hover-text")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Pricing"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "body-font", "hover-text")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Contact"}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-three-item-right")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-three-item-heading")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "heading-five",
                      "heading-colour"
                    )}
                    tag="div"
                  >
                    {"Follow us"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "footer-three-social-media-wrapper"
                  )}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer-three-social-media-item"
                    )}
                    data-w-id="01677851-319b-c715-16f7-f8375359e3cf"
                    button={false}
                    block="inline"
                    options={{
                      href: "http://facebook.com",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "black-image")}
                      width="13"
                      height="24"
                      loading="lazy"
                      alt="White Facebook"
                      src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c89f_facebook%20(4).svg"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "green-image")}
                      width="13"
                      height="24"
                      loading="lazy"
                      alt="Green Face book"
                      src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c993_facebook%20(3).svg"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer-three-social-media-item"
                    )}
                    data-w-id="01677851-319b-c715-16f7-f8375359e3d2"
                    button={false}
                    block="inline"
                    options={{
                      href: "http://twitter.com",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "black-image")}
                      width="20"
                      height="19"
                      loading="lazy"
                      alt="Twiiter"
                      src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c9a2_twitter-_5_%201.svg"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "green-image")}
                      width="20"
                      height="19"
                      loading="lazy"
                      alt="Green Twitter"
                      src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c878_twitter-_5_%201%20(1).svg"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer-three-social-media-item"
                    )}
                    data-w-id="01677851-319b-c715-16f7-f8375359e3d5"
                    button={false}
                    block="inline"
                    options={{
                      href: "http://linkedin.com",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "black-image")}
                      width="19"
                      height="20"
                      loading="lazy"
                      alt="Linkedin"
                      src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c8a3_linkedin%20(2).svg"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "green-image")}
                      width="19"
                      height="20"
                      loading="lazy"
                      alt="Green Linkedin"
                      src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c897_linkedin%20(3).svg"
                    />
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "footer-one-bottom-link-new",
            "change-border-top"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-one-bottom-link-left")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "body-font")}
              tag="div"
            >
              {"Designed by : "}
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "change-color-grey",
                  "hover-text"
                )}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Radiant Templates"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-one-bottom-utility")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "body-font", "hover-text")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"License"}
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-one-bottom-utility-line")}
              tag="div"
            />
            <_Builtin.Link
              className={_utils.cx(_styles, "body-font", "hover-text")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Change log"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
