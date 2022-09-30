import React from 'react'
import { Button } from 'antd'
import './index.less'
import lockimg from '../assect/img/lock.png'
import { useNavigate, useParams, Navigate } from 'react-router-dom'

export default function Evaluation() {
  const { isPost } = useParams()
  const nav = useNavigate()
  return (
    <div className='evaluation-wrapper'>
      <div className='span'>  （为了完成您的认知评估测试，请依次并
        认真完成基本信息和评估量表的填写）
      </div>
      <div className="content">
        <Button onClick={() => { nav('/evaluationdetail') }} type='primary' >基本信息</Button>
        <Button onClick={() => { isPost === '1' ? nav('') : nav('') }} className='table-btn' type='primary' >评估量表</Button>
        {
          isPost === '1' ? null : <img src={lockimg} alt="lock" />
        }
      </div>
    </div>
  )
}
