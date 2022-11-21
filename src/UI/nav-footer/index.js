import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from 'antd'
import './index.less'

export default function Navfooter() {
  const nav=useNavigate()
  return (
    <div className='navfooter-wrapper'>
      <Button onClick={() => {nav('/home') }} className='homebtn' type='primary'>首页</Button>
      <Button onClick={() => {nav('') }} className='healbtn' type='primary'>康复资讯</Button>
    </div>
  )
}
