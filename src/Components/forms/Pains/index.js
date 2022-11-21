import { Cascader, Select, Input, Form, Rate, Button, message, Space } from 'antd';
import { MehOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Commontitle from '../../../UI/Nav-head';
import pains from '../../../assect/img/pains.png'
import './index.less'
import { topicNumbercontext, topicFormDatacontext } from '../../../store/topicNumbercontext'

const { Option } = Select;
const commonRules = [
  {
    required: true,
    message: '请填写完整'
  }
]
export default function Painful() {
  const itemStyle = {
    display: 'inline-block',
    width: '120rem',
    marginLeft: 'calc(5%)'
  }
  const nav = useNavigate()
  const [form] = Form.useForm()

  const topicContext = useContext(topicNumbercontext)
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    nav(-1)
    topicContext.numberDispatch({ type: 'PAINSADD', selectedNumber: 1 })
    message.success('恭喜您，提交成功')
  };
  const formItemLayout = {
    labelCol: {
      span: 2,
      offset: 1
    },
    wrapperCol: {
      span: 9,
      offset: 1
    },
  };



  return (
    <Commontitle title='疼痛报告' className='painful-wrapper'>
      <div className="question">疼痛部位 : </div>
      <hr />
      <Form
        layout='horizontal'
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <Form.Item
          label="部位1: :"
        >
          <Form.Item
            name="部位1具体部位"
            rules={commonRules}
            style={itemStyle}

          >
            <Select placeholder="无" allowClear>
              <Option value="无"></Option>
              <Option value="1.头部"></Option>
              <Option value="2.颈部"></Option>
              <Option value="3.肩部"></Option>
              <Option value="4.上臂"></Option>
              <Option value="5.手肘"></Option>
              <Option value="6.手腕"></Option>
              <Option value="7.手"></Option>
              <Option value="8.胸部"></Option>
              <Option value="9.腹部"></Option>
              <Option value="10.背部"></Option>
              <Option value="11.腰部"></Option>
              <Option value="12.臂部"></Option>
              <Option value="13.髋部"></Option>
              <Option value="14.大腿"></Option>
              <Option value="15.膝"></Option>
              <Option value="16.小腿"></Option>
              <Option value="17.踝"></Option>
              <Option value="18.足"></Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="部位1方位"
            rules={commonRules}
            style={itemStyle}

          >
            <Select placeholder="无" allowClear>
              <Option value="无"></Option>
              <Option value="左"></Option>
              <Option value="右"></Option>
              <Option value="双侧"></Option>
            </Select>
          </Form.Item>
        </Form.Item>

        <Form.Item label="疼痛程度： ： ">
          <Form.Item rules={commonRules} name="疼痛程度1"  >
            <Rate style={{ marginLeft: '4%' }} count={10} character={<MehOutlined />} />
          </Form.Item>
          <img style={{ marginLeft: '3%' }} src={pains} alt="" />
        </Form.Item>
        <hr />

        <Form.Item
          label="部位2 ：："
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            name="部位2具体部位"
            rules={commonRules}
            style={itemStyle}
          >
            <Select placeholder="无" allowClear>
              <Option value="无"></Option>
              <Option value="1.头部"></Option>
              <Option value="2.颈部"></Option>
              <Option value="3.肩部"></Option>
              <Option value="4.上臂"></Option>
              <Option value="5.手肘"></Option>
              <Option value="6.手腕"></Option>
              <Option value="7.手"></Option>
              <Option value="8.胸部"></Option>
              <Option value="9.腹部"></Option>
              <Option value="10.背部"></Option>
              <Option value="11.腰部"></Option>
              <Option value="12.臂部"></Option>
              <Option value="13.髋部"></Option>
              <Option value="14.大腿"></Option>
              <Option value="15.膝"></Option>
              <Option value="16.小腿"></Option>
              <Option value="17.踝"></Option>
              <Option value="18.足"></Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="部位2方位"
            rules={commonRules}
            style={itemStyle}
          >
            <Select placeholder="无" allowClear>
              <Option value="无"></Option>
              <Option value="左"></Option>
              <Option value="右"></Option>
              <Option value="双侧"></Option>
            </Select>
          </Form.Item>
        </Form.Item>

        <Form.Item label="疼痛程度 ： ：">
          <Form.Item rules={commonRules} style={{ marginLeft: '4%' }} name="疼痛程度2"><Rate count={10} character={<MehOutlined />} /></Form.Item>
          <img style={{ marginLeft: '3%' }} src={pains} alt="" />
        </Form.Item>
        <hr />
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Form.Item
                  label="部位1: :"
                >
                  <Form.Item
                    name="部位1具体部位"
                    rules={commonRules}
                    style={itemStyle}

                  >
                    <Select placeholder="无" allowClear>
                      <Option value="无"></Option>
                      <Option value="1.头部"></Option>
                      <Option value="2.颈部"></Option>
                      <Option value="3.肩部"></Option>
                      <Option value="4.上臂"></Option>
                      <Option value="5.手肘"></Option>
                      <Option value="6.手腕"></Option>
                      <Option value="7.手"></Option>
                      <Option value="8.胸部"></Option>
                      <Option value="9.腹部"></Option>
                      <Option value="10.背部"></Option>
                      <Option value="11.腰部"></Option>
                      <Option value="12.臂部"></Option>
                      <Option value="13.髋部"></Option>
                      <Option value="14.大腿"></Option>
                      <Option value="15.膝"></Option>
                      <Option value="16.小腿"></Option>
                      <Option value="17.踝"></Option>
                      <Option value="18.足"></Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="部位1方位"
                    rules={commonRules}
                    style={itemStyle}

                  >
                    <Select placeholder="无" allowClear>
                      <Option value="无"></Option>
                      <Option value="左"></Option>
                      <Option value="右"></Option>
                      <Option value="双侧"></Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="疼痛程度 ： ：">
                    <Form.Item rules={commonRules} style={{ marginLeft: '4%' }} name="疼痛程度2"><Rate count={10} character={<MehOutlined />} /></Form.Item>
                    <img style={{ marginLeft: '3%' }} src={pains} alt="" />
                  </Form.Item>
                  <Button style={{ width: '40vw' }} type="dashed" onClick={() => remove(name)} block icon={<MinusCircleOutlined />}>
                    删除部位
                  </Button>
                  <hr />
                </Form.Item>
              ))}
              <Form.Item wrapperCol={{
                span: 2,
                offset: 0

              }}>
                <Button className='add-btn' style={{ width: '40vw' }} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  添加部位
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item
          style={{ width: '80%' }}
          wrapperCol={{
            span: 9,
            offset: 7
          }}
        >
          <Button className='submit-btn' type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>

    </Commontitle >
  )
}
