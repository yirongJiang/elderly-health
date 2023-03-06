import React, { useContext } from 'react'
import './index.less'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { requiredList, optionalList } from '../../routes/requiredList'
import Commontitle from '../../UI/Nav-head'
import { basicFormContext, topicNumbercontext } from '../../store/topicNumbercontext'

export default function Scalenav() {
  const nav = useNavigate()
  const topicNumberContext = useContext(topicNumbercontext)
  const formdataContext = useContext(basicFormContext)
  return (
    <Commontitle basicPage title='评估表单（请依次认真完成以下表单，
    此过程可能会花费一些时间）' className='scalenav-wrapper'>
      <div className='tips'>下列量表必填
        <span className='userName'>{formdataContext.basicForm.name}患者</span>
      </div>
      <div className="necessary-list">
        {
          requiredList.map((item, index) => {
            return <Button className={topicNumberContext[item.finishedNumber] === item.defaultNumber ? 'finishedButton' : null} onClick={() => { nav(`${item.navUrl}`) }} key={item.title}>{
              item.title}
              <div>{topicNumberContext[item.finishedNumber]}题/{item.defaultNumber}题</div>
            </Button>
          })
        }

      </div>
      <div className='span'>如果有下列问题，请填写</div>
      <div className="optional-list">
        {
          optionalList.map((item, index) => {
            return <Button className={topicNumberContext[item.finishedNumber] === item.defaultNumber ? 'finishedButton' : null} onClick={() => { nav(`${item.navUrl}`) }} key={item.title}>{
              item.title}
              <div>{topicNumberContext[item.finishedNumber]}题/{item.defaultNumber}题</div>
            </Button>
          })
        }
      </div>
      <div className="bottom">
        {
          console.log(topicNumberContext.totalNumber)
        }
        <Button type='primary' disabled={topicNumberContext.totalNumber === 7 ? false : true} onClick={() => {
          nav('/evaluationdetail/evaluateoutcome')
        }}>查看评估结果</Button>
      </div>
    </Commontitle>
  )
}
