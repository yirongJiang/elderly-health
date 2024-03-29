import Initial from '../Initial'
import Home from '../Home'
import Doctorlogin from '../Components/About-login/Doctor-login'
import Bi from '../Components/forms/BI'
import Cognize from '../Components/forms/Cognize'
import Eyesight from '../Components/forms/Eyesight'
import Hearing from '../Components/forms/Hearing'
import Heart from '../Components/forms/Heart-rate'
import Ladl from '../Components/forms/Ladl'
import Mmse from '../Components/forms/MMSE'
import Painful from '../Components/forms/Pains'
import Psychology from '../Components/forms/Psychology'
import Steps from '../Components/forms/Step-number'
import Swallow from '../Components/forms/Swallow'
import { Navigate } from 'react-router-dom'
import Basicinfo from '../Components/hombasicinformation'
import Evaluation from '../Evaluate-basci-info'
import Queryresult from '../Components/forms/Query-result'
import Evaluationdetail from '../evaluateChatReducer'
import Basicform from '../Components/forms/basic-form'
import Scalenav from '../Components/Scale-nav'
import Cognizefirst from '../Components/forms/Cognize/first'
import Cognizesecond from '../Components/forms/Cognize/second'
import Cognizethird from '../Components/forms/Cognize/third'
import Evaluationoutcome from '../Components/forms/evaluation-outcome'


export const getRoutesConfig = () => [
  {
    path: '*',
    element: <Navigate to='initail' />,

  },
  {
    path: '/initail',
    element: <Initial />,
    children: [
      {
        path: '',
        element: <Doctorlogin />
      }
    ]
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '',
        element: <Basicinfo />
      }
    ]
  },
  {
    path: '/home/addEvaluate',
    element: <Evaluation />,
    key: '/home/addEvaluate'
  },
  {
    path: '/evaluationdetail/basic',
    element: <Basicform />,
    key: '/evaluationdetail/basic'
  },
  {
    path: '/evaluationdetail/queryresult',
    element: <Queryresult />,
    key: '/evaluationdetail/queryresult'
  },
  {
    path: '/evaluationdetail',
    key: '/evaluationdetail',
    element: localStorage.getItem('adminUserId') ? <Evaluationdetail /> : <Navigate to='/initail' />,
    children: [
      {
        path: 'scalenav',
        element: <Scalenav />
      },
      {
        path: 'bi',
        element: <Bi />
      },
      {
        path: 'mmse',
        element: <Mmse />
      },
      {
        path: 'cognize',
        element: <Cognize />,
        children: [
          {
            path: '',
            element: <Cognizefirst />
          },
          {
            path: 'second',
            element: <Cognizesecond />
          },
          {
            path: 'third',
            element: <Cognizethird />
          }
        ]
      },
      {
        path: 'iadl',
        element: <Ladl />
      },
      {
        path: 'psychology',
        element: <Psychology />
      },
      {
        path: 'swallow',
        element: <Swallow />
      },
      {
        path: 'steps',
        element: <Steps />
      },
      {
        path: 'hearing',
        element: <Hearing />
      },
      {
        path: 'eyesight',
        element: <Eyesight />
      },
      {
        path: 'pain',
        element: <Painful />
      },
      {
        path: 'heartrate',
        element: <Heart />
      },
      {
        path: 'evaluateoutcome',
        element: <Evaluationoutcome />
      }

    ]
  }
]

