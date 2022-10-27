import { Radio, Form, Input, Button, message } from 'antd';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Commontitle from '../../../UI/Nav-head';
import './index.less'

import { topicNumbercontext, topicFormDatacontext } from '../../../store/topicNumbercontext'

const commonRules = [
  {
    required: true,
    message: '请填写完整'
  }
]
export default function Steps() {
  const nav = useNavigate()
  const [form] = Form.useForm()
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

  const topicContext = useContext(topicNumbercontext)
  const formdataContext = useContext(topicFormDatacontext)

  const formChange = (e) => {
    const value = form.getFieldsValue(true)
    let formdata = value
    console.log(value)
    let selectedNumber = Object.keys(value).length
    console.log(selectedNumber)
    topicContext.numberDispatch({ type: 'STEPADD', selectedNumber: selectedNumber })
    formdataContext.formDispatch({ type: 'STEPFORM', formdata: formdata })
  }

  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.stepFormdata })
  }, [])

  return (
    <Commontitle title='每日步行数' className='step-wrapper'>
      <Form
        onFieldsChange={formChange}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <h2 style={{margin:'10rem',color:'red',fontFamily:'宋体',fontWeight:'bold'}}>每日步行情况 , 二选一进行填写</h2>
        <Form.Item  name="步行情况">
          <Radio.Group>
            <Radio value="步行">步行数（步）</Radio>
            <Form.Item name='具体步数'>
              <Input size='large' placeholder="请输入您的步数" style={{ border: 'none', borderBottom: '2px gray solid' }} />
            </Form.Item>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="公里情况" >
          <Radio.Group>
            <Radio value="公里">公里数（km）</Radio>
            <Form.Item name='具体公里数'>
              <Input size='large' placeholder="请输入您的步数或公里数" style={{ border: 'none', borderBottom: '2px gray solid' }} />
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
