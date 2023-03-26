import { Button, Form, Radio, Space } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import Commontitle from '../../../UI/Nav-head';
import Checkfive from './check5';
import { topicNumbercontext, topicFormDatacontext } from '../../../store/topicNumbercontext'
import './index.less';



const commonRules = [
  {
    required: true,
    message: '请填写完整'
  }
]
export default function Eyesight() {
  const [nextStep, setNextStep] = useState(0)
  const [form] = Form.useForm()
  const onFinish = async (values) => {
    setNextStep(1)
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

  const topicContext = useContext(topicNumbercontext)
  const formdataContext = useContext(topicFormDatacontext)

  const formChange = (e) => {
    const value = form.getFieldsValue(true)
    let formdata = value
    let selectedNumber = Object.keys(value).length
    topicContext.numberDispatch({ type: 'EYESIGHTADD', selectedNumber: selectedNumber })
    formdataContext.formDispatch({ type: 'EYESIGHTFORM', formdata: formdata })
  }
  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.eyesightFormdata })
  }, [])

  return (
    <Commontitle title='视力测试' noBack back className='eyesight-wrapper'>
      {nextStep === 0 ? <Form
       scrollToFirstError
        onFieldsChange={formChange}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <Form.Item rules={commonRules} name="qone" label="1.您是否有因视力不佳有走路困难吗(即使配戴眼镜) ?">
          <Radio.Group>
            <Space size={45}>
              <Radio value="1">是的</Radio>
              <Radio value="2">有时</Radio>
              <Radio value="3">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qtwo" label="2.你看东西、阅读、看电视有困难吗(即使配戴眼镜) ?">
          <Radio.Group>
            <Space size={45}>
              <Radio value="1">是的</Radio>
              <Radio value="2">有时</Radio>
              <Radio value="3">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qthree" label="3.您是否有被诊断过白内障？">
          <Radio.Group>
            <Space size={160}>
              <Radio value="1">是的</Radio>
              <Radio value="3">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qfour" label="4.您是否有进行过白内障手术？ ">
          <Radio.Group>
            <Space size={160}>
              <Radio value="1">是的</Radio>
              <Radio value="3">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qfive" label="5.您是否有被诊断过其他眼部疾病？ ">
          <Radio.Group>
            <Space size={160} >
              <Radio value="1">是的</Radio>
              <Radio value="3">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          style={{ width: '80%' }}
          wrapperCol={{
            span: 9,
            offset: 7
          }}
        >
          <Button className='next-button' type="primary" htmlType="submit">
            下一步
          </Button>
        </Form.Item>
      </Form> : <Checkfive />}

    </Commontitle>
  )
}
