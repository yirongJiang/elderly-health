import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../UI/Header'
import Navfooter from '../UI/nav-footer'
import Footer from '../UI/footer'
import { useReducer } from 'react'

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
