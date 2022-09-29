import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../UI/footer'
import Header from '../UI/Header'
import './index.less'
export default function Initial() {
  return (
    <div className='initial-wrapper'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
