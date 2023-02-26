import { Col, Select, Input, Form, Rate, Button, message, Space } from 'antd';
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
const position = [
  {
    label: "无",
    value: "无",
  },
  {
    label: "1.头部",
    value: "1.头部",
  },
  {
    label: "2.颈部",
    value: "2.颈部",
  },
  {
    label: "3.肩部",
    value: "3.肩部",
  },
  {
    label: "4.上臂",
    value: "4.上臂",
  },
  {
    label: "5.手肘",
    value: "5.手肘",
  },
  {
    label: "6.手腕",
    value: "6.手腕",
  },
  {
    label: "7.手",
    value: "7.手",
  },
  {
    label: "8.胸部",
    value: "8.胸部",
  },
  {
    label: "9.腹部",
    value: "9.腹部",
  },
  {
    label: "10.背部",
    value: "10.背部",
  },
  {
    label: "11.腰部",
    value: "11.腰部",
  },
  {
    label: "12.臂部",
    value: "12.臂部",
  },
  {
    label: "13.髋部",
    value: "13.髋部",
  },
  {
    label: "14.大腿",
    value: "14.大腿",
  },
  {
    label: "15.膝",
    value: "15.膝",
  },
  {
    label: "16.小腿",
    value: "16.小腿",
  },
  {
    label: "17.踝",
    value: "17.踝",
  },
  {
    label: "18.足",
    value: "18.足",
  },
]
const detailPosition = [
  {
    label: "左",
    value: "左",
  },
  {
    label: "右",
    value: "右",
  },
  {
    label: "双侧",
    value: "双侧",
  },
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
  console.log(values)
    console.log('Received values of form: ',);
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
        style={{
          maxWidth: 600,
        }}
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

            style={itemStyle}
          >
            <Select options={position} placeholder="无" />
          </Form.Item>

          <Form.Item
            name="部位1方位"

            style={itemStyle}
          >
            <Select options={detailPosition} placeholder="无" allowClear>
            </Select>
          </Form.Item>

        </Form.Item>

        <Form.Item label="疼痛程度： ： ">
          <Form.Item name="疼痛程度1"  >
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
            style={itemStyle}
          >
            <Select options={position} placeholder="无" />
          </Form.Item>

          <Form.Item
            name="部位2方位"
            style={itemStyle}
          >
            <Select options={detailPosition} placeholder="无" allowClear>
            </Select>
          </Form.Item>

          <Form.Item label="疼痛程度 ： ：">
            <Form.Item style={{ marginLeft: '4%' }} name="疼痛程度2"><Rate count={10} character={<MehOutlined />} /></Form.Item>
            <img style={{ marginLeft: '3%' }} src={pains} alt="" />
          </Form.Item>

        </Form.Item>
        <hr />
        <Form.List name="newPosition">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Form.Item
                  key={key}

                >

                  <Form.Item
                    {...restField}
                    name={[name, '新增部位']}
                    rules={commonRules}
                    style={itemStyle}
                  >

                    <Select options={position} placeholder="无" />
                  </Form.Item>

                  <Form.Item
                    style={itemStyle}
                    {...restField}
                    name={[name, '新增的具体方向']}
                    rules={commonRules}
                  >
                    <Select options={detailPosition} placeholder="无" >
                    </Select>
                  </Form.Item>



                  <Form.Item style={{ marginLeft: '4%' }} name="新增的疼痛程度疼痛程度">
                    <Rate count={10} character={<MehOutlined />} />
                  </Form.Item>
                  <img style={{ marginLeft: '3%' }} src={pains} alt="" />

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
