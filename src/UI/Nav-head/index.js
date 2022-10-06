import React from 'react'
import { useNavigate } from 'react-router'
import './index.less'

export default function Commontitle(props) {
  const nav=useNavigate()
  return (
    <div className={`common-wrapper ${props.className}`}>
      <div className="common-heade">
        <div onClick={() => { nav(-1) }} className="back"> &lt;  返回</div>
        <div className="title">{props.title}</div>
      </div>
      {props.children}
    </div>
  )
}
