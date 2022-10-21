import React, { useContext, useEffect, useState } from 'react'
import { Form, Radio, Button } from 'antd';
import './index.less'
import { useNavigate } from 'react-router-dom';
import Commontitle from '../../../../UI/Nav-head';
import { topicNumbercontext, topicFormDatacontext } from '../../../../store/topicNumbercontext';


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
const commonRuls = [
  {
    required: true,
    message: '请填写完整',
  },
]
export default function Cognizefirst() {
  const nav = useNavigate()
  const [form] = Form.useForm()
  const onFinish = (values) => {
    nav('/evaluationdetail/cognize/second')
    console.log('Received values of form: ', values);
  };

  const topicContext = useContext(topicNumbercontext)
  const formdataContext = useContext(topicFormDatacontext)

  const formChange = (e) => {
    const value = form.getFieldsValue(true)
    let formdata = value
    let selectedNumber = Object.keys(value).length
    topicContext.numberDispatch({ type: 'COGNIZEADD', selectedNumber: selectedNumber })
    formdataContext.formDispatch({ type: 'COGNIZEFORM', formdata: formdata })
  }

  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.cognizeFormdata })
  }, [])

  return (
    <Commontitle title='自制认知筛查表' className='cognizefirst-wrapper'>
      <Form
        onFieldsChange={formChange}
        form={form}
        name="自制认知筛查表"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <Form.Item
          rules={commonRuls} name="cognizefirst-group" label="1. 现在是上午还是下午？">
          <Radio.Group>
            <Radio value="上午">上午</Radio>
            <Radio value="下午">下午</Radio>
            <Radio value="晚上">晚上</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={commonRuls} name="cognizesecond-group" label="2. 石头是否能浮在水面？">
          <Radio.Group>
            <Radio value="上午">上午</Radio>
            <Radio value="下午">下午</Radio>
            <Radio value="晚上">晚上</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={commonRuls}
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            下一步
          </Button>
        </Form.Item>

      </Form>

    </Commontitle>
  )
}
