import React, { useState } from 'react'
import { Button } from 'antd'
import './index.less'
import { useNavigate } from 'react-router-dom'
import {
  PoweroffOutlined
} from '@ant-design/icons';
import HomeBtn from '../../UI/HeaderBtn';

export default function Basicinfo() {

  const [loadings, setLoadings] = useState();
  const nav = useNavigate()
  const enterLoading = () => {
    setLoadings(() => {
      return true
    })
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        return false
      });
      localStorage.removeItem('X-Auth-Token')
      nav('/initail')
    }, 1000);
  };

  return (
    <div className='basicinfo-wrapper'>
      <Button className='layOut'
        icon={<PoweroffOutlined />}
        loading={loadings}
        onClick={enterLoading}
      >
        退出登录
      </Button  >
      <HomeBtn isLeft />
      <Button onClick={() => { nav('/home/addEvaluate', { state: { isScuess: false } }) }} className='add-btn' type='primary' >新增评估病例</Button>
      <Button onClick={() => { nav('/evaluationdetail/queryresult') }} className='search-btn' type='primary' >查询历史评估结果</Button>
    </div>
  )
}
