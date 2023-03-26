import { Radio, Form, Input, Button, message, Space, Spin, Alert } from 'antd';
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
  const formRef = React.useRef(null);
  const [flag, setFlag] = useState()
  const nav = useNavigate()
  const [form] = Form.useForm()
  const [changePage, setChangePage] = useState(0)
  const onFinish = async (values) => {
    values['type'] = `${flag}`
    await postWalk(values)
    topicContext.numberDispatch({ type: 'TOTALADD', selectedNumber: 1 })
    setChangePage(1)
    setTimeout(() => {
      nav('/evaluationdetail/scalenav')
      message.success('恭喜您，提交成功')
    }, 1000);
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
    topicContext.numberDispatch({ type: 'STEPADD', selectedNumber: 1 })

  }

  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.stepFormdata })
  }, [])

  const radioChange = (e) => {
    formRef.current?.resetFields();
    setFlag(e.target.value)
  }

  return (
    <Commontitle title='每日步行数' back className='step-wrapper'>
    {changePage===0?
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
              <Radio value={0}>步行数（步）</Radio>
              <Form.Item name='walkNum' rules={[
                {
                  pattern: /^[0-9]{1,}$/,

                  message: '请填写完整',
                }
              ]} >
                <Input type="text" />
              </Form.Item>

              <Radio value={1}>公里数（km</Radio>
              <Form.Item name='kilometreNum' hasFeedback rules={[
                {
                  pattern: /^((\d{1,2})(\.[0-9]{1,2})?$)/,
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
      </Form>: <Spin tip="Loading...">
        <Alert style={{ height: '60vh' }}
          message="正在上传，请勿重复提交"
          type="info"
        />
      </Spin>}

    </Commontitle >
  )
}
