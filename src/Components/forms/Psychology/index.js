import { Button, Form, message, Radio, Space } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Commontitle from '../../../UI/Nav-head';
import './index.less'

const commonRules=[
  {
    required: true,
    message: '请选择完整',
  },
]
export default function Psychology() {
  const [form] = Form.useForm()
  const nav = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    nav('/evaluationdetail/scalenav')
    message.success('恭喜您，提交成功')
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
  return (
    <Commontitle title='心理问卷' className='psychology-wrapper'>
      <div className="question">
        在最近两周里，您感觉自己被以下症状所困扰的频率是？
      </div>
      <Form
      style={{padding:'0 10rem'}}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <Form.Item rules={commonRules} name="psychology1" label="1、做什么事都没兴趣，没意思。">
          <Radio.Group>
            <Space align='start' direction="vertical">
              <Radio value="完全不会">完全不会</Radio>
              <Radio value="超过一半天数">超过一半天数</Radio>
              <Radio value="几天">几天</Radio>
              <Radio value="每天">每天</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="psychology2" label="2、感到心情低落，抑郁，没希望。">
          <Radio.Group>
            <Space align='start' direction="vertical">
              <Radio value="完全不会">完全不会</Radio>
              <Radio value="超过一半天数">超过一半天数</Radio>
              <Radio value="几天">几天</Radio>
              <Radio value="每天">每天</Radio>
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
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Commontitle>
  )
}