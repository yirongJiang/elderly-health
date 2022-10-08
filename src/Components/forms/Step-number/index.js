import { Radio, Form, Input, Button, message } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Commontitle from '../../../UI/Nav-head';
import './index.less'

const commonRules=[
  {
    required:true,
    message:'请填写完整'
  }
]
export default function Steps() {
  const nav = useNavigate()
  const [form]=Form.useForm()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    nav(-1)
    message.success('恭喜您，提交成功！')
  };
  const formItemLayout = {
    labelCol: {
      span: 6,
      offset: 2
    },
    wrapperCol: {
      span: 14,
      offset: 2
    },
  };
  return (
    <Commontitle title='每日步行数' className='step-wrapper'>
      <Form
      form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          'input-number': 3,
          'checkbox-group': ['A', 'B'],
          rate: 3.5,
        }}
      >
        <Form.Item rules={commonRules} name="每日步行情况" label="每日步行情况">
          <Radio.Group>
            <Radio value="步行数（步）">步行数（步）</Radio>
            <Radio value="公里数（km）">公里数（km）</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="公里或者步数" >
          <Input size='large' placeholder="请输入您的步数或" style={{ border: 'none', borderBottom: '2px gray solid' }} />
        </Form.Item>
        <Form.Item rules={commonRules}
          style={{ width: '80%' }}
          wrapperCol={{
            span: 9,
            offset:7
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
