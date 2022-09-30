import React from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'
import './index.less'
export default function Cognize() {
  const nav=useNavigate()
  return (
    <>
      <div className="cognize-heade">
        <div onClick={() => {nav(-1) }} className="back"> &lt;  返回</div>
        <div className="title">自制认知筛查表</div>
      </div>
      <Outlet />
    </>
  )
}
