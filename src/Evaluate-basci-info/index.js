import React from 'react'
import { Button, message } from 'antd'
import './index.less'
import lockimg from '../assect/img/lock.png'
import { useNavigate } from 'react-router-dom'
import Footer from '../UI/footer'
import Header from '../UI/Header'
import HomeBtn from '../UI/HeaderBtn'
import { CaretLeftFilled } from '@ant-design/icons'

export default function Evaluation() {

  // const isPost = localStorage.getItem('isPost')
  const isPost = sessionStorage.getItem('isPost')
  const nav = useNavigate()
  const backHome = () => {
    nav('/home')
  }

  return (
    <>
      <Header change={1} />
      <div className='evaluation-wrapper'>
        <div className='backHome' onClick={backHome}><CaretLeftFilled  /> 返回</div>
        <HomeBtn/>
        <div className='span'>  （为了完成您的认知评估测试，请依次并认真完成基本信息和评估量表的填写）
        </div>
        <div className="content">
          <Button type='primary' onClick={() => { nav('/evaluationdetail/basic') }} >基本信息</Button>
          <Button type='primary' className='table-btn' onClick={() => { isPost === '1' ? nav('/evaluationdetail/scalenav') : message.warning('请先填写基本信息') }} >评估量表</Button>
        </div>
        {
          isPost === '1' ? null : <img src={lockimg} alt="lock" />
        }
        <Footer />
      </div>
    </>
  )
}
