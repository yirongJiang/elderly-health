import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../UI/Header'
import Navfooter from '../UI/nav-footer'
import { Button } from 'antd'
import './index.less'
import Footer from '../UI/footer'

export default function Home() {
  return (
    <div className='home-wrapper'>
      <Header />
      <Outlet />
      <Footer />
      <Navfooter />
    </div>
  )
}
