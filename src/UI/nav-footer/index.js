import React from 'react'
import { Button } from 'antd'
import './index.less'

export default function Navfooter() {
  return (
    <div className='navfooter-wrapper'>
      <Button className='homebtn' type='primary'>首页</Button>
      <Button className='healbtn' type='primary'>康复资讯</Button>
    </div>
  )
}
