import { Button, Form, message, Radio } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { postEyesight } from '../../../../api';
import { topicNumbercontext, topicFormDatacontext } from '../../../../store/topicNumbercontext'

export default function Checkfive() {
  const [size, setSize] = useState(260)
  const nav = useNavigate()
  const [form] = Form.useForm()
  const {eyesightFormdata} = useContext(topicFormDatacontext)

  const onFinish = async(values) => {
    const finalValues={...eyesightFormdata,...values}
    console.log(finalValues)
    await postEyesight(finalValues)
    message.success("恭喜您，提交成功")
    nav('/evaluationdetail/scalenav')
  };

  const formItemLayout = {
    labelCol: {
      span: 3,
      offset: 1
    },
    wrapperCol: {
      span: 16,
      offset: 2
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSize(size - 30)
      if (size < 130) {
        setSize(260)
      }
    }, 1000);
    return () => {
      clearTimeout(timer)
    }
  }, [size])

  const topicContext = useContext(topicNumbercontext)
  const formChange = (e) => {
    topicContext.numberDispatch({ type: 'EYESIGHTADD', selectedNumber: 6 })
  }

  return (
    <div className='five-wrapper'>
      <Form
        onFieldsChange={formChange}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <Form.Item rules={[{ required: true, message: '请填写完整' }]} name="qsix" label="6.您是否看得清逐渐缩小的'5' ? ">
          <Radio.Group>
            <Radio value="1">是的</Radio>
            <Radio value="3">不是</Radio>
          </Radio.Group>
        </Form.Item>

        <div style={{ fontSize: `${size}px`, position: 'fixed ', top: '30%', left: '35%' }}>5</div>

        <Form.Item
          style={{ width: '80%' }}
          wrapperCol={{
            span: 9,
            offset: 7
          }}
        >
          <Button className='fifth-button' type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
