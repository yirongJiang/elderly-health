import { Button, Col, Form, Input, message, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api';
import './index.less'

export default function Register() {
  const nav = useNavigate()
  const onFinish = async(values) => {
    console.log('Success:', {...values,role:'1'})
    const res=await register( {values,role:'1'})
    console.log(res)
    message.success('恭喜您注册成功')
    nav(-1)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='register-wrapper'>
      <Button type='primary'>普通用户注册</Button>
      <Form
        name="普通用户注册"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
            <Form.Item name='phone'>
              <Input placeholder='请输入您的手机号' />
            </Form.Item>
          </Col>
        </Form.Item>

        <Form.Item
          name="passWord"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >

          <Col span={12}>
             <Form.Item>
            <Input/>
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
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
