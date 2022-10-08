import React from 'react'
import { Button } from 'antd'
import './index.less'
import { useNavigate } from 'react-router-dom'
import Commontitle from '../../../../UI/Nav-head'

export default function Cognizesecond() {
  const nav = useNavigate()
  return (
    <Commontitle title='自制认知筛查表' className='cognizesecond-wrapper'>
      <div className="cognizesecond-head">
        <span>3. 绘制时钟图</span>
        <div>请接下来在空白处画出11点10分的钟表，点击开始画钟：</div>
      </div>
      <div className="bottom">
        <Button onClick={() => { nav('/evaluationdetail/cognize/third') }} type='primary'>开始画钟</Button>
      </div>
      <div className="cognizesecond-head">
        <span>4. 拍照时钟</span>
        <div>您也可以直接拍下您在纸上画的钟表，点击拍照：</div>
      </div>
      <div className="bottom">
        <Button style={{ backgroundColor: 'pink' }} onClick={() => { nav('/evaluationdetail/cognize/third') }} type='primary'>开始拍照</Button>
      </div>

    </Commontitle>
  )
}
