import { Button, Form, Radio } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.less'
export default function Checkfive() {
  const [size, setSize] = useState(260)
  const nav = useNavigate()
  const [form] = Form.useForm()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    nav('/home', { state: { isSuccess: true } })
  };
  const formItemLayout = {
    labelCol: {
      span: 3,
      offset: 2
    },
    wrapperCol: {
      span: 16,
      offset: 2
    },
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSize(size - 10)
      if (size < 180) {
        setSize(260)
      }
    }, 1000);
    return () => {
      clearTimeout(timer)
    }
  }, [size])
  return (
    <div className='five-wrapper'>
      <Form
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <Form.Item name="eyesight5" label="5.您是否看得清逐渐缩小的'5' ? ">
          <Radio.Group>
            <Radio value="是的">是的</Radio>
            <Radio value="不是">不是</Radio>
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
      </Form>
      <div style={{ fontSize: `${size}px`, position: 'fixed ', top: '30%', left: '35%' }}>5</div>
    </div>
  )
}
