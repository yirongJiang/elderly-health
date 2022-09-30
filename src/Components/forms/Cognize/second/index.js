import React from 'react'
import {Button} from 'antd'
import './index.less'
import { useNavigate } from 'react-router-dom'

export default function Cognizesecond() {
  const nav=useNavigate()
  return (
    <div className='cognizesecond-wrapper'>
      <div className="cognizesecond-head">
        <span>3. 绘制时钟图</span>
        <div>请接下来在空白处画出11点10分的钟表，点击开始画钟：</div>
      </div>
      <div className="bottom">
        <Button onClick={() => { nav('/evaluationdetail/cognize/third') }} type='primary'>开始画钟</Button>
      </div>
    </div>
  )
}
