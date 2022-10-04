import React from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'
import './index.less'
export default function Cognize() {
  const nav=useNavigate()
  return (
    <>
      <Outlet />
    </>
  )
}
