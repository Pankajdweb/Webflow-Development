"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NavOneBackup.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1383":{"id":"e-1383","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1384"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c783|9aced57b-ceb2-c081-26f6-0425d7d27859","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c783|9aced57b-ceb2-c081-26f6-0425d7d27859","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723666934884},"e-1384":{"id":"e-1384","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1383"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c783|9aced57b-ceb2-c081-26f6-0425d7d27859","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c783|9aced57b-ceb2-c081-26f6-0425d7d27859","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723666934884},"e-1385":{"id":"e-1385","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1386"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c783|9aced57b-ceb2-c081-26f6-0425d7d27859","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c783|9aced57b-ceb2-c081-26f6-0425d7d27859","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723666934884},"e-1386":{"id":"e-1386","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1385"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c783|9aced57b-ceb2-c081-26f6-0425d7d27859","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c783|9aced57b-ceb2-c081-26f6-0425d7d27859","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723666934884},"e-1401":{"id":"e-1401","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-50","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-50-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1723667318212},"e-2540":{"id":"e-2540","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-230","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3081"}},"mediaQueries":["main"],"target":{"id":"e498a523-aea8-9390-7abf-7bc6969a2bc5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e498a523-aea8-9390-7abf-7bc6969a2bc5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-2558":{"id":"e-2558","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-244","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3093"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e498a523-aea8-9390-7abf-7bc6969a2c23","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e498a523-aea8-9390-7abf-7bc6969a2c23","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459047174},"e-2559":{"id":"e-2559","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-245","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3092"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e498a523-aea8-9390-7abf-7bc6969a2c23","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e498a523-aea8-9390-7abf-7bc6969a2c23","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459047174},"e-2560":{"id":"e-2560","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2561"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2561":{"id":"e-2561","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2560"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2562":{"id":"e-2562","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2563"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5ed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5ed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2563":{"id":"e-2563","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2562"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5ed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5ed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2564":{"id":"e-2564","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2565"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5fa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5fa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2565":{"id":"e-2565","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2564"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5fa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5fa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2566":{"id":"e-2566","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2567"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda617","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda617","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2567":{"id":"e-2567","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2566"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda617","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda617","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2568":{"id":"e-2568","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2569"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda626","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda626","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2569":{"id":"e-2569","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2568"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda626","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda626","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2570":{"id":"e-2570","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-244","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2571"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda635","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda635","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459276967},"e-2571":{"id":"e-2571","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-245","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2570"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda635","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda635","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459276967},"e-2572":{"id":"e-2572","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2573"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c787|4c7378b0-9f42-36f0-3447-ba6cc3d10328","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c787|4c7378b0-9f42-36f0-3447-ba6cc3d10328","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724909636678},"e-2573":{"id":"e-2573","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2572"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c787|4c7378b0-9f42-36f0-3447-ba6cc3d10328","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c787|4c7378b0-9f42-36f0-3447-ba6cc3d10328","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724909636678},"e-2574":{"id":"e-2574","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2575"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c787|4c7378b0-9f42-36f0-3447-ba6cc3d10328","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c787|4c7378b0-9f42-36f0-3447-ba6cc3d10328","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724909636678},"e-2575":{"id":"e-2575","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2574"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c787|4c7378b0-9f42-36f0-3447-ba6cc3d10328","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c787|4c7378b0-9f42-36f0-3447-ba6cc3d10328","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724909636678},"e-2582":{"id":"e-2582","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2583"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c786|230e1fb6-478e-b776-0765-485b0e63e3c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c786|230e1fb6-478e-b776-0765-485b0e63e3c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724913465193},"e-2583":{"id":"e-2583","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2582"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c786|230e1fb6-478e-b776-0765-485b0e63e3c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c786|230e1fb6-478e-b776-0765-485b0e63e3c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724913465193},"e-2584":{"id":"e-2584","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2585"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c786|230e1fb6-478e-b776-0765-485b0e63e3c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c786|230e1fb6-478e-b776-0765-485b0e63e3c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724913465193},"e-2585":{"id":"e-2585","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2584"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c786|230e1fb6-478e-b776-0765-485b0e63e3c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c786|230e1fb6-478e-b776-0765-485b0e63e3c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724913465193},"e-2714":{"id":"e-2714","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2715"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa43","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa43","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726214622206},"e-2715":{"id":"e-2715","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2714"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa43","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78b|794e739f-e6db-35ce-8272-e7d8c46ffa43","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726214622206},"e-2778":{"id":"e-2778","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2779"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe52","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe52","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2779":{"id":"e-2779","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2778"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe52","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe52","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2780":{"id":"e-2780","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2781"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe52","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe52","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2781":{"id":"e-2781","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2780"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe52","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe52","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2782":{"id":"e-2782","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2783"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2783":{"id":"e-2783","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2782"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2784":{"id":"e-2784","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2785"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2785":{"id":"e-2785","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2784"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fe8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2786":{"id":"e-2786","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2787"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fec2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fec2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2787":{"id":"e-2787","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2786"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fec2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fec2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2788":{"id":"e-2788","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2789"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fec2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fec2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2789":{"id":"e-2789","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2788"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fec2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fec2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2790":{"id":"e-2790","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2791"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fefb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fefb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2791":{"id":"e-2791","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2790"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fefb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fefb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2792":{"id":"e-2792","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2793"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fefb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fefb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2793":{"id":"e-2793","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2792"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fefb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9fefb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2794":{"id":"e-2794","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2795"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2795":{"id":"e-2795","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2794"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2796":{"id":"e-2796","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2797"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2797":{"id":"e-2797","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2796"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2798":{"id":"e-2798","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2799"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2799":{"id":"e-2799","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2798"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2800":{"id":"e-2800","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2801"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2801":{"id":"e-2801","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2800"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78a|e7b5157a-47a8-13df-2664-3b64e3b9ff6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726215698284},"e-2802":{"id":"e-2802","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-287","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2803"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c2010","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c2010","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2803":{"id":"e-2803","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-288","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2802"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c2010","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c2010","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2804":{"id":"e-2804","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-289","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2805"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c2010","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c2010","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2805":{"id":"e-2805","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-290","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2804"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c2010","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c2010","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2806":{"id":"e-2806","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-291","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2807"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f54","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f54","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2807":{"id":"e-2807","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2806"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f54","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f54","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2808":{"id":"e-2808","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-291","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2809"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f61","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f61","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2809":{"id":"e-2809","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2808"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f61","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f61","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2810":{"id":"e-2810","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-291","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2811"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f6e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f6e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2811":{"id":"e-2811","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2810"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f6e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f6e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2812":{"id":"e-2812","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-291","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2813"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2813":{"id":"e-2813","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2812"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2814":{"id":"e-2814","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-291","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2815"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2815":{"id":"e-2815","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2814"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2816":{"id":"e-2816","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-293","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2817"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1fda","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1fda","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2817":{"id":"e-2817","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-294","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2816"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1fda","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1fda","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2839":{"id":"e-2839","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2840"}},"mediaQueries":["main"],"target":{"id":"8bdd7a4d-b669-be42-9b66-1d02752efe76","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8bdd7a4d-b669-be42-9b66-1d02752efe76","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726228817804},"e-2840":{"id":"e-2840","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2839"}},"mediaQueries":["main"],"target":{"id":"8bdd7a4d-b669-be42-9b66-1d02752efe76","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8bdd7a4d-b669-be42-9b66-1d02752efe76","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726228817804},"e-2841":{"id":"e-2841","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2842"}},"mediaQueries":["main"],"target":{"id":"8bdd7a4d-b669-be42-9b66-1d02752efe76","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8bdd7a4d-b669-be42-9b66-1d02752efe76","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726228817804},"e-2842":{"id":"e-2842","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2841"}},"mediaQueries":["main"],"target":{"id":"8bdd7a4d-b669-be42-9b66-1d02752efe76","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8bdd7a4d-b669-be42-9b66-1d02752efe76","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726228817804},"e-3072":{"id":"e-3072","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3073"}},"mediaQueries":["main"],"target":{"selector":".main-button.secondary","originalId":"6835ac0e320162939cd9c782|3cc1272a-2550-c0b7-9986-b2b9189bfc17","appliesTo":"CLASS"},"targets":[{"selector":".main-button.secondary","originalId":"6835ac0e320162939cd9c782|3cc1272a-2550-c0b7-9986-b2b9189bfc17","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732203613740},"e-3073":{"id":"e-3073","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3072"}},"mediaQueries":["main"],"target":{"selector":".main-button.secondary","originalId":"6835ac0e320162939cd9c782|3cc1272a-2550-c0b7-9986-b2b9189bfc17","appliesTo":"CLASS"},"targets":[{"selector":".main-button.secondary","originalId":"6835ac0e320162939cd9c782|3cc1272a-2550-c0b7-9986-b2b9189bfc17","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732203613740},"e-3074":{"id":"e-3074","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3075"}},"mediaQueries":["main"],"target":{"selector":".primary-button","originalId":"6835ac0e320162939cd9c782|3cc1272a-2550-c0b7-9986-b2b9189bfc10","appliesTo":"CLASS"},"targets":[{"selector":".primary-button","originalId":"6835ac0e320162939cd9c782|3cc1272a-2550-c0b7-9986-b2b9189bfc10","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732203613740},"e-3075":{"id":"e-3075","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3074"}},"mediaQueries":["main"],"target":{"selector":".primary-button","originalId":"6835ac0e320162939cd9c782|3cc1272a-2550-c0b7-9986-b2b9189bfc10","appliesTo":"CLASS"},"targets":[{"selector":".primary-button","originalId":"6835ac0e320162939cd9c782|3cc1272a-2550-c0b7-9986-b2b9189bfc10","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732203613740},"e-3080":{"id":"e-3080","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-230","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3081"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b4eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b4eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3082":{"id":"e-3082","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3083"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b4f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b4f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3083":{"id":"e-3083","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3082"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b4f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b4f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3084":{"id":"e-3084","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3085"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b501","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b501","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3085":{"id":"e-3085","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3084"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b501","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b501","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3086":{"id":"e-3086","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3087"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b50e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b50e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3087":{"id":"e-3087","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3086"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b50e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b50e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3088":{"id":"e-3088","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3089"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b533","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b533","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3089":{"id":"e-3089","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3088"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b533","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b533","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3090":{"id":"e-3090","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3091"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b542","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b542","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3091":{"id":"e-3091","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3090"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b542","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b542","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3092":{"id":"e-3092","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-244","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3093"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b551","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b551","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459047174},"e-3093":{"id":"e-3093","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-245","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3092"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b551","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b551","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459047174},"e-3094":{"id":"e-3094","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3095"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b556","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b556","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726228738677},"e-3095":{"id":"e-3095","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3094"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b556","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b556","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726228738677},"e-3096":{"id":"e-3096","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3097"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b556","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b556","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726228738677},"e-3097":{"id":"e-3097","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3096"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b556","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b556","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726228738677},"e-3120":{"id":"e-3120","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3121"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c782|259f6369-f9ae-fa03-053c-5a1a156b3d7f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c782|259f6369-f9ae-fa03-053c-5a1a156b3d7f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732403424150},"e-3121":{"id":"e-3121","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3120"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c782|259f6369-f9ae-fa03-053c-5a1a156b3d7f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c782|259f6369-f9ae-fa03-053c-5a1a156b3d7f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732403424150}},"actionLists":{"a-22":{"id":"a-22","title":"btn fill > outline Text Color Change","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-font.chnage-index","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffc","7a8275c0-8489-7d52-0d71-130c63b43f46"]},"globalSwatchId":"--main-color--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-22-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-font.chnage-index","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffc","7a8275c0-8489-7d52-0d71-130c63b43f46"]},"globalSwatchId":"--olds--button-sec-outline","rValue":20,"bValue":142,"gValue":166,"aValue":1}},{"id":"a-22-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".green-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffd"]},"value":0,"unit":""}},{"id":"a-22-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".black-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ff5"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-22-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".button-font.chnage-index","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffc","7a8275c0-8489-7d52-0d71-130c63b43f46"]},"globalSwatchId":"--main-color--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-22-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-font.chnage-index","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffc","7a8275c0-8489-7d52-0d71-130c63b43f46"]},"globalSwatchId":"--olds--button-sec-outline","rValue":20,"bValue":142,"gValue":166,"aValue":1}},{"id":"a-22-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".black-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ff5"]},"value":0,"unit":""}},{"id":"a-22-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".green-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffd"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1722850280540},"a-23":{"id":"a-23","title":"Button Text Color Change 2","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-font.chnage-index","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffc","7a8275c0-8489-7d52-0d71-130c63b43f46"]},"globalSwatchId":"--main-color--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-23-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".main-button","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f44"]},"globalSwatchId":"--olds--button-sec-outline","rValue":20,"bValue":142,"gValue":166,"aValue":1}},{"id":"a-23-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".green-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffd"]},"value":0,"unit":""}},{"id":"a-23-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".black-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ff5"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1722850280540},"a-20":{"id":"a-20","title":"btn fill > outline Hover Overlay","actionItemGroups":[{"actionItems":[{"id":"a-20-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-20-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":1800,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"xValue":30,"yValue":30,"locked":true}},{"id":"a-20-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"yValue":-50,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1722849926869},"a-21":{"id":"a-21","title":"Button Hover Overlay 2","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"xValue":-50,"yValue":-250,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-21-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCirc","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-21-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCirc","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-21-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutCirc","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1722849926869},"a-50":{"id":"a-50","title":"Sticky Nav Two","continuousParameterGroups":[{"id":"a-50-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-50-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navigation","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f0e"]},"globalSwatchId":"","rValue":13,"bValue":30,"gValue":12,"aValue":0}}]},{"keyframe":1,"actionItems":[{"id":"a-50-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navigation","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f0e"]},"globalSwatchId":"--olds--page-section-color","rValue":13,"bValue":30,"gValue":12,"aValue":1}}]}]}],"createdOn":1722892491291},"a-230":{"id":"a-230","title":"Nav One Line Apearence","actionItemGroups":[{"actionItems":[{"id":"a-230-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-one-bottom-border","selectorGuids":["70da2ffb-eeec-5a67-c063-f27612586e14"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-230-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"widthValue":0.0625,"heightValue":0,"widthUnit":"rem","heightUnit":"%","locked":false}},{"id":"a-230-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-one-logo-line","selectorGuids":["850545db-31c9-f5b6-965a-6cbbdb726a08"]},"widthValue":0.0625,"heightValue":0,"widthUnit":"rem","heightUnit":"%","locked":false}}]},{"actionItems":[{"id":"a-230-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".nav-one-bottom-border","selectorGuids":["70da2ffb-eeec-5a67-c063-f27612586e14"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-230-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":300,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-one-logo-line","selectorGuids":["850545db-31c9-f5b6-965a-6cbbdb726a08"]},"widthValue":0.0625,"heightValue":100,"widthUnit":"rem","heightUnit":"%","locked":false}},{"id":"a-230-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":500,"easing":"ease","duration":500,"target":{},"widthValue":0.0625,"heightValue":100,"widthUnit":"rem","heightUnit":"%","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1724393969805},"a-244":{"id":"a-244","title":"Menu Button Click 5","actionItemGroups":[{"actionItems":[{"id":"a-244-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"rem","zUnit":"PX"}},{"id":"a-244-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"widthValue":0.6875,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-244-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.middile-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbe"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-244-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-244-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-244-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"xValue":null,"yValue":0.5,"xUnit":"px","yUnit":"rem","zUnit":"PX"}},{"id":"a-244-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"widthValue":0,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-244-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-244-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-244-n-10","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.middile-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbe"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1710148462382},"a-245":{"id":"a-245","title":"Menu Button Click 6","actionItemGroups":[{"actionItems":[{"id":"a-245-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"rem","zUnit":"PX"}},{"id":"a-245-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"widthValue":0.6875,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-245-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.middile-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbe"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-245-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-245-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1710148462382},"a-284":{"id":"a-284","title":"Dropdown Open","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"value":0,"unit":""}},{"id":"a-284-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"yValue":1.25,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"value":1,"unit":""}},{"id":"a-284-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1724456388947},"a-285":{"id":"a-285","title":"Dropdown Close","actionItemGroups":[{"actionItems":[{"id":"a-285-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"value":0,"unit":""}},{"id":"a-285-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"yValue":1.25,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1724456388947},"a-26":{"id":"a-26","title":"Sticky Nav","continuousParameterGroups":[{"id":"a-26-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-26-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navigation","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f0e"]},"globalSwatchId":"","rValue":13,"bValue":30,"gValue":12,"aValue":0}}]},{"keyframe":1,"actionItems":[{"id":"a-26-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navigation","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f0e"]},"globalSwatchId":"","rValue":13,"bValue":30,"gValue":12,"aValue":1}}]}]}],"createdOn":1722888774448},"a-287":{"id":"a-287","title":"Button Text Color Change Two 5","actionItemGroups":[{"actionItems":[{"id":"a-287-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-font.chnage-index.button-secondary-text-colour","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffc","7a8275c0-8489-7d52-0d71-130c63b43f46","b1af8e74-a87e-4f16-06aa-930750a4d255"]},"globalSwatchId":"--secondary-temp\\\\<deleted\\\\|variable-66c45237-a636-9709-cf28-bec96131052b\\\\>","rValue":201,"bValue":15,"gValue":232,"aValue":1}},{"id":"a-287-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".main-button.secondary","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f44","b1af8e74-a87e-4f16-06aa-930750a4d253"]},"globalSwatchId":"--secondary-temp\\\\<deleted\\\\|variable-66c45237-a636-9709-cf28-bec96131052b\\\\>","rValue":201,"bValue":15,"gValue":232,"aValue":1}},{"id":"a-287-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".green-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffd"]},"value":1,"unit":""}},{"id":"a-287-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".black-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ff5"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-287-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".button-font.chnage-index.button-secondary-text-colour","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffc","7a8275c0-8489-7d52-0d71-130c63b43f46","b1af8e74-a87e-4f16-06aa-930750a4d255"]},"globalSwatchId":"--olds--primary-temp","rValue":19,"bValue":53,"gValue":32,"aValue":1}},{"id":"a-287-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".main-button.secondary","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f44","b1af8e74-a87e-4f16-06aa-930750a4d253"]},"globalSwatchId":"--olds--primary-temp","rValue":19,"bValue":53,"gValue":32,"aValue":1}},{"id":"a-287-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".green-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffd"]},"value":0,"unit":""}},{"id":"a-287-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".black-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ff5"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1722850778424},"a-288":{"id":"a-288","title":"Button Text Color Change Two 6","actionItemGroups":[{"actionItems":[{"id":"a-288-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-font.chnage-index.button-secondary-text-colour","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffc","7a8275c0-8489-7d52-0d71-130c63b43f46","b1af8e74-a87e-4f16-06aa-930750a4d255"]},"globalSwatchId":"--secondary-temp\\\\<deleted\\\\|variable-66c45237-a636-9709-cf28-bec96131052b\\\\>","rValue":201,"bValue":15,"gValue":232,"aValue":1}},{"id":"a-288-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".main-button.secondary","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f44","b1af8e74-a87e-4f16-06aa-930750a4d253"]},"globalSwatchId":"--secondary-temp\\\\<deleted\\\\|variable-66c45237-a636-9709-cf28-bec96131052b\\\\>","rValue":201,"bValue":15,"gValue":232,"aValue":1}},{"id":"a-288-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".green-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffd"]},"value":1,"unit":""}},{"id":"a-288-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".black-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ff5"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1722850778424},"a-289":{"id":"a-289","title":"Button Hover Overlay 21","actionItemGroups":[{"actionItems":[{"id":"a-289-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-289-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":1800,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"xValue":30,"yValue":30,"locked":true}},{"id":"a-289-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"yValue":-50,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1722849926869},"a-290":{"id":"a-290","title":"Button Hover Overlay 22","actionItemGroups":[{"actionItems":[{"id":"a-290-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"xValue":-50,"yValue":-250,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-290-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outCirc","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-290-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutCirc","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-290-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"inOutCirc","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".button-overlay","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f45"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1722849926869},"a-291":{"id":"a-291","title":"Dropdown Open 2","actionItemGroups":[{"actionItems":[{"id":"a-291-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"value":0,"unit":""}},{"id":"a-291-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"yValue":1.25,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-291-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"value":1,"unit":""}},{"id":"a-291-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1724456388947},"a-292":{"id":"a-292","title":"Dropdown Close 2","actionItemGroups":[{"actionItems":[{"id":"a-292-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"value":0,"unit":""}},{"id":"a-292-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"yValue":1.25,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1724456388947},"a-293":{"id":"a-293","title":"Menu Button Click 7","actionItemGroups":[{"actionItems":[{"id":"a-293-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"rem","zUnit":"PX"}},{"id":"a-293-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"widthValue":0.6875,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-293-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.middile-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbe"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-293-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-293-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-293-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"xValue":null,"yValue":0.5,"xUnit":"px","yUnit":"rem","zUnit":"PX"}},{"id":"a-293-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"widthValue":0,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-293-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-293-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-293-n-10","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.middile-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbe"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1710148462382},"a-294":{"id":"a-294","title":"Menu Button Click 8","actionItemGroups":[{"actionItems":[{"id":"a-294-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"rem","zUnit":"PX"}},{"id":"a-294-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"widthValue":0.6875,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-294-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.middile-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbe"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-294-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-294-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1710148462382},"a-24":{"id":"a-24","title":"btn Text Color Change Two","actionItemGroups":[{"actionItems":[{"id":"a-24-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-font.chnage-index","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffc","7a8275c0-8489-7d52-0d71-130c63b43f46"]},"globalSwatchId":"--main-color--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-24-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".main-button.secondary","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f44","b1af8e74-a87e-4f16-06aa-930750a4d253"]},"globalSwatchId":"--olds--button-sec-outline","rValue":20,"bValue":142,"gValue":166,"aValue":1}},{"id":"a-24-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".green-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffd"]},"value":1,"unit":""}},{"id":"a-24-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".black-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ff5"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-24-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".button-font.chnage-index","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffc","7a8275c0-8489-7d52-0d71-130c63b43f46"]},"globalSwatchId":"--main-color--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-24-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".main-button.secondary","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f44","b1af8e74-a87e-4f16-06aa-930750a4d253"]},"globalSwatchId":"--olds--button-sec-outline","rValue":20,"bValue":142,"gValue":166,"aValue":1}},{"id":"a-24-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".green-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffd"]},"value":0,"unit":""}},{"id":"a-24-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".black-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ff5"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1722850778424},"a-25":{"id":"a-25","title":"Button Text Color Change Two 2","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-font.chnage-index.button-secondary-text-colour","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffc","7a8275c0-8489-7d52-0d71-130c63b43f46","b1af8e74-a87e-4f16-06aa-930750a4d255"]},"globalSwatchId":"--secondary-temp\\\\<deleted\\\\|variable-66c45237-a636-9709-cf28-bec96131052b\\\\>","rValue":201,"bValue":15,"gValue":232,"aValue":1}},{"id":"a-25-n-2","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".main-button.secondary","selectorGuids":["7a8275c0-8489-7d52-0d71-130c63b43f44","b1af8e74-a87e-4f16-06aa-930750a4d253"]},"globalSwatchId":"--secondary-temp\\\\<deleted\\\\|variable-66c45237-a636-9709-cf28-bec96131052b\\\\>","rValue":201,"bValue":15,"gValue":232,"aValue":1}},{"id":"a-25-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".green-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ffd"]},"value":1,"unit":""}},{"id":"a-25-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".black-button-arrow","selectorGuids":["b8ac6f02-06dc-1c5b-c19e-08e57a022ff5"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1722850778424}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavOneBackup({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navigation")}
      data-w-id="81f52cdf-a699-dfa6-c6ed-0da34a56b4eb"
      grid={{
        type: "section",
      }}
      tag="header"
    >
      <_Builtin.Block tag="div">
        <_Builtin.NavbarWrapper
          className={_utils.cx(_styles, "navbar", "change-style")}
          tag="div"
          config={{
            easing: "ease",
            easing2: "ease",
            duration: 400,
            docHeight: false,
            noScroll: false,
            animation: "default",
            collapse: "medium",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar-wrapper", "chnage-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "nav-one-logo-wrapper",
                "change-style"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_81f52cdf-a699-dfa6-c6ed-0da34a56b4ef-4a56b4eb"
              )}
              tag="div"
            >
              <_Builtin.NavbarBrand
                className={_utils.cx(_styles, "logo")}
                id={_utils.cx(
                  _styles,
                  "w-node-_81f52cdf-a699-dfa6-c6ed-0da34a56b4f0-4a56b4eb"
                )}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "header-two-logo")}
                  width="163"
                  height="29"
                  loading="auto"
                  alt="Logo"
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c80d_Logo.svg"
                />
              </_Builtin.NavbarBrand>
              <_Builtin.Block
                className={_utils.cx(_styles, "nav-one-logo-line")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.NavbarMenu
              className={_utils.cx(
                _styles,
                "responsive-burger-menu-navbar",
                "border-radius-ten"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_81f52cdf-a699-dfa6-c6ed-0da34a56b4f3-4a56b4eb"
              )}
              tag="nav"
              role="navigation"
            >
              <_Builtin.DropdownWrapper
                data-w-id="81f52cdf-a699-dfa6-c6ed-0da34a56b4f4"
                tag="div"
                delay={0}
                hover={true}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(
                    _styles,
                    "dropdown-toggle",
                    "ecommerse-size"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "menu-font")}
                    tag="div"
                  >
                    {"home"}
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "nav-arrow")}
                    width="7"
                    height="6"
                    loading="lazy"
                    alt="Nav Arrow"
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c82b_Nav%20Arrow%20(2).svg"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "black-nav-arrow")}
                    width="7"
                    height="6"
                    loading="lazy"
                    alt="Black Nav Arrow"
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c814_Black%20Nav%20Arrow.svg"
                  />
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(
                    _styles,
                    "menu-font",
                    "change-submenu",
                    "box-shadow",
                    "border-radius-ten"
                  )}
                  tag="nav"
                >
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Home One"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Home Two"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Home Three"}
                  </_Builtin.DropdownLink>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.DropdownWrapper
                data-w-id="81f52cdf-a699-dfa6-c6ed-0da34a56b501"
                tag="div"
                delay={0}
                hover={true}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(
                    _styles,
                    "dropdown-toggle",
                    "ecommerse-size"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "menu-font")}
                    tag="div"
                  >
                    {"About"}
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "nav-arrow")}
                    width="7"
                    height="6"
                    loading="lazy"
                    alt="Nav Arrow"
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c82b_Nav%20Arrow%20(2).svg"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "black-nav-arrow")}
                    width="7"
                    height="6"
                    loading="lazy"
                    alt="Black Nav Arrow"
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c814_Black%20Nav%20Arrow.svg"
                  />
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(
                    _styles,
                    "menu-font",
                    "change-submenu",
                    "box-shadow",
                    "border-radius-ten"
                  )}
                  tag="nav"
                >
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"About One"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"About Two"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"About Three"}
                  </_Builtin.DropdownLink>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.DropdownWrapper
                data-w-id="81f52cdf-a699-dfa6-c6ed-0da34a56b50e"
                tag="div"
                delay={0}
                hover={true}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(
                    _styles,
                    "dropdown-toggle",
                    "ecommerse-size"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "menu-font")}
                    tag="div"
                  >
                    {"pages"}
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "nav-arrow")}
                    width="7"
                    height="6"
                    loading="lazy"
                    alt="Nav Arrow"
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c82b_Nav%20Arrow%20(2).svg"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "black-nav-arrow")}
                    width="7"
                    height="6"
                    loading="lazy"
                    alt="Black Nav Arrow"
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c814_Black%20Nav%20Arrow.svg"
                  />
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(
                    _styles,
                    "menu-font",
                    "change-submenu",
                    "box-shadow",
                    "border-radius-ten"
                  )}
                  tag="nav"
                >
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Service One"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Service Two"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Service Three"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Service Details"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Team One"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Team Two"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Team Details"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Pricing One"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Pricing Two"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Blog One"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Blog Two"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Blog Three "}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Blog Details"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"404 Not Found"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Password Protect"}
                  </_Builtin.DropdownLink>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.DropdownWrapper
                data-w-id="81f52cdf-a699-dfa6-c6ed-0da34a56b533"
                tag="div"
                delay={0}
                hover={true}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(
                    _styles,
                    "dropdown-toggle",
                    "ecommerse-size"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "menu-font")}
                    tag="div"
                  >
                    {"Shop"}
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "nav-arrow")}
                    width="7"
                    height="6"
                    loading="lazy"
                    alt="Nav Arrow"
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c82b_Nav%20Arrow%20(2).svg"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "black-nav-arrow")}
                    width="7"
                    height="6"
                    loading="lazy"
                    alt="Black Nav Arrow"
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c814_Black%20Nav%20Arrow.svg"
                  />
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(
                    _styles,
                    "menu-font",
                    "change-submenu",
                    "box-shadow",
                    "border-radius-ten"
                  )}
                  tag="nav"
                >
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Pricing Details"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Checkout"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Paypal Checkout"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Order Confirmation"}
                  </_Builtin.DropdownLink>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.DropdownWrapper
                data-w-id="81f52cdf-a699-dfa6-c6ed-0da34a56b542"
                tag="div"
                delay={0}
                hover={true}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(
                    _styles,
                    "dropdown-toggle",
                    "ecommerse-size"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "menu-font")}
                    tag="div"
                  >
                    {"contact"}
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "nav-arrow")}
                    width="7"
                    height="6"
                    loading="lazy"
                    alt="Nav Arrow"
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c82b_Nav%20Arrow%20(2).svg"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "black-nav-arrow")}
                    width="7"
                    height="6"
                    loading="lazy"
                    alt="Black Nav Arrow"
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c814_Black%20Nav%20Arrow.svg"
                  />
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(
                    _styles,
                    "menu-font",
                    "change-submenu",
                    "box-shadow",
                    "border-radius-ten"
                  )}
                  tag="nav"
                >
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Contact One"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Contact Two"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "header-menu-item",
                      "sub-menu",
                      "change-line-height"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Contact Three"}
                  </_Builtin.DropdownLink>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
            </_Builtin.NavbarMenu>
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "responsive-menu-button")}
              id={_utils.cx(
                _styles,
                "w-node-_81f52cdf-a699-dfa6-c6ed-0da34a56b54f-4a56b4eb"
              )}
              tag="div"
            >
              <_Builtin.Block tag="div">
                <_Builtin.NavbarButton
                  className={_utils.cx(_styles, "menu-button-new")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_81f52cdf-a699-dfa6-c6ed-0da34a56b551-4a56b4eb"
                  )}
                  data-w-id="81f52cdf-a699-dfa6-c6ed-0da34a56b551"
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "menu-button-line",
                      "top-line"
                    )}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "menu-button-line",
                      "middile-line"
                    )}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "menu-button-line",
                      "bottom-line"
                    )}
                    tag="div"
                  />
                </_Builtin.NavbarButton>
              </_Builtin.Block>
            </_Builtin.NavbarButton>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "home-one-button-main-wrapper",
                "responsive-display-off",
                "chnage-boder-right",
                "change-positopn"
              )}
              id={_utils.cx(
                _styles,
                "w-node-_81f52cdf-a699-dfa6-c6ed-0da34a56b555-4a56b4eb"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "main-button", "secondary")}
                data-w-id="81f52cdf-a699-dfa6-c6ed-0da34a56b556"
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "button-font",
                    "chnage-index",
                    "button-secondary-text-colour"
                  )}
                  tag="div"
                >
                  {"Contact us"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "button-arrow-wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(
                      _styles,
                      "black-button-arrow",
                      "opacity-off"
                    )}
                    width="14"
                    height="11"
                    loading="lazy"
                    alt="Black Arrow"
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c7c1_Black%20Button%20Arrow.svg"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "green-button-arrow")}
                    width="13"
                    height="11"
                    loading="lazy"
                    alt="Green Circle"
                    src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c7d4_Green%20Button%20Arrow.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "button-overlay",
                    "chnage-color-green"
                  )}
                  tag="div"
                />
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "nav-one-logo-line",
                  "change-position"
                )}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.NavbarWrapper>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-one-bottom-border")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
