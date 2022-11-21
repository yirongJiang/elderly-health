import Initial from '../Initial'
import Home from '../Home'
import Login from '../Login'
import Messagelogin from '../Components/About-login/Common-login/Message-login'
import Phonelogin from '../Components/About-login/Common-login/Phone-login'
import Doctorlogin from '../Components/About-login/Doctor-login'
import Reset from '../Components/Reset'
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
import Search from '../Components/Search'
import Queryresult from '../Components/forms/Query-result'
import Evaluationdetail from '../Evaluation-detail'
import Basicform from '../Components/forms/basic-form'
import Scalenav from '../Components/Scale-nav'
import Cognizefirst from '../Components/forms/Cognize/first'
import Cognizesecond from '../Components/forms/Cognize/second'
import Cognizethird from '../Components/forms/Cognize/third'
import Evaluationoutcome from '../Components/forms/evaluation-outcome'
import CameraComponent from '../Components/forms/Cognize/Camera-photo'



export const getRoutesConfig = (isLogin) => [
  {
    path: '*',
    element: isLogin ? <Navigate to='initail' /> : <Initial />,
  },
  {
    path: '/initail',
    element: <Initial />,
    children: [
      // {
      //   path: '',
      //   element: <Initailpage />
      // },
      {
        path: '',
        element: <Doctorlogin />
      },
      {
        path: 'phonelogin',
        element: <Phonelogin />
      },
      {
        path: 'reset',
        element: <Reset />
      }
    ]
  },
  {
    path: '/home',
    element: isLogin ? <Home /> : <Navigate to='/initail' />,
    children: [
      {
        path: '',
        element: <Basicinfo />
      },
      {
        key: 'evaluate',
        path: 'evaluate',
        element: <Evaluation />
      },
      {
        path: 'search',
        element: <Search />
      }
    ]
  },
  {
    path: '/evaluationdetail',
    element: isLogin ? <Evaluationdetail /> : <Navigate to='initail' />,
    children: [
      {
        path: '',
        element: <Basicform />
      }, {
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
        path: 'queryresult',
        element: <Queryresult />
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
          },
          {
            path: 'camera',
            element: <CameraComponent />
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

