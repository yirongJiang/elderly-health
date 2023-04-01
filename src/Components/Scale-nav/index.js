import React, { useContext, useState } from 'react'
import './index.less'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space, message } from 'antd';
import { useNavigate } from 'react-router-dom'
import { requiredList, optionalList } from '../../routes/requiredList'
import Commontitle from '../../UI/Nav-head'
import { postCountGrade, postGetGrade } from '../../api';
import { basicFormContext, topicNumbercontext } from '../../store/topicNumbercontext'
import dayjs from 'dayjs'

const arr = ["四川大学华西医院", "南京医科大学", "中南大学湘雅医院", "中国康复研究中心"]
export default function Scalenav() {

  const nav = useNavigate()
  const [open, setOpen] = useState(false);
  const topicNumberContext = useContext(topicNumbercontext)
  const formdataContext = useContext(basicFormContext)
  const date = dayjs().format('YYYY-MM-DD')
  const { basicForm: { name, institution, staff } } = useContext(basicFormContext)


  const clearAll = async () => {
    try {
      setOpen(false)
      message.success('保存数据成功')
      await postCountGrade()
      const result = await postGetGrade({ "createDate": date, "name": name, "institution": institution, "staff": staff, "adminUserId": localStorage.getItem('adminUserId') })
      sessionStorage.removeItem('isPost')
      // formdataContext.basicFormGroupDispatch({type:'clearForm'})
      nav('/evaluationdetail/evaluateoutcome', { state: { array: result.body[0] } })

    } catch (error) {
      message.error('服务器出错啦，请联系技术人员')
    }

  }

  return (
    <Commontitle noBack basicPage navagation='/home/addEvaluate' backTwoList title='评估表单（请依次认真完成以下表单，
    此过程可能会花费一些时间）' className='scalenav-wrapper'>
      <div className='tips'>下列量表必填
        <span className='userName'>{formdataContext.basicForm.name}</span>
      </div>
      <div className="necessary-list">
        {
          requiredList.map((item, index) => {
            return <Button
              className={topicNumberContext[item.finishedNumber] === item.defaultNumber ? 'finishedButton' : null}
              disabled={topicNumberContext[item.finishedNumber] === item.defaultNumber}
              onClick={() => { nav(`${item.navUrl}`) }} key={item.title}>{
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
            return <Button
              disabled={topicNumberContext[item.finishedNumber] === item.defaultNumber}
              className={topicNumberContext[item.finishedNumber] === item.defaultNumber ? 'finishedButton' : null} onClick={() => { nav(`${item.navUrl}`) }} key={item.title}>{
                item.title}
              <div>{topicNumberContext[item.finishedNumber]}题/{item.defaultNumber}题</div>
            </Button>
          })
        }
      </div>
      <div className="bottom">
        {/* <Button type='primary' disabled={topicNumberContext.totalNumber === 7 ? false : true} onClick={clearAll}>查看评估结果</Button> */}
        <Button type='primary' onClick={() => setOpen(true)}>上传并查看评估结果</Button>
      </div>
      <Modal
        title=" 温馨提示 "
        centered
        open={open}
        onOk={clearAll}
        onCancel={() => setOpen(false)}
      >
        <p>必填量表未填写完成 ， </p>
        <p>将无法生成评估结果 ， </p>
        <p>是否继续上传量表 ？</p>
      </Modal>
    </Commontitle>
  )
}
