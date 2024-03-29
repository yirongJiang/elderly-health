import { useRoutes } from 'react-router-dom'
import './app.less'
import { useReducer, } from 'react';
import { getRoutesConfig } from './routes/config';
import { basicFormContext } from './store/topicNumbercontext';
import { topicNumbercontext, topicFormDatacontext } from './store/topicNumbercontext';


const numberReducer = (state, action) => {
  const newNumberGroup = { ...state }
  switch (action.type) {
    default:
      return state
    case 'COGNIZEADD':
      newNumberGroup.cognizeNumber = action.selectedNumber
      return newNumberGroup
    case 'MMSEADD':
      newNumberGroup.mmseNumber = action.selectedNumber
      return newNumberGroup
    case 'BIADD':
      newNumberGroup.biNumber = action.selectedNumber
      return newNumberGroup
    case 'IADLADD':
      newNumberGroup.iadlNumber = action.selectedNumber
      return newNumberGroup
    case 'PSYCHOLOGYADD':
      newNumberGroup.psychologyNumber = action.selectedNumber
      return newNumberGroup
    case 'SWALLOWADD':
      newNumberGroup.swallowNumber = action.selectedNumber
      return newNumberGroup
    case 'STEPADD':
      newNumberGroup.stepNumber = action.selectedNumber
      return newNumberGroup
    case 'HEARINGADD':
      newNumberGroup.hearingNumber = action.selectedNumber
      return newNumberGroup
    case 'EYESIGHTADD':
      newNumberGroup.eyesightNumber = action.selectedNumber
      return newNumberGroup
    case 'PAINSADD':
      newNumberGroup.painsNumber = action.selectedNumber
      return newNumberGroup
    case 'HEARTRATEADD':
      newNumberGroup.heartrateNumber = action.selectedNumber
      return newNumberGroup
    case 'TOTALADD':
      newNumberGroup.totalNumber += action.selectedNumber
      return newNumberGroup
  }
}

const formReducer = (state, action) => {
  const newFormdata = { ...state }
  switch (action.type) {
    default: return state
    case 'COGNIZEFORM':
      newFormdata.cognizeFormdata = action.formdata
      return newFormdata
    case 'BIFORM':
      newFormdata.biFormdata = action.formdata
      return newFormdata
    case 'MMSEFORM':
      newFormdata.mmseFormdata = action.formdata
      return newFormdata
    case 'IADLFORM':
      newFormdata.iadlFormdata = action.formdata
      return newFormdata
    case 'PSYCHOLOGYFORM':
      newFormdata.psychologyFormdata = action.formdata
      return newFormdata
    case 'SWALLOWFORM':
      newFormdata.swallowFormdata = action.formdata
      return newFormdata
    case 'STEPFORM':
      newFormdata.stepFormdata = action.formdata
      return newFormdata
    case 'HEARINGFORM':
      newFormdata.hearingFormdata = action.formdata
      return newFormdata
    case 'EYESIGHTFORM':
      newFormdata.eyesightFormdata = action.formdata
      return newFormdata
    case 'PAINSFORM':
      newFormdata.painsFormdata = action.formdata
      return newFormdata
    case 'HEARTRATEFORM':
      newFormdata.heartrateFormdata = action.formdata
      return newFormdata
  }
}

const basicFormReducer = (state, action) => {
  const newForm = { ...state }
  switch (action.type) {
    default:
      return state
    case 'basicForm':
      newForm.basicForm = action.formData
      return newForm
    case 'clearForm':
      return {}
  }
}

export default function App() {

  const [basicFormGroup, basicFormGroupDispatch] = useReducer(basicFormReducer, {
    basicForm: {}
  })
  const [numberGroup, numberDispatch] = useReducer(numberReducer, {
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
    totalNumber: 0
  })

  const [formGroup, formDispatch] = useReducer(formReducer, {
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

  const routes = useRoutes(getRoutesConfig())

  return (
    <topicFormDatacontext.Provider value={{ ...formGroup, formDispatch }}>
      <topicNumbercontext.Provider value={{ ...numberGroup, numberDispatch }}>
        <basicFormContext.Provider value={{ ...basicFormGroup, basicFormGroupDispatch }} >
          {routes}
        </basicFormContext.Provider>
      </topicNumbercontext.Provider>
    </topicFormDatacontext.Provider>
  )

}
