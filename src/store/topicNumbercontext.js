import React from "react";

export const topicNumbercontext = React.createContext({
      cognizeNumber: 0,
      mmseNumber: 0,
      biNumber: 0,
      iadlNumber: 0,
      psychologyNumber: 0,
      swallowNumber: 0,
      stepNumber: 0,
      hearingNumber: 0,
      eyesightNumber: 0,
      painsNumber: 0,
      heartrateNumber: 0,
})

export const topicFormDatacontext = React.createContext({
      cognizeFormdata: {},
      mmseFormdata: {},
      biFormdata: {},
      iadlFormdata: {},
      psychologyFormdata: {},
      swallowFormdata: {},
      stepFormdata: {},
      hearingFormdata: {},
      eyesightFormdata: {},
      painsFormdata: {},
      heartrateFormdata: {}
})