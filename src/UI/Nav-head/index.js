import { CaretLeftFilled } from '@ant-design/icons'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { basicFormContext } from '../../store/topicNumbercontext'
import './index.less'

export default function Commontitle(props) {

  const basicdataContext = useContext(basicFormContext)
  const nav = useNavigate()
  const { basicPage, noBack, back, navagation } = props

  const navChange = () => {
    if (back) {
      nav(-1)
      return
    }
    nav(navagation, { replace: true })
  }

  return (
    <div className={`common-wrapper ${props.className}`}>
      <div className="common-heade">
        {noBack ? '' : <div onClick={navChange} className="back"> <CaretLeftFilled style={{ fontSize: '20rem', color: 'white' }} />  返回</div>}
        <div className="title">{props.title}</div>
        {
          basicPage ? '' : <span className='userName'>{basicdataContext.basicForm.name}</span>
        }
      </div>
      {props.children}
    </div>
  )
}
