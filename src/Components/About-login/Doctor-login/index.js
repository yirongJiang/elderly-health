import { Button, Form, Input } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
<<<<<<< HEAD
import './index.less'

export default function Doctorlogin() {
  const nav=useNavigate()
  const [form] = Form.useForm()
  const onFinish = (values) => {
    console.log('Success:', values);
    nav('/home',{replace: true,state:{isScusses:false}})
  };


=======
import { login } from '../../../api'
import './index.less'

export default function Doctorlogin() {
  const nav = useNavigate()
  const [form] = Form.useForm()
  const onFinish = async (values) => {
    
    const result = await login({
      passWord: "123456t",
      phone: "13167827468",
      role: "0",
      userName: "admin"
    })
    console.log(result.body)
    localStorage.setItem('X-Auth-Token',result.body)
    nav('/home', { replace: true, state: { isScusses: false } })
  };

>>>>>>> main
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='doctorlogin-wrapper'>
      <Button type='primary' className='docbtn'>
        医生登录
      </Button>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
        >
          <Input size='large' placeholder="请输入用户名" />
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
          <Input.Password size='large' placeholder="请输入密码" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 2,
            span: 156,
          }}
        >
<<<<<<< HEAD
          <Button  type="primary" htmlType="submit">
=======
          <Button type="primary" htmlType="submit">
>>>>>>> main
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
