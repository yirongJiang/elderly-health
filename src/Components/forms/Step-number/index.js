import { Radio, Form, Input, Button, message } from 'antd';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Commontitle from '../../../UI/Nav-head';
import './index.less'

import { topicNumbercontext, topicFormDatacontext } from '../../../store/topicNumbercontext'
import { useState } from 'react';
import { postWalk } from '../../../api';

const commonRules = [
  {
    required: true,
    message: '请填写完整'
  }
]

export default function Steps() {

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
    formdataContext.formDispatch({ type: 'STEPFORM', formdata: formdata })
  }

  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.stepFormdata })
  }, [])
  const kiloChange = () => {
    setFlag(0)

    sessionStorage.setItem('stepSelected', 1)
  }
  const stepChange = () => {
    setFlag(1)
    sessionStorage.setItem('kiloSelected', 1)
  }

  return (
    <Commontitle title='每日步行数' className='step-wrapper'>
      <Form
        onFieldsChange={formChange}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <h2 style={{ margin: '10rem', color: 'red', fontFamily: '宋体', fontWeight: 'bold' }}>每日步行情况 , 二选一进行填写</h2>
        <Form.Item >
          <Radio.Group defaultValue={sessionStorage.getItem('kiloSelected') ? 1 : null} disabled={flag === 0 ? true : sessionStorage.getItem('stepSelected') ? true : false} onChange={stepChange}>
            <Radio  value={1}>步行数（步）</Radio>
            <Form.Item  name={flag === 0 ? null : 'walkNum'}>
              <Input disabled={flag === 0 ? true : false} size='large' placeholder="请输入您的步数" style={{ border: 'none', borderBottom: '2px gray solid' }} />
            </Form.Item>
          </Radio.Group>
        </Form.Item>

        <Form.Item  >
          <Radio.Group defaultValue={sessionStorage.getItem('stepSelected') ? 1 : null} disabled={flag === 1 ? true : sessionStorage.getItem('kiloSelected') ? true : false}>
            <Radio  onChange={kiloChange} value={1}>公里数（km）</Radio>
            <Form.Item name={flag === 1 ? null : 'kilometreNum'}>
              <Input disabled={flag === 1 ? true : false} size='large' placeholder="请输入您的公里数" style={{ border: 'none', borderBottom: '2px gray solid' }} />
            </Form.Item>
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
