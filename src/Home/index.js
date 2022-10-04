import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../UI/Header'
import Navfooter from '../UI/nav-footer'
import { Button } from 'antd'
import './index.less'
import Footer from '../UI/footer'

export default function Home() {
  const { state: { isSuccess } } = useLocation()
  console.log(typeof (isSuccess))
  const [selfSuccess, setSelfSuccess] = useState(isSuccess)
  return (
    <div className='home-wrapper'>
      <Header />
      {selfSuccess ? <div className='success-wrapper'>
        <Button className='tips' type='primary'>恭喜您，！ 提交成功</Button>
        <Button onClick={() => { setSelfSuccess(false) }} className='yes' type='primary' >确定</Button>
        <div className="buttom" style={{ color: 'white', fontSize: '20rem' }}>
          四川大学华西康复医学中心
        </div>
      </div> : <Outlet />}
      {selfSuccess ? null : <Footer />}
      <Navfooter />
    </div>
  )
}
