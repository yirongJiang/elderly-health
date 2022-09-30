import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../UI/Header'
import Navfooter from '../UI/nav-footer'
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
