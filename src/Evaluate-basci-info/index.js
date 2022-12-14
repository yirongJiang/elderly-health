import React from 'react'
import { Button, message } from 'antd'
import './index.less'
import lockimg from '../assect/img/lock.png'
import { useNavigate, } from 'react-router-dom'

export default function Evaluation() {
  const isPost=localStorage.getItem('isPost')
  console.log(typeof(isPost))
  const nav = useNavigate()
  return (
    <div className='evaluation-wrapper'>
      <div className='span'>  （为了完成您的认知评估测试，请依次并
        认真完成基本信息和评估量表的填写）
      </div>
      <div className="content">
        <Button onClick={() => { nav('/evaluationdetail') }} type='primary' >基本信息</Button>
        <Button onClick={() => { isPost === '1' ? nav('/evaluationdetail/scalenav') : message.warning('请先填写基本信息')   }} className='table-btn' type='primary' >评估量表</Button>
        {
          isPost === '1' ? null : <img src={lockimg} alt="lock" />
        }
      </div>
    </div>
  )
}
