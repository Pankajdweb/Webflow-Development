"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalButton } from "./GlobalButton";
import * as _utils from "./utils";
import _styles from "./GlobalNavbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1401":{"id":"e-1401","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-50","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-50-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1723667318212},"e-2540":{"id":"e-2540","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-230","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3081"}},"mediaQueries":["main"],"target":{"id":"e498a523-aea8-9390-7abf-7bc6969a2bc5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e498a523-aea8-9390-7abf-7bc6969a2bc5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-2542":{"id":"e-2542","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-318","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3083"}},"mediaQueries":["main"],"target":{"selector":".navbar_dropdown","originalId":"e498a523-aea8-9390-7abf-7bc6969a2bce","appliesTo":"CLASS"},"targets":[{"selector":".navbar_dropdown","originalId":"e498a523-aea8-9390-7abf-7bc6969a2bce","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-2543":{"id":"e-2543","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-319","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3082"}},"mediaQueries":["main"],"target":{"selector":".navbar_dropdown","originalId":"e498a523-aea8-9390-7abf-7bc6969a2bce","appliesTo":"CLASS"},"targets":[{"selector":".navbar_dropdown","originalId":"e498a523-aea8-9390-7abf-7bc6969a2bce","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-2558":{"id":"e-2558","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-244","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3093"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e498a523-aea8-9390-7abf-7bc6969a2c23","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e498a523-aea8-9390-7abf-7bc6969a2c23","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459047174},"e-2559":{"id":"e-2559","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-245","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3092"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e498a523-aea8-9390-7abf-7bc6969a2c23","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e498a523-aea8-9390-7abf-7bc6969a2c23","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459047174},"e-2560":{"id":"e-2560","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2561"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2561":{"id":"e-2561","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2560"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2562":{"id":"e-2562","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2563"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5ed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5ed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2563":{"id":"e-2563","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2562"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5ed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5ed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2564":{"id":"e-2564","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2565"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5fa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5fa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2565":{"id":"e-2565","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2564"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5fa","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda5fa","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2566":{"id":"e-2566","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2567"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda617","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda617","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2567":{"id":"e-2567","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2566"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda617","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda617","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2568":{"id":"e-2568","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2569"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda626","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda626","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2569":{"id":"e-2569","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2568"}},"mediaQueries":["main"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda626","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda626","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459174233},"e-2570":{"id":"e-2570","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-244","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2571"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda635","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda635","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459276967},"e-2571":{"id":"e-2571","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-245","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2570"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda635","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cca2d575-ce9f-1b1b-e6c3-2f6a34fda635","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459276967},"e-2806":{"id":"e-2806","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-291","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2807"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f54","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f54","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2807":{"id":"e-2807","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2806"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f54","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f54","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2808":{"id":"e-2808","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-291","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2809"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f61","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f61","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2809":{"id":"e-2809","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2808"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f61","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f61","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2810":{"id":"e-2810","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-291","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2811"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f6e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f6e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2811":{"id":"e-2811","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2810"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f6e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f6e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2812":{"id":"e-2812","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-291","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2813"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2813":{"id":"e-2813","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2812"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2814":{"id":"e-2814","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-291","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2815"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2815":{"id":"e-2815","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2814"}},"mediaQueries":["main"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1f9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2816":{"id":"e-2816","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-293","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2817"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1fda","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1fda","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-2817":{"id":"e-2817","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-294","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2816"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a2b5242d-2546-999c-c934-d4d02a5c1fda","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2b5242d-2546-999c-c934-d4d02a5c1fda","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726216663884},"e-3080":{"id":"e-3080","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-230","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3081"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b4eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b4eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3082":{"id":"e-3082","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3083"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b4f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b4f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3083":{"id":"e-3083","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3082"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b4f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b4f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3084":{"id":"e-3084","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3085"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b501","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b501","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3085":{"id":"e-3085","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3084"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b501","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b501","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3086":{"id":"e-3086","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3087"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b50e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b50e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3087":{"id":"e-3087","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3086"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b50e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b50e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3088":{"id":"e-3088","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3089"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b533","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b533","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3089":{"id":"e-3089","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3088"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b533","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b533","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3090":{"id":"e-3090","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3091"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b542","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b542","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3091":{"id":"e-3091","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-285","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3090"}},"mediaQueries":["main"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b542","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b542","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724458612416},"e-3092":{"id":"e-3092","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-244","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3093"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b551","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b551","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459047174},"e-3093":{"id":"e-3093","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-245","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3092"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b551","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f52cdf-a699-dfa6-c6ed-0da34a56b551","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1724459047174}},"actionLists":{"a-50":{"id":"a-50","title":"Sticky Nav Two","continuousParameterGroups":[{"id":"a-50-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-50-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navigation","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f0e"]},"globalSwatchId":"","rValue":13,"bValue":30,"gValue":12,"aValue":0}}]},{"keyframe":1,"actionItems":[{"id":"a-50-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navigation","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f0e"]},"globalSwatchId":"--olds--page-section-color","rValue":13,"bValue":30,"gValue":12,"aValue":1}}]}]}],"createdOn":1722892491291},"a-230":{"id":"a-230","title":"Nav One Line Apearence","actionItemGroups":[{"actionItems":[{"id":"a-230-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-one-bottom-border","selectorGuids":["70da2ffb-eeec-5a67-c063-f27612586e14"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-230-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"widthValue":0.0625,"heightValue":0,"widthUnit":"rem","heightUnit":"%","locked":false}},{"id":"a-230-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-one-logo-line","selectorGuids":["850545db-31c9-f5b6-965a-6cbbdb726a08"]},"widthValue":0.0625,"heightValue":0,"widthUnit":"rem","heightUnit":"%","locked":false}}]},{"actionItems":[{"id":"a-230-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".nav-one-bottom-border","selectorGuids":["70da2ffb-eeec-5a67-c063-f27612586e14"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-230-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":300,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-one-logo-line","selectorGuids":["850545db-31c9-f5b6-965a-6cbbdb726a08"]},"widthValue":0.0625,"heightValue":100,"widthUnit":"rem","heightUnit":"%","locked":false}},{"id":"a-230-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":500,"easing":"ease","duration":500,"target":{},"widthValue":0.0625,"heightValue":100,"widthUnit":"rem","heightUnit":"%","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1724393969805},"a-318":{"id":"a-318","title":"Nav Dropdown [Open]","actionItemGroups":[{"actionItems":[{"id":"a-318-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_menu-list","selectorGuids":["406e51a0-70a6-4a0d-8f7e-f6ab12846bb3"]},"value":0,"unit":""}},{"id":"a-318-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_menu-list","selectorGuids":["406e51a0-70a6-4a0d-8f7e-f6ab12846bb3"]},"yValue":1.25,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-318-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_menu-list","selectorGuids":["406e51a0-70a6-4a0d-8f7e-f6ab12846bb3"]},"value":1,"unit":""}},{"id":"a-318-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_menu-list","selectorGuids":["406e51a0-70a6-4a0d-8f7e-f6ab12846bb3"]},"yValue":-1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1724456388947},"a-319":{"id":"a-319","title":"Nav Dropdown [ Close ]","actionItemGroups":[{"actionItems":[{"id":"a-319-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_menu-list","selectorGuids":["406e51a0-70a6-4a0d-8f7e-f6ab12846bb3"]},"value":0,"unit":""}},{"id":"a-319-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown_menu-list","selectorGuids":["406e51a0-70a6-4a0d-8f7e-f6ab12846bb3"]},"yValue":1.25,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1724456388947},"a-244":{"id":"a-244","title":"Menu Button Click 5","actionItemGroups":[{"actionItems":[{"id":"a-244-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"rem","zUnit":"PX"}},{"id":"a-244-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"widthValue":0.6875,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-244-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.middile-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbe"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-244-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-244-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-244-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"xValue":null,"yValue":0.5,"xUnit":"px","yUnit":"rem","zUnit":"PX"}},{"id":"a-244-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"widthValue":0,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-244-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-244-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-244-n-10","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.middile-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbe"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1710148462382},"a-245":{"id":"a-245","title":"Menu Button Click 6","actionItemGroups":[{"actionItems":[{"id":"a-245-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"rem","zUnit":"PX"}},{"id":"a-245-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"widthValue":0.6875,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-245-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.middile-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbe"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-245-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-245-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1710148462382},"a-284":{"id":"a-284","title":"Dropdown Open","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"value":0,"unit":""}},{"id":"a-284-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"yValue":1.25,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"value":1,"unit":""}},{"id":"a-284-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1724456388947},"a-285":{"id":"a-285","title":"Dropdown Close","actionItemGroups":[{"actionItems":[{"id":"a-285-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"value":0,"unit":""}},{"id":"a-285-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"yValue":1.25,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1724456388947},"a-26":{"id":"a-26","title":"Sticky Nav","continuousParameterGroups":[{"id":"a-26-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-26-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navigation","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f0e"]},"globalSwatchId":"","rValue":13,"bValue":30,"gValue":12,"aValue":0}}]},{"keyframe":1,"actionItems":[{"id":"a-26-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".navigation","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f0e"]},"globalSwatchId":"","rValue":13,"bValue":30,"gValue":12,"aValue":1}}]}]}],"createdOn":1722888774448},"a-291":{"id":"a-291","title":"Dropdown Open 2","actionItemGroups":[{"actionItems":[{"id":"a-291-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"value":0,"unit":""}},{"id":"a-291-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"yValue":1.25,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-291-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"value":1,"unit":""}},{"id":"a-291-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1724456388947},"a-292":{"id":"a-292","title":"Dropdown Close 2","actionItemGroups":[{"actionItems":[{"id":"a-292-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"value":0,"unit":""}},{"id":"a-292-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-font.change-submenu.box-shadow.border-radius-ten","selectorGuids":["ccb3b3b4-77b4-0f1e-08ef-7baa93896f15","ccb3b3b4-77b4-0f1e-08ef-7baa93896f18","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1d","ccb3b3b4-77b4-0f1e-08ef-7baa93896f1f"]},"yValue":1.25,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1724456388947},"a-293":{"id":"a-293","title":"Menu Button Click 7","actionItemGroups":[{"actionItems":[{"id":"a-293-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"rem","zUnit":"PX"}},{"id":"a-293-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"widthValue":0.6875,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-293-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.middile-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbe"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-293-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-293-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-293-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"xValue":null,"yValue":0.5,"xUnit":"px","yUnit":"rem","zUnit":"PX"}},{"id":"a-293-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"widthValue":0,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-293-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-293-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-293-n-10","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.middile-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbe"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1710148462382},"a-294":{"id":"a-294","title":"Menu Button Click 8","actionItemGroups":[{"actionItems":[{"id":"a-294-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"rem","zUnit":"PX"}},{"id":"a-294-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"widthValue":0.6875,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-294-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.middile-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbe"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-294-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.bottom-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbf"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-294-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-button-line.top-line","selectorGuids":["a827458a-390a-ba9d-f7b6-dfcbc1be9fbc","a827458a-390a-ba9d-f7b6-dfcbc1be9fbd"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1710148462382}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function GlobalNavbar({
  as: _Component = _Builtin.Section,
  variant = "Base",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Base: "",
    "With-bg": "w-variant-9e6cfc6e-c604-81c9-55bc-4ca50afdae4d",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "navigation", _activeStyleVariant)}
      data-w-id="e498a523-aea8-9390-7abf-7bc6969a2bc5"
      grid={{
        type: "section",
      }}
      tag="header"
    >
      <_Builtin.Block tag="div">
        <_Builtin.NavbarWrapper
          className={_utils.cx(_styles, "global_navbar", _activeStyleVariant)}
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
            className={_utils.cx(
              _styles,
              "navbar-wrapper",
              "chnage-grid",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "navbar_logo-holder",
                _activeStyleVariant
              )}
              id={_utils.cx(
                _styles,
                "w-node-e498a523-aea8-9390-7abf-7bc6969a2bc9-969a2bc5"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "navbar_logowrap",
                  _activeStyleVariant
                )}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "navbar_logo",
                    _activeStyleVariant
                  )}
                  width="189"
                  height="29"
                  loading="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cbe1_Dimensions.svg"
                />
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.NavbarMenu
              className={_utils.cx(
                _styles,
                "responsive-burger-menu-navbar",
                "border-radius-ten",
                _activeStyleVariant
              )}
              id={_utils.cx(
                _styles,
                "w-node-e498a523-aea8-9390-7abf-7bc6969a2bcd-969a2bc5"
              )}
              tag="nav"
              role="navigation"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "menu_wrapper",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <_Builtin.DropdownWrapper
                  className={_utils.cx(
                    _styles,
                    "navbar_dropdown",
                    _activeStyleVariant
                  )}
                  tag="div"
                  delay={0}
                  hover={true}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(
                      _styles,
                      "nav_dropdown-toggle",
                      _activeStyleVariant
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "menu-font",
                        _activeStyleVariant
                      )}
                      tag="div"
                    >
                      {"R&Dservices"}
                    </_Builtin.Block>
                    <_Builtin.Image
                      className={_utils.cx(
                        _styles,
                        "nav-arrow",
                        _activeStyleVariant
                      )}
                      width="7"
                      height="6"
                      loading="lazy"
                      alt="Nav Arrow"
                      src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c82b_Nav%20Arrow%20(2).svg"
                    />
                    <_Builtin.Image
                      className={_utils.cx(
                        _styles,
                        "black-nav-arrow",
                        _activeStyleVariant
                      )}
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
                      "dropdown_menu-list",
                      _activeStyleVariant
                    )}
                    tag="nav"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"R&D tax credits"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Grants"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Patent box"}
                    </_Builtin.DropdownLink>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
                <_Builtin.DropdownWrapper
                  className={_utils.cx(
                    _styles,
                    "navbar_dropdown",
                    _activeStyleVariant
                  )}
                  tag="div"
                  delay={0}
                  hover={true}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(
                      _styles,
                      "nav_dropdown-toggle",
                      _activeStyleVariant
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "menu-font",
                        _activeStyleVariant
                      )}
                      tag="div"
                    >
                      {"R&D explained"}
                    </_Builtin.Block>
                    <_Builtin.Image
                      className={_utils.cx(
                        _styles,
                        "nav-arrow",
                        _activeStyleVariant
                      )}
                      width="7"
                      height="6"
                      loading="lazy"
                      alt="Nav Arrow"
                      src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c82b_Nav%20Arrow%20(2).svg"
                    />
                    <_Builtin.Image
                      className={_utils.cx(
                        _styles,
                        "black-nav-arrow",
                        _activeStyleVariant
                      )}
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
                      "dropdown_menu-list",
                      _activeStyleVariant
                    )}
                    tag="nav"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"What is R&D"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"R&D tax credits explained"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        "hide",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"RDEC & SME Accounting"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"RDEC scheme explained"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        "hide",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Eligible Costs"}
                    </_Builtin.DropdownLink>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
                <_Builtin.DropdownWrapper
                  className={_utils.cx(
                    _styles,
                    "navbar_dropdown",
                    _activeStyleVariant
                  )}
                  tag="div"
                  delay={0}
                  hover={true}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(
                      _styles,
                      "nav_dropdown-toggle",
                      "padding-left-0",
                      _activeStyleVariant
                    )}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "menu-font",
                        "padding-left",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Who we are"}
                    </_Builtin.Link>
                    <_Builtin.Image
                      className={_utils.cx(
                        _styles,
                        "nav-arrow",
                        _activeStyleVariant
                      )}
                      width="7"
                      height="6"
                      loading="lazy"
                      alt="Nav Arrow"
                      src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c82b_Nav%20Arrow%20(2).svg"
                    />
                    <_Builtin.Image
                      className={_utils.cx(
                        _styles,
                        "black-nav-arrow",
                        _activeStyleVariant
                      )}
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
                      "dropdown_menu-list",
                      _activeStyleVariant
                    )}
                    tag="nav"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"About us"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Meet our team"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Contact us"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Client stories"}
                    </_Builtin.DropdownLink>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
                <_Builtin.DropdownWrapper
                  className={_utils.cx(
                    _styles,
                    "navbar_dropdown",
                    _activeStyleVariant
                  )}
                  tag="div"
                  delay={0}
                  hover={true}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(
                      _styles,
                      "nav_dropdown-toggle",
                      _activeStyleVariant
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "menu-font",
                        _activeStyleVariant
                      )}
                      tag="div"
                    >
                      {"Resources"}
                    </_Builtin.Block>
                    <_Builtin.Image
                      className={_utils.cx(
                        _styles,
                        "nav-arrow",
                        _activeStyleVariant
                      )}
                      width="7"
                      height="6"
                      loading="lazy"
                      alt="Nav Arrow"
                      src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9c82b_Nav%20Arrow%20(2).svg"
                    />
                    <_Builtin.Image
                      className={_utils.cx(
                        _styles,
                        "black-nav-arrow",
                        _activeStyleVariant
                      )}
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
                      "dropdown_menu-list",
                      _activeStyleVariant
                    )}
                    tag="nav"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"News and insights"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(
                        _styles,
                        "dropdown_menu-link",
                        "hide",
                        _activeStyleVariant
                      )}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Sector guides"}
                    </_Builtin.DropdownLink>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.Block>
            </_Builtin.NavbarMenu>
            <_Builtin.NavbarButton
              className={_utils.cx(
                _styles,
                "responsive-menu-button",
                _activeStyleVariant
              )}
              id={_utils.cx(
                _styles,
                "w-node-e498a523-aea8-9390-7abf-7bc6969a2c21-969a2bc5"
              )}
              tag="div"
            >
              <_Builtin.Block tag="div">
                <_Builtin.NavbarButton
                  className={_utils.cx(
                    _styles,
                    "menu-button-new",
                    _activeStyleVariant
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-e498a523-aea8-9390-7abf-7bc6969a2c23-969a2bc5"
                  )}
                  data-w-id="e498a523-aea8-9390-7abf-7bc6969a2c23"
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "menu-button-line",
                      "top-line",
                      _activeStyleVariant
                    )}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "menu-button-line",
                      "middile-line",
                      _activeStyleVariant
                    )}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "menu-button-line",
                      "bottom-line",
                      _activeStyleVariant
                    )}
                    tag="div"
                  />
                </_Builtin.NavbarButton>
              </_Builtin.Block>
            </_Builtin.NavbarButton>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "nav_button-wrap",
                _activeStyleVariant
              )}
              id={_utils.cx(
                _styles,
                "w-node-_5a90ab11-2b73-7427-2225-7472f654188f-969a2bc5"
              )}
              tag="div"
            >
              <GlobalButton
                buttonText="Check your eligibility"
                variant="Secondary Small"
                buttonLink={{
                  href: "https://eligibility.kene.partners/p/rd-eligibility-scorecard-ws?utm_source=Kene+Partners&utm_medium=Website&utm_campaign=eligibility+scorecard",
                  target: "_blank",
                }}
              />
              <GlobalButton
                buttonText="Book a consultation"
                variant="Default Small"
                buttonLink={{
                  href: "#",
                }}
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.NavbarWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
