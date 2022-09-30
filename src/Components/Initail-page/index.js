import React from 'react'
import './index.less'
import { Button } from 'antd'
import {useNavigate} from 'react-router-dom'

export default function Initailpage() {
  const nav=useNavigate()
  return (
    <div className='initailpage-wrapper'>
      <div className='initailpage-tip'>请选择您的身份</div>
      <div className='initailpage-idcard'>
        <div className='initailpage-doctor'>
          <Button onClick={() => { 
           nav('/initail/doctorlogin')
           }} type='primary'>医生</Button>
        </div>
        <div className='initailpage-normal'>
          <Button type='primary'onClick={() => { 
            nav('/initail/phonelogin')
           }} >普通用户</Button>
        </div>
      </div>
    </div>
  )
}
