import { useRoutes } from 'react-router-dom'
import './app.less'
import { useReducer, useState } from 'react';
import { getRoutesConfig } from './routes/config';
import { basicFormContext } from './store/topicNumbercontext';


const basicFormReducer = (state, action) => {
  const newForm = { ...state }
  switch (action.type) {
    default:
      return state
    case 'basicForm':
      newForm.basicForm = action.formData
      return newForm
  }
}

export default function App() {
  const [basicFormGroup, basicFormGroupDispatch] = useReducer(basicFormReducer, {
    basicForm: {}
  })
  const routes = useRoutes(getRoutesConfig())
  return (<basicFormContext.Provider value={{ ...basicFormGroup, basicFormGroupDispatch }} >
    {routes}
  </basicFormContext.Provider>)

}
