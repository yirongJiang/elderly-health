import { Button, Form, Radio, Space } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Commontitle from '../../../UI/Nav-head';
import './index.less'

export default function Hearing() {
  const [form] = Form.useForm()
  const nav = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    nav('/home', { state: { isSuccess: true } })
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
  return (
    <Commontitle title='听力筛查表' className='hearing-wrapper'>
      <Form
        style={{ padding: '0 10rem' }}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <Form.Item name="hearing1" label="1.在与人初次见面时，听力问题是否会使您感到尴尬？">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="是的">是的</Radio>
              <Radio value="有时">有时</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <hr />

        <Form.Item name="hearing2" label="2.在和家人交谈时，听力问题是否会使您感到沮丧？">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="是的">是的</Radio>
              <Radio value="有时">有时</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <hr />

        <Form.Item name="hearing3" label="3.有人对您低声耳语时，听力问题是否会使您感到困难？ ">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="是的">是的</Radio>
              <Radio value="有时">有时</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <hr />

        <Form.Item name="hearing4" label="4.您是否觉得有听力问题是一种残疾？ ">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="是的">是的</Radio>
              <Radio value="有时">有时</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <hr />
        <Form.Item name="hearing5" label="5.在探亲访友时，听力问题是否会使您感到困难？ ">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="是的">是的</Radio>
              <Radio value="有时">有时</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <hr />
        <Form.Item name="hearing6" label="6.是否由于听力问题，您不愿像以往那样经常出席正式的场合了（比如会议、仪式等等）？">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="是的">是的</Radio>
              <Radio value="有时">有时</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <hr />
        <Form.Item name="hearing7" label="7.听力问题会引起您与家人的争吵吗？ ">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="是的">是的</Radio>
              <Radio value="有时">有时</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <hr />
        <Form.Item name="hearing8" label="8.在看电视或听广播时，听力问题是否会使您感到困难？">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="是的">是的</Radio>
              <Radio value="有时">有时</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <hr />
        <Form.Item name="hearing9" label="9.您是否觉得听力问题限制或者阻碍了您的个人生活或社会交往？">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="是的">是的</Radio>
              <Radio value="有时">有时</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <hr />
        <Form.Item name="hearing10" label="10.在餐馆与亲戚朋友聚餐时，听力问题是否会使您感到困难？">
          <Radio.Group>
            <Space align='start' size={60}>
              <Radio value="是的">是的</Radio>
              <Radio value="有时">有时</Radio>
              <Radio value="不是">不是</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <hr />

        <Form.Item
          style={{ width: '80%' }}
          wrapperCol={{
            span: 9,
            offset: 7
          }}
        >
          <Button style={{position:'static'}} type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Commontitle>
  )
}
