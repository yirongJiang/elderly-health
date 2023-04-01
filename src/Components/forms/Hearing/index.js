import { Alert, Button, Form, message, Radio, Space, Spin } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Commontitle from '../../../UI/Nav-head';
import './index.less'
import { topicNumbercontext, topicFormDatacontext } from '../../../store/topicNumbercontext'
import { postHearing } from '../../../api';
import ToTopBtn from '../../../utility/ToTopBtn';

const commonRules = [
  {
    required: true,
    message: "请填写完整哟"
  }
]
export default function Hearing() {
  const [form] = Form.useForm()
  const nav = useNavigate()
  const [changePage, setChangePage] = useState(0)
  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.hearingFormdata })
  }, [])

  const onFinish = async (values) => {
    await postHearing(values)
    setChangePage(1)
    setTimeout(() => {
      nav('/evaluationdetail/scalenav', { replace: true })
      message.success('恭喜您，提交成功')
    }, 1000);
  };

  const formItemLayout = {
    labelCol: {
      span: 15,
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
    topicContext.numberDispatch({ type: 'HEARINGADD', selectedNumber: selectedNumber })
    formdataContext.formDispatch({ type: 'HEARINGFORM', formdata: formdata })
  }


  return (
    <Commontitle title='听力筛查表' back className='hearing-wrapper'>
      <ToTopBtn />
    {changePage===0?
      <Form
        scrollToFirstError
        onFieldsChange={formChange}
        style={{ padding: '0 10rem' }}
        form={form}
        name="听力筛查表"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <Form.Item rules={commonRules} name="qone" label="1.在与人初次见面时，听力问题是否会使您感到尴尬？">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="3">是的</Radio>
              <Radio value="2">有时</Radio>
              <Radio value="1">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>


        <Form.Item rules={commonRules} name="qtwo" label="2.在和家人交谈时，听力问题是否会使您感到沮丧？">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="3">是的</Radio>
              <Radio value="2">有时</Radio>
              <Radio value="1">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>


        <Form.Item rules={commonRules} name="qthree" label="3.有人对您低声耳语时，听力问题是否会使您感到困难？ ">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="3">是的</Radio>
              <Radio value="2">有时</Radio>
              <Radio value="1">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>


        <Form.Item rules={commonRules} name="qfour" label="4.您是否觉得有听力问题是一种残疾？ ">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="3">是的</Radio>
              <Radio value="2">有时</Radio>
              <Radio value="1">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qfive" label="5.在探亲访友时，听力问题是否会使您感到困难？ ">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="3">是的</Radio>
              <Radio value="2">有时</Radio>
              <Radio value="1">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qsix" label="6.是否由于听力问题，您不愿像以往那样经常出席正式的场合了（比如会议、仪式等等）？">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="3">是的</Radio>
              <Radio value="2">有时</Radio>
              <Radio value="1">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qseven" label="7.听力问题会引起您与家人的争吵吗？ ">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="3">是的</Radio>
              <Radio value="2">有时</Radio>
              <Radio value="1">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qeight" label="8.在看电视或听广播时，听力问题是否会使您感到困难？">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="3">是的</Radio>
              <Radio value="2">有时</Radio>
              <Radio value="1">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qnine" label="9.您是否觉得听力问题限制或者阻碍了您的个人生活或社会交往？">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="3">是的</Radio>
              <Radio value="2">有时</Radio>
              <Radio value="1">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qten" label="10.在餐馆与亲戚朋友聚餐时，听力问题是否会使您感到困难？">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="3">是的</Radio>
              <Radio value="2">有时</Radio>
              <Radio value="1">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>


        <Form.Item rules={commonRules}
          style={{ width: '80%' }}
          wrapperCol={{
            span: 9,
            offset: 7
          }}
        >
          <Button style={{ position: 'static' }} type="primary" htmlType="submit">
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
