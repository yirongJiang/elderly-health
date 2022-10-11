import React from 'react'
import './index.less'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { requiredList, optionalList } from '../../routes/config'
import Commontitle from '../../UI/Nav-head'
import Footer from '../../UI/footer'


export default function Scalenav() {
  const nav = useNavigate()
  return (
    <Commontitle navHome='true' title='评估表单（请依次认真完成以下表单，
    此过程可能会花费一些时间）' className='scalenav-wrapper'>
      <div className='span'>下列量表必填</div>
      <div className="necessary-list">
        {
          requiredList.map((item, index) => {
            return <Button onClick={() => { nav(`${item.navUrl}`) }} key={item.title}>{
              item.title}
              <div>{item.finishedNumber}题/{item.defaultNumber}题</div>
            </Button>
          })
        }


      </div>
      <div className='span'>如果有下列问题，请填写</div>
      <div className="optional-list">
        {
          optionalList.map((item, index) => {
            return <Button onClick={() => { nav(`${item.navUrl}`) }} key={item.title}>{
              item.title}
              <div>{item.finishedNumber}题/{item.defaultNumber}题</div>
            </Button>
          })
        }
      </div>
      <div className="bottom">
        <Button type='primary' onClick={() => { 
          nav('/evaluationdetail/evaluateoutcome')
         }}>查看评估结果</Button>
      </div>
    </Commontitle>

  )
}
