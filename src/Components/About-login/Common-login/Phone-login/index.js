import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../../api';
import './index.less'

export default function Phonelogin() {
  const nav = useNavigate()
  const onFinish = async (values) => {
    console.log('Success:', values);
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='phonelogin-wrapper'>
      <Button type='primary'>普通用户登陆</Button>
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
          name="姓名"
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
          name="phone"
          rules={[
            {
              required: true,
              message: '请输入您的手机号',
            },
          ]}
        >
          <Col span={12}>
            <Form.Item name='手机号'>
              <Input placeholder='请输入您的手机号' />
            </Form.Item>
          </Col>
        </Form.Item>

        <Form.Item
          name="passWord"
          rules={[
            {
              required: true,
              message: '请输入您的密码',
            },
          ]}
        >
          <Col span={12}>
            <Form.Item name='密码'>
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
