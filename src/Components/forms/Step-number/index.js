import { Radio, Form, Input, Button, message, Space } from 'antd';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Commontitle from '../../../UI/Nav-head';
import './index.less'

import { topicNumbercontext, topicFormDatacontext, basicFormContext } from '../../../store/topicNumbercontext'
import { useState } from 'react';
import { postWalk } from '../../../api';

const commonRules = [
  {
    required: true,
    message: '请填写完整'
  }
]

export default function Steps() {
  const formRef = React.useRef(null);
  const [flag, setFlag] = useState()
  const nav = useNavigate()
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    values['type'] = `${flag}`
    console.log('Received values of form: ', values);
    const res = await postWalk(values)
    console.log(res)
    topicContext.numberDispatch({ type: 'TOTALADD', selectedNumber: 1 })
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

  const topicContext = useContext(topicNumbercontext)
  const formdataContext = useContext(topicFormDatacontext)


  const formChange = (e) => {
    const value = form.getFieldsValue(true)
    let formdata = value
    console.log(value)
    let selectedNumber = Object.keys(value).length
    console.log(selectedNumber)
    topicContext.numberDispatch({ type: 'STEPADD', selectedNumber: 1 })
   
  }

  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.stepFormdata })
  }, [])

  const radioChange = (e) => {
    console.log(e.target.value)
    formRef.current?.resetFields();
    setFlag(e.target.value)
  }

  return (
    <Commontitle title='每日步行数' className='step-wrapper'>
      <Form
        ref={formRef}
        onFieldsChange={formChange}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <h2 style={{ margin: '10rem', color: 'red', fontFamily: '宋体', fontWeight: 'bold' }}>每日步行情况 , 二选一进行填写</h2>

        <Form.Item >
          <Radio.Group onChange={radioChange} >
            <Space direction="vertical">
              <Radio value={1}>步行数（步）</Radio>
              <Form.Item name='number' rules={[
                {
                  pattern: /^[0-9]{1,}$/,

                  message: '请填写完整',
                }
              ]} >
                <Input type="text" />
              </Form.Item>

              <Radio value={2}>公里数（km</Radio>
              <Form.Item name='kilo' hasFeedback rules={[
                {
                  pattern: /^[0-9]{1,2}$/,

                  message: '请填写完整',
                }
              ]}>
                <Input type="text" />
              </Form.Item>

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

    </Commontitle >
  )
}
