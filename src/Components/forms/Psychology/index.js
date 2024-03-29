import { Alert, Button, Form, message, Radio, Space, Spin } from 'antd';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Commontitle from '../../../UI/Nav-head';
import './index.less'
import { topicNumbercontext, topicFormDatacontext } from '../../../store/topicNumbercontext'
import { postPsychology } from '../../../api';
import { useState } from 'react';

const commonRules = [
  {
    required: true,
    message: '请选择完整',
  },
]

export default function Psychology() {

  const [form] = Form.useForm()
  const nav = useNavigate()
  const [changePage, setChangePage] = useState(0)
  const onFinish = async (values) => {
    await postPsychology(values)
    topicContext.numberDispatch({ type: 'TOTALADD', selectedNumber: 1 })
    setChangePage(1)
    setTimeout(() => {
      nav('/evaluationdetail/scalenav', { replace: true })
      message.success('恭喜您，提交成功')
    }, 1000);
  };
  const formItemLayout = {
    labelCol: {
      span: 6,
      offset: 0,
    },
    wrapperCol: {
      span: 13,
      offset: 1
    },
  };

  const topicContext = useContext(topicNumbercontext)
  const formdataContext = useContext(topicFormDatacontext)

  const formChange = (e) => {
    const value = form.getFieldsValue(true)
    let formdata = value
    let selectedNumber = Object.keys(value).length
    topicContext.numberDispatch({ type: 'PSYCHOLOGYADD', selectedNumber: selectedNumber })
    formdataContext.formDispatch({ type: 'PSYCHOLOGYFORM', formdata: formdata })
  }

  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.psychologyFormdata })
  }, [])


  return (
    <Commontitle title='心理问卷' navagation='/evaluationdetail/scalenav' className='psychology-wrapper'>
      <div className="question">
        在最近两周里，您感觉自己被以下症状所困扰的频率是？
      </div>
      {changePage === 0 ? <Form
        onFieldsChange={formChange}
        style={{ padding: '0 10rem' }}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <Form.Item rules={commonRules} name="qone" label="1、做什么事都没兴趣，没意思。">
          <Radio.Group>
            <Space align='start' direction="vertical">
              <Radio value="1">完全不会</Radio>
              <Radio value="2">超过一半天数</Radio>
              <Radio value="3">几天</Radio>
              <Radio value="4">每天</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qtwo" label="2、感到心情低落，抑郁，没希望。">
          <Radio.Group>
            <Space align='start' direction="vertical">
              <Radio value="1">完全不会</Radio>
              <Radio value="2">超过一半天数</Radio>
              <Radio value="3">几天</Radio>
              <Radio value="4">每天</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
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
      </Form> : 
      <Spin tip="Loading...">
        <Alert style={{ height: '60vh' }}
          message="正在上传，请勿重复提交"
          type="info"
        />
      </Spin>}
    </Commontitle>
  )
}
