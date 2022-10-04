import React from 'react'
import { Button } from 'antd'
import './index.less'
import { useNavigate } from 'react-router-dom'

export default function Basicinfo() {
  const nav = useNavigate()
  return (
    <div className='basicinfo-wrapper'>
      <Button onClick={() => { nav('/home/evaluate/ ',{state:{isScuess:false}}) }} className='add-btn' type='primary' >新增评估病例</Button>
      <Button onClick={() => { nav('/home/search') }} className='check-btn' type='primary' >查看已填写的病例</Button>
      <Button onClick={() => { nav('/home/consult') }} className='search-btn' type='primary' >查询历史评估结果</Button>
    </div>
  )
}
