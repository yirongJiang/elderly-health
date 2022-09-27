import Initial from '../Initial'
import Home from '../Home'
import Login from '../Login'
import Messagelogin from '../Components/About-login/Common-login/Message-login'
import Phonelogin from '../Components/About-login/Common-login/Phone-login'
import Doctorlogin from '../Components/About-login/Doctor-login'
import Register from '../Components/Register'
import Reset from '../Components/Reset'
import Bi from '../Components/BI'
import Cognize from '../Components/Cognize'
import Eyesight from '../Components/Eyesight'
import Hearing from '../Components/Hearing'
import Heart from '../Components/Hearing'
import Ladl from '../Components/Ladl'
import Mmse from '../Components/MMSE'
import Pain from '../Components/Pain/inde';
import Psychology from '../Components/Psychology'
import Steps from '../Components/Step-number'
import Swallow from '../Components/Swallow'
import { Navigate } from 'react-router-dom'
import Basicinfo from '../Components/Basic-information'
import Evaluation from '../Evaluate-basci-info'
import Postsuccessfully from '../Components/Post-successfully'
import Search from '../Components/Search'
import Consult from '../Components/Consult'
import Evaluationdetail from '../Evaluation-detail'

export const getRoutesConfig = (isLogin) => [
  {
    path: '/',
    element: isLogin ? <Navigate to='home' /> : <Initial />,
  },
  {
    path: '/initail',
    element: <Initial />,
    children: [
      {
        path: 'doctorlogin',
        element: <Doctorlogin />
      }
    ]
  },
  {
    path: '/home',
    element: isLogin ? <Home /> : <Navigate to='/initail' />,
    children: [
      {
        path: 'basic',
        element: <Basicinfo />
      },
      {
        path: 'evaluate',
        element: <Evaluation />
      },
      {
        path: 'post',
        element: <Postsuccessfully />
      },
      {
        path: 'search',
        element: <Search />
      },
      {
        path: 'consult',
        element: <Consult />
      }
    ]
  },
  {
    path: '/evaluationdetail',
    element: isLogin ? <Evaluationdetail /> : <Navigate to='initail' />,
    children: [
      {
        path: 'bi',
        element: <Bi />
      },
      {
        path: 'mms',
        element: <Mmse />
      },
      {
        path: 'cognize',
        element: <Cognize />
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
        path: 'setps',
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
        element: <Pain />
      },
      {
        path: 'heartrate',
        element: <Heart />
      }

    ]
  }
]
