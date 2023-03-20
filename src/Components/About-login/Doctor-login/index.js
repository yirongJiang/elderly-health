import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../api'
import './index.less'

export default function Doctorlogin() {

  const nav = useNavigate()
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    console.log(values)
    const result = await login({
      passWord: `${values.passWord}`,
      phone: "test",
      role: "0",
      userName: `${values.username}`
    })
    console.log(result.body)
    const { userId } = result.body
    localStorage.setItem('adminUserId', userId)
    nav('/home', { replace: true, state: { isScusses: false } })
  };

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
          <Input.Password size='large' placeholder="请输入密码" autoComplete="off"/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 2,
            span: 156,
          }}
        >
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
