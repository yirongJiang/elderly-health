import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import './index.less'
import { HomeOutlined } from '@ant-design/icons'

export default function HomeBtn(props) {
  const { isLeft } = props
  const nav = useNavigate()

  return (
    <>{isLeft ?
      <Button icon={<HomeOutlined style={{ fontSize: '25rem', color: 'white' }} />} className='homeLeft' type='primary'>首页</Button> :
      <Button icon={<HomeOutlined style={{ fontSize: '25rem', color: 'white' }} />} className='homeRight' onClick={() => { nav('/home') }} type='primary'>首页</Button>}</>
  )
}
