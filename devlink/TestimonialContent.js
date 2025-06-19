"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { TestimonialCard } from "./TestimonialCard";
import * as _utils from "./utils";
import _styles from "./TestimonialContent.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2949":{"id":"e-2949","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-2950"}},"mediaQueries":["main"],"target":{"id":"1b7a1198-c0d6-de9e-8c28-edd2920a80ad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1b7a1198-c0d6-de9e-8c28-edd2920a80ad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1732203456553},"e-3598":{"id":"e-3598","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3599"}},"mediaQueries":["main"],"target":{"id":"1b7a1198-c0d6-de9e-8c28-edd2920a80cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1b7a1198-c0d6-de9e-8c28-edd2920a80cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734329104345},"e-3599":{"id":"e-3599","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-71","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3598"}},"mediaQueries":["main"],"target":{"id":"1b7a1198-c0d6-de9e-8c28-edd2920a80cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1b7a1198-c0d6-de9e-8c28-edd2920a80cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734329104345},"e-3600":{"id":"e-3600","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-88","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3601"}},"mediaQueries":["main"],"target":{"id":"1b7a1198-c0d6-de9e-8c28-edd2920a80cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1b7a1198-c0d6-de9e-8c28-edd2920a80cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1734329104345},"e-3602":{"id":"e-3602","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-326","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3603"}},"mediaQueries":["main"],"target":{"selector":".testimonial-card","originalId":"1b7a1198-c0d6-de9e-8c28-edd2920a80c0","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-card","originalId":"1b7a1198-c0d6-de9e-8c28-edd2920a80c0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734329105053},"e-3603":{"id":"e-3603","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-327","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3602"}},"mediaQueries":["main"],"target":{"selector":".testimonial-card","originalId":"1b7a1198-c0d6-de9e-8c28-edd2920a80c0","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-card","originalId":"1b7a1198-c0d6-de9e-8c28-edd2920a80c0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734329105053},"e-3606":{"id":"e-3606","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-3607"}},"mediaQueries":["main"],"target":{"id":"1b7a1198-c0d6-de9e-8c28-edd2920a80b0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1b7a1198-c0d6-de9e-8c28-edd2920a80b0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1734329892600},"e-4304":{"id":"e-4304","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-359","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4305"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c782|67dfa415-51b1-7edc-b04e-f97e640a90ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c782|67dfa415-51b1-7edc-b04e-f97e640a90ae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737018643048},"e-4305":{"id":"e-4305","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-360","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4304"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c782|67dfa415-51b1-7edc-b04e-f97e640a90ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c782|67dfa415-51b1-7edc-b04e-f97e640a90ae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737018643048},"e-4308":{"id":"e-4308","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-362","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4309"}},"mediaQueries":["main"],"target":{"selector":".testimonial-card","originalId":"6835ac0e320162939cd9c782|67dfa415-51b1-7edc-b04e-f97e640a90a0","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-card","originalId":"6835ac0e320162939cd9c782|67dfa415-51b1-7edc-b04e-f97e640a90a0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737018643048},"e-4309":{"id":"e-4309","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-363","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4308"}},"mediaQueries":["main"],"target":{"selector":".testimonial-card","originalId":"6835ac0e320162939cd9c782|67dfa415-51b1-7edc-b04e-f97e640a90a0","appliesTo":"CLASS"},"targets":[{"selector":".testimonial-card","originalId":"6835ac0e320162939cd9c782|67dfa415-51b1-7edc-b04e-f97e640a90a0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737018643048},"e-4324":{"id":"e-4324","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-359","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4325"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c79c|41cbf86a-a004-2fb0-8366-c4e901c0a2ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c79c|41cbf86a-a004-2fb0-8366-c4e901c0a2ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737362198288},"e-4325":{"id":"e-4325","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-360","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4324"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c79c|41cbf86a-a004-2fb0-8366-c4e901c0a2ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c79c|41cbf86a-a004-2fb0-8366-c4e901c0a2ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737362198288},"e-4330":{"id":"e-4330","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-359","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4331"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78f|ffd1bf2d-6699-dd81-1a8f-45e68aaaf2ff","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78f|ffd1bf2d-6699-dd81-1a8f-45e68aaaf2ff","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737363462129},"e-4331":{"id":"e-4331","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-360","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4330"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c78f|ffd1bf2d-6699-dd81-1a8f-45e68aaaf2ff","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c78f|ffd1bf2d-6699-dd81-1a8f-45e68aaaf2ff","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737363462129},"e-4340":{"id":"e-4340","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-359","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4341"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c790|26c02cd8-de55-9e55-9bbc-2d0e2796db92","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c790|26c02cd8-de55-9e55-9bbc-2d0e2796db92","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737363515034},"e-4341":{"id":"e-4341","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-360","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4340"}},"mediaQueries":["main"],"target":{"id":"6835ac0e320162939cd9c790|26c02cd8-de55-9e55-9bbc-2d0e2796db92","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6835ac0e320162939cd9c790|26c02cd8-de55-9e55-9bbc-2d0e2796db92","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737363515034}},"actionLists":{"a-70":{"id":"a-70","title":"Home Three Testimonial Hover","actionItemGroups":[{"actionItems":[{"id":"a-70-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-item","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1c"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-70-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-overlay","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1b"]},"value":0,"unit":""}},{"id":"a-70-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-overlay","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1b"]},"xValue":-0.4375,"yValue":-0.5,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-70-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-item","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1c"]},"globalSwatchId":"@var_variable-a977bcfa","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-70-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-overlay","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1b"]},"value":1,"unit":""}},{"id":"a-70-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-overlay","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1b"]},"xValue":0,"yValue":0,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1723033323463},"a-71":{"id":"a-71","title":"Home Three Testimonial Hover 2","actionItemGroups":[{"actionItems":[{"id":"a-71-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-item","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1c"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-71-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-overlay","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1b"]},"value":0,"unit":""}},{"id":"a-71-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-overlay","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1b"]},"xValue":-0.4375,"yValue":-0.4375,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1723033323463},"a-88":{"id":"a-88","title":"Home Testimonial Rotate Animation","actionItemGroups":[{"actionItems":[{"id":"a-88-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"1b7a1198-c0d6-de9e-8c28-edd2920a80b3"},"xValue":null,"yValue":5,"xUnit":"px","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-88-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"swingTo","duration":500,"target":{"useEventTarget":true,"id":"1b7a1198-c0d6-de9e-8c28-edd2920a80b3"},"xValue":null,"yValue":0,"xUnit":"px","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1723436262378},"a-326":{"id":"a-326","title":"Testimonial Card [Hover in]","actionItemGroups":[{"actionItems":[{"id":"a-326-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-card-content","selectorGuids":["fc8f4310-f4d8-7a77-309d-e32ade6077c0"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-326-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"value":0,"unit":""}},{"id":"a-326-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"xValue":-0.4375,"yValue":-0.5,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-326-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-card-content","selectorGuids":["fc8f4310-f4d8-7a77-309d-e32ade6077c0"]},"globalSwatchId":"","rValue":59,"bValue":79,"gValue":72,"aValue":1}},{"id":"a-326-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"value":1,"unit":""}},{"id":"a-326-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"xValue":0,"yValue":0,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1723033323463},"a-327":{"id":"a-327","title":"Testimonial Card [Hover Out]","actionItemGroups":[{"actionItems":[{"id":"a-327-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-card-content","selectorGuids":["fc8f4310-f4d8-7a77-309d-e32ade6077c0"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-327-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"value":0,"unit":""}},{"id":"a-327-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"xValue":-0.4375,"yValue":-0.4375,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1723033323463},"a-359":{"id":"a-359","title":"Home Three Testimonial Hover 3","actionItemGroups":[{"actionItems":[{"id":"a-359-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-item","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1c"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-359-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-overlay","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1b"]},"value":0,"unit":""}},{"id":"a-359-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-overlay","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1b"]},"xValue":-0.4375,"yValue":-0.5,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-359-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-item","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1c"]},"globalSwatchId":"@var_variable-a977bcfa","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-359-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-overlay","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1b"]},"value":1,"unit":""}},{"id":"a-359-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-overlay","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1b"]},"xValue":0,"yValue":0,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1723033323463},"a-360":{"id":"a-360","title":"Home Three Testimonial Hover 4","actionItemGroups":[{"actionItems":[{"id":"a-360-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-item","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1c"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-360-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-overlay","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1b"]},"value":0,"unit":""}},{"id":"a-360-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".home-three-testimonial-overlay","selectorGuids":["3fb17f5f-5af4-19cb-1726-a775c3b9ae1b"]},"xValue":-0.4375,"yValue":-0.4375,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1723033323463},"a-362":{"id":"a-362","title":"Testimonial Card [Hover in] 2","actionItemGroups":[{"actionItems":[{"id":"a-362-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-card-content","selectorGuids":["fc8f4310-f4d8-7a77-309d-e32ade6077c0"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-362-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"value":0,"unit":""}},{"id":"a-362-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"xValue":-0.4375,"yValue":-0.5,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-362-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-card-content","selectorGuids":["fc8f4310-f4d8-7a77-309d-e32ade6077c0"]},"globalSwatchId":"","rValue":59,"bValue":79,"gValue":72,"aValue":1}},{"id":"a-362-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"value":1,"unit":""}},{"id":"a-362-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"xValue":0,"yValue":0,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1723033323463},"a-363":{"id":"a-363","title":"Testimonial Card [Hover Out] 2","actionItemGroups":[{"actionItems":[{"id":"a-363-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-card-content","selectorGuids":["fc8f4310-f4d8-7a77-309d-e32ade6077c0"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-363-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"value":0,"unit":""}},{"id":"a-363-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".testimonial-overlay","selectorGuids":["312e8703-6351-b5c5-38d3-6d31acdb98cf"]},"xValue":-0.4375,"yValue":-0.4375,"xUnit":"rem","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1723033323463},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TestimonialContent({
  as: _Component = _Builtin.Block,
  ttitle = "Our clients, their success",
  description = "Each client story highlights the challenges they faced, the tailored solutions we provided, and the exciting results we helped them achieve. What sets us apart is the trust we build and the relationships we nurture. It’s why so many of our clients return to us year after year—to navigate new opportunities, tackle fresh challenges, and continue unlocking their full potential. We hope their journeys inspire you on yours.",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "global_container")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "testimonial-header")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "overflow-hidden")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-stye-h3-48-56")}
            data-w-id="1b7a1198-c0d6-de9e-8c28-edd2920a80ad"
            tag="h2"
            color="charcoal-grey"
          >
            {ttitle}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "overflow-hidden")}
          tag="div"
        >
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "typo-r-16-18", "font-weight-500")}
            data-w-id="1b7a1198-c0d6-de9e-8c28-edd2920a80b0"
            color="charcoal-grey"
          >
            {description}
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "testimonial-swiper-holder")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "testimonial-arrow-holder")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "swiper-arrow")}
            tag="div"
            swiper-prev="testimonial"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "swiper-arrow-icon")}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%208%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7%2013L1%207L7%201%22%20stroke%3D%22currentcolor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "swiper-arrow")}
            tag="div"
            swiper-next="testimonial"
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "swiper-arrow-icon")}
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%208%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1%2013L7%207L1%201%22%20stroke%3D%22currentcolor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "swiper", "testimonial-swiper")}
          tag="div"
          swiper="testimonial"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "swiper-wrapper",
              "testimonial-swiper-wrapper"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "swiper-slide",
                "testimonial-swiper-slide"
              )}
              tag="div"
            >
              <TestimonialCard
                testimonialLogo="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb72_Aetha_logomarks-05.png.webp"
                testimonialDesc="We have already referred a number of our clients to Kene Partners so they can benefit from their expertise and help..."
                testimonialTag="Product"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "swiper-slide",
                "testimonial-swiper-slide"
              )}
              tag="div"
            >
              <TestimonialCard
                testimonialTag="Manufacturing"
                testimonialLogo="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb0c_ecoegg%20no%20bg.webp"
                testimonialDesc="We have been so impressed with Kene Partners and the speed in which they put together our claim, without compromising quality."
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "swiper-slide",
                "testimonial-swiper-slide"
              )}
              tag="div"
            >
              <TestimonialCard
                testimonialLogo="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb34_augustus.png.webp"
                testimonialDesc="Before working with Kene Partners, we processed our R&D claims in-house. Kene Partners helped us to translate the R&D benefit into..."
                testimonialTag="Manufacturing"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "swiper-slide",
                "testimonial-swiper-slide"
              )}
              tag="div"
            >
              <TestimonialCard
                testimonialLogo="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb33_benchmark-1.png.webp"
                testimonialDesc="Our accountant doesn’t offer R&D tax claim services as, like most accountants, they don’t have the relevant experience. What attracted me..."
                testimonialTag="Packaging"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "swiper-slide",
                "testimonial-swiper-slide"
              )}
              tag="div"
            >
              <TestimonialCard
                testimonialTag="Architecture"
                testimonialDesc="As the tax benefit came through, we have experienced first-hand the benefit of the positive experience in engaging with Kene Partners..."
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "swiper-slide",
                "testimonial-swiper-slide"
              )}
              tag="div"
            >
              <TestimonialCard
                testimonialLogo="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb3e_itris-338.png.webp"
                testimonialTag="Software"
                testimonialDesc="We had previously considered submitting a claim for R&D tax credits, but after reading through the HMRC guidance, we decided that..."
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "swiper-slide",
                "testimonial-swiper-slide"
              )}
              tag="div"
            >
              <TestimonialCard
                testimonialLogo="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb66_Imageco-logo-01.png.webp"
                testimonialDesc="Once Kene had compiled the report and the claim sent off, I then asked what they expected the figure to be...."
                testimonialTag="Printing"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "swiper-slide",
                "testimonial-swiper-slide"
              )}
              tag="div"
            >
              <TestimonialCard
                testimonialLogo="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb75_Ashe-Building-Better-Logo.png.webp"
                testimonialDesc="We were looking for a new R&D partner that was equally as thorough as we had been. We came across Kene..."
                testimonialTag="Construction"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "testimonial-grid")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "grid-item")} tag="div" />
        <_Builtin.Block
          className={_utils.cx(_styles, "grid-item")}
          id={_utils.cx(
            _styles,
            "w-node-_339a6f65-90bd-457e-878f-a8a83da94385-920a80aa"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "testimonial-card")}
            id={_utils.cx(
              _styles,
              "w-node-_1b7a1198-c0d6-de9e-8c28-edd2920a80c0-920a80aa"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "testimonial-card-content")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "testimonial-tag")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "typo-s-14-16")}
                  tag="div"
                  color="paragraph2"
                >
                  {"manufacturing"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "testimonial-logo-wrap")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "testimonial-logo")}
                  width="auto"
                  height="30"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb31_logo-ecoegg.webp"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "testimonial-desc-wrap")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "typo-s-14-16")}
                >
                  {
                    "We have been so impressed with Kene Partners and the speed in which they put together our claim, without compromising quality. From the initial conversions to collaborating with the team, it was all seamless."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "testimonial-link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Read the full story here"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "testimonial-overlay")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "grid-item")}
          id={_utils.cx(
            _styles,
            "w-node-e3810f7c-a7fe-bc7f-2c98-27d01247421c-920a80aa"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "home-three-testimonial-wrapper",
              "hide"
            )}
            id={_utils.cx(
              _styles,
              "w-node-_1b7a1198-c0d6-de9e-8c28-edd2920a80cd-920a80aa"
            )}
            data-w-id="1b7a1198-c0d6-de9e-8c28-edd2920a80cd"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "home-three-testimonial-item")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "testimonial-tag")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "typo-s-14-16")}
                  tag="div"
                >
                  {"product"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "testimonial-logo-wrap")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "testimonial-logo")}
                  width="auto"
                  height="30"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb2e_logo-aetha.webp"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "testimonial-desc-wrap")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "typo-s-14-16")}
                >
                  {
                    "We have already referred a number of our clients to Kene Partners so they can benefit from their expertise and help more businesses benefit from this generous government incentive."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "testimonial-link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Read the full story here"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "home-three-testimonial-overlay",
                "is_secoundry-carol"
              )}
              tag="div"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "testimonial-card")}
            id={_utils.cx(
              _styles,
              "w-node-_49712285-2c67-f23e-0a41-6d213f25d5e8-920a80aa"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "testimonial-card-content")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "testimonial-tag")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "typo-s-14-16")}
                  tag="div"
                  color="paragraph2"
                >
                  {"product"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "testimonial-logo-wrap")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "testimonial-logo")}
                  width="auto"
                  height="30"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6835ac0e320162939cd9c7ad/6835ac0e320162939cd9cb2e_logo-aetha.webp"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "testimonial-desc-wrap")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "typo-s-14-16")}
                >
                  {
                    "We have already referred a number of our clients to Kene Partners so they can benefit from their expertise and help more businesses benefit from this generous government incentive."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "testimonial-link")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Read the full story here"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "testimonial-overlay")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
