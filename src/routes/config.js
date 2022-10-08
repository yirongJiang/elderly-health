import Initial from '../Initial'
import Home from '../Home'
import Login from '../Login'
import Messagelogin from '../Components/About-login/Common-login/Message-login'
import Phonelogin from '../Components/About-login/Common-login/Phone-login'
import Doctorlogin from '../Components/About-login/Doctor-login'
import Register from '../Components/Register'
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
import Swallow from '../Components/Swallow'
import { Navigate } from 'react-router-dom'
import Basicinfo from '../Components/hombasicinformation'
import Evaluation from '../Evaluate-basci-info'
import Postsuccessfully from '../Components/Post-successfully'
import Search from '../Components/Search'
import Consult from '../Components/forms/Consult'
import Evaluationdetail from '../Evaluation-detail'
import Initailpage from '../Components/Login-initail'
import Basicform from '../Components/forms/basic-form'
import Scalenav from '../Components/Scale-nav'
import Cognizefirst from '../Components/forms/Cognize/first'
import Cognizesecond from '../Components/forms/Cognize/second'
import Cognizethird from '../Components/forms/Cognize/third'


export const getRoutesConfig = (isLogin) => [
  {
    path: '*',
    element: isLogin ? <Navigate to='initail' /> : <Initial />,
  },
  {
    path: '/initail',
    element: <Initial />,
    children: [
      {
        path: '',
        element: <Initailpage />
      },
      {
        path: 'doctorlogin',
        element: <Doctorlogin />
      },
      {
        path: 'phonelogin',
        element: <Phonelogin />
      },
      {
        path: 'register',
        element: <Register />
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
      }

    ]
  }
]
export const requiredList = [
  {
    title: '自制认知筛查表',
    finishedNumber: 0,
    defaultNumber: 10,
    navUrl: '/evaluationdetail/cognize'
  },
  {
    title: '简易精神状态检查量表MMSE',
    finishedNumber: 0,
    defaultNumber: 10,
    navUrl: '/evaluationdetail/mmse'
  },
  {
    title: 'BI评估表',
    finishedNumber: 0,
    defaultNumber: 10,
    navUrl: '/evaluationdetail/bi'
  },
  {
    title: '洛顿IADL表',
    finishedNumber: 0,
    defaultNumber: 10,
    navUrl: '/evaluationdetail/iadl'
  },
  {
    title: '心理问卷',
    finishedNumber: 0,
    defaultNumber: 2,
    navUrl: '/evaluationdetail/psychology'
  },
  {
    title: '吞咽二便功能',
    finishedNumber: 0,
    defaultNumber: 10,
    navUrl: '/evaluationdetail/swallow'
  },
  {
    title: '每日步行数',
    finishedNumber: 0,
    defaultNumber: 1,
    navUrl: '/evaluationdetail/steps'
  },
]

export const optionalList = [
  {
    title: '听力筛查表',
    finishedNumber: 0,
    defaultNumber: 10,
    navUrl: '/evaluationdetail/hearing'
  },
  {
    title: '视觉筛查表',
    finishedNumber: 0,
    defaultNumber: 15,
    navUrl: '/evaluationdetail/eyesight'
  },
  {
    title: '疼痛报告表',
    finishedNumber: 0,
    defaultNumber: 1,
    navUrl: '/evaluationdetail/pain'
  },
  {
    title: '冠心病/心率问题',
    finishedNumber: 0,
    defaultNumber: 1,
    navUrl: '/evaluationdetail/heartrate'
  },
]