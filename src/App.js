import React from 'react'
import { Button } from 'antd';
import {useRoutes} from 'react-router-dom'
import './app.less'
import { getRoutesConfig } from './routes/config';
export default function App() {
 const isLogin=true
 const routes=useRoutes(getRoutesConfig(isLogin))
 return routes
}
