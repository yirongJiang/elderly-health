import { Alert, Button, Form, message, Radio, Space, Spin } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Commontitle from '../../../UI/Nav-head';
import './index.less';
import { topicNumbercontext, topicFormDatacontext } from '../../../store/topicNumbercontext';
import { postSwallow } from '../../../api';


const commonRules = [
  {
    required: true,
    message: '请填写完整'
  }
]
export default function Swallow() {
  const [form] = Form.useForm()
  const [changePage, setChangePage] = useState(0)
  const nav = useNavigate()
  const onFinish = async (values) => {
    await postSwallow(values)
    setChangePage(1)
    topicContext.numberDispatch({ type: 'TOTALADD', selectedNumber: 1 })
    setTimeout(() => {
      nav('/evaluationdetail/scalenav', { replace: true })
      message.success('恭喜您，提交成功')
    }, 1000);
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
    <Commontitle title='吞咽二便功能：' navagation='/evaluationdetail/scalenav' className='swallow-wrapper'>
      <div className="question">
        请自我汇报最近两周的情况：
      </div>
   {changePage===0? 
     <Form
        scrollToFirstError
        onFieldsChange={formChange}
        style={{ padding: '0 10rem' }}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <Form.Item rules={commonRules} name="qone" label="1、进食或喝水时呛咳或其他吞咽障碍">
          <Radio.Group>
            <Space align='start' size={200}>
              <Radio value="0">无</Radio>
              <Radio value="1">有</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qtwo" label="2、非经口进食">
          <Radio.Group>
            <Space align='start' size={200}>
              <Radio value="0">无</Radio>
              <Radio value="1">有</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qthree" label="3、尿频、尿急、尿不尽或尿失禁等小便控制障碍">
          <Radio.Group>
            <Space align='start' size={200}>
              <Radio value="0">无</Radio>
              <Radio value="1">有</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRules} name="qfour" label="4、便秘或大便失禁等大便控制障碍">
          <Radio.Group>
            <Space align='start' size={200}>
              <Radio value="0">无</Radio>
              <Radio value="1">有</Radio>
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
    </Commontitle>
  )
}
