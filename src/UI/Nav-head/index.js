import React from 'react'
import { useNavigate } from 'react-router'
import './index.less'

export default function Commontitle(props) {
  const nav = useNavigate()
  const navChange = () => {
    if (props.navHome) {
      nav('/home/evaluate')
    }
    nav(-1)
  }
  return (
    <div className={`common-wrapper ${props.className}`}>
      <div className="common-heade">
        <div onClick={navChange} className="back"> &lt;  返回</div>
        <div className="title">{props.title}</div>
      </div>
      {props.children}
    </div>
  )
}
