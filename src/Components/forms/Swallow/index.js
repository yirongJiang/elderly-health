import { Button, Form, message, Radio, Space } from 'antd';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Commontitle from '../../../UI/Nav-head';
import './index.less';
import { topicNumbercontext, topicFormDatacontext } from '../../../store/topicNumbercontext';


const commonRules = [
  {
    required: true,
    message: '请填写完整'
  }
]
export default function Swallow() {
  const [form] = Form.useForm()
  const nav = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    nav('/evaluationdetail/scalenav')
    message.success('恭喜您，提交成功')
  };
  const formItemLayout = {
    labelCol: {
      span: 6,
      offset: 0,
    },
    wrapperCol: {
      span: 13,
      offset: 1
    },
  };

  const topicContext = useContext(topicNumbercontext)
  const formdataContext = useContext(topicFormDatacontext)

  const formChange = (e) => {
    const value = form.getFieldsValue(true)
    let formdata = value
    let selectedNumber = Object.keys(value).length
    topicContext.numberDispatch({ type: 'SWALLOWADD', selectedNumber: selectedNumber })
    formdataContext.formDispatch({ type: 'SWALLOWFORM', formdata: formdata })
  }
  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.swallowFormdata })
  }, [])


  return (
    <Commontitle title='吞咽二便功能：' className='swallow-wrapper'>
      <div className="question">
        请自我汇报最近两周的情况：
      </div>
      <Form
        onFieldsChange={formChange}
        style={{ padding: '0 10rem' }}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <Form.Item rules={commonRules} name="swallow1" label="1、进食或喝水时呛咳或其他吞咽障碍">
          <Radio.Group>
            <Space align='start' size={200}>
              <Radio value="无">无</Radio>
              <Radio value="有">有</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="swallow2" label="2、非经口进食">
          <Radio.Group>
            <Space align='start' size={200}>
              <Radio value="无">无</Radio>
              <Radio value="有">有</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="swallow3" label="3、尿频、尿急、尿不尽或尿失禁等小便控制障碍">
          <Radio.Group>
            <Space align='start' size={200}>
              <Radio value="无">无</Radio>
              <Radio value="有">有</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="swallow4" label="4、便秘或大便失禁等大便控制障碍">
          <Radio.Group>
            <Space align='start' size={200}>
              <Radio value="无">无</Radio>
              <Radio value="有">有</Radio>
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
    </Commontitle>
  )
}
