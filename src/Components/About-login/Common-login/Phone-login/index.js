import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../../../../api';
import './index.less'

export default function Phonelogin() {
  const nav = useNavigate()
  const onFinish = async (values) => {
    // console.log('Success:', values);
    const res = await login({ ...values, role: '1' })
    console.log(res)
    localStorage.setItem('X-Auth-Token', res.body)
    nav('/home')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='phonelogin-wrapper'>
      <Button type='primary'>普通用户登录</Button>
      <Form
        name="普通用户登陆"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          rules={[
            {
              required: true,
              message: '请输入您的姓名',
            },
          ]}
        >
          <Col span={12}>
            <Form.Item name='userName'>
              <Input placeholder='请输入您的姓名' />
            </Form.Item>
          </Col>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请输入您的手机号',
            },
          ]}
        >
          <Col span={12}>
            <Form.Item name="phone">
              <Input placeholder='请输入您的手机号' />
            </Form.Item>
          </Col>
        </Form.Item>

        <Form.Item

          rules={[
            {
              required: true,
              message: '请输入您的密码',
            },
          ]}
        >
          <Col span={12}>
            <Form.Item name="passWord">
              <Input placeholder='请输入您的密码' />
            </Form.Item>
          </Col>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
      <div onClick={() => { nav('/initail/register') }} className='bottom'>注册</div>
    </div>
  )
}
