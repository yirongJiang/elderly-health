import { Alert, Button, Form, message, Radio, Space, Spin } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Commontitle from '../../../UI/Nav-head';
import { topicNumbercontext, topicFormDatacontext } from '../../../store/topicNumbercontext'
import './index.less'
import { postHeart } from '../../../api';


const commonRuls = [
  {
    required: true,
    message: "请选择一个"
  },
]

export default function Heart() {

  const [form] = Form.useForm()
  const nav = useNavigate()
  const [changePage, setChangePage] = useState(0)
  const onFinish = async (values) => {
    console.log(values)
    await postHeart(values)
    setChangePage(1)
    setTimeout(() => {
      nav('/evaluationdetail/scalenav', { replace: true })
      message.success('恭喜您，提交成功')
    }, 1000);
  };

  const formItemLayout = {
    labelCol: {
      span: 6,
      offset: 1
    },
    wrapperCol: {
      span: 13,
      offset: 0
    },
  };


  const topicContext = useContext(topicNumbercontext)
  const formdataContext = useContext(topicFormDatacontext)

  const formChange = (e) => {
    const value = form.getFieldsValue(true)
    let formdata = value
    let selectedNumber = Object.keys(value).length
    topicContext.numberDispatch({ type: 'HEARTRATEADD', selectedNumber: selectedNumber })
    formdataContext.formDispatch({ type: 'HEARTRATEFORM', formdata: formdata })
  }
  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.heartrateFormdata })
  }, [])


  return (
    <Commontitle title='冠心病/心率问题' back className='heart-wrapper'>
      <div className="question">
        是否有冠心病或心脏相关的问题？
      </div>
     {changePage===0?
      <Form
        onFieldsChange={formChange}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <Form.Item rules={commonRuls} label='' name="qone">
          <Radio.Group>
            <Space size={60} align='start' direction="vertical">
              <Radio value="1"> 1<br /> 患者有心脏病，但日常活动量不受限制，一般体力活动不引起过度疲劳、心悸、气喘或心绞痛。。
              </Radio>
              <Radio value="2">2<br />
                心脏病患者的体力活动轻度受限制。休息时无自觉症状，一般体力活动引起过度疲劳、心悸、气喘或心绞痛。
              </Radio>
              <Radio value="3">3<br />
                患者有心脏病，以致体力活动明显受限制。休息时无症状，但小于一般体力活动即可引起过度疲劳、心悸、气喘或心绞痛。
              </Radio>
              <Radio value="4">4<br />
                心脏病患者不能从事任何体力活动，休息状态下也出现心衰症状，体力活动后加重。
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>



        <Form.Item rules={commonRuls}
          style={{ width: '80%' }}
          wrapperCol={{
            span: 9,
            offset: 7
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>: <Spin tip="Loading...">
        <Alert style={{ height: '60vh' }}
          message="正在上传，请勿重复提交"
          type="info"
        />
      </Spin>}
    </Commontitle>
  )
}
