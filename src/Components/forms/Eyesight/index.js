import { Button, Form, Radio, Space } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
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
    <Commontitle title='视力测试' className='eyesight-wrapper'>
      {nextStep === 0 ? <Form
        onFieldsChange={formChange}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <Form.Item rules={commonRules} name="eyesight1" label="1.您是否有因视力不佳有走路困难吗(即使配戴眼镜) ?">
          <Radio.Group>
            <Space size={45}>
              <Radio value="是的">是的</Radio>
              <Radio value="有时">有时</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="eyesight2" label="2.你看东西、阅读、看电视有困难吗(即使配戴眼镜) ?">
          <Radio.Group>
            <Space size={45}>
              <Radio value="是的">是的</Radio>
              <Radio value="有时">有时</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="eyesight3" label="3.您是否有被诊断过白内障？">
          <Radio.Group>
            <Space size={160}>
              <Radio value="是的">是的</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="eyesight4" label="4.您是否有进行过白内障手术？ ">
          <Radio.Group>
            <Space size={160}>
              <Radio value="是的">是的</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="eyesight5" label="5.您是否有被诊断过其他眼部疾病？ ">
          <Radio.Group>
            <Space size={160} >
              <Radio value="是的">是的</Radio>
              <Radio value="不是">不是</Radio>
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
