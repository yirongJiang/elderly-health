import React from 'react'
import './index.less'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { requiredList, optionalList } from '../../routes/config'


export default function Scalenav() {
  const nav = useNavigate()
  return (
    <div className='scalenav-wrapper'>
      <div className="scalenav-heade">
        <div onClick={() => { nav('/home/evaluate/1',{state:{isSuccess:false}}) }} className="back"> &lt;  返回</div>
        <div className="title">
          评估表单（请依次认真完成以下表单，
          此过程可能会花费一些时间）
        </div>
      </div>
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
            return <Button  onClick={() => { nav(`${item.navUrl}`) }} key={item.title}>{
              item.title}
              <div>{item.finishedNumber}题/{item.defaultNumber}题</div>
            </Button>
          })
        }
      </div>
      <div className="bottom">
        <Button type='primary'>查看评估结果</Button>
      </div>
    </div>

  )
}
