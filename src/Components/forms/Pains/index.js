import { Select, Form, Rate, Button, message } from 'antd';
import { MehOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Commontitle from '../../../UI/Nav-head';
import pains from '../../../assect/img/pains.png'
import './index.less'
import { topicNumbercontext } from '../../../store/topicNumbercontext'
import { useState } from 'react';
import { postPain } from '../../../api';

const position = [
  {
    label: "1.头部",
    value: "1",
  },
  {
    label: "2.颈部",
    value: "2",
  },
  {
    label: "3.肩部",
    value: "3",
  },
  {
    label: "4.上臂",
    value: "4",
  },
  {
    label: "5.手肘",
    value: "5",
  },
  {
    label: "6.手腕",
    value: "6",
  },
  {
    label: "7.手",
    value: "7",
  },
  {
    label: "8.胸部",
    value: "8",
  },
  {
    label: "9.腹部",
    value: "9",
  },
  {
    label: "10.背部",
    value: "10",
  },
  {
    label: "11.腰部",
    value: "11",
  },
  {
    label: "12.臂部",
    value: "12",
  },
  {
    label: "13.髋部",
    value: "13",
  },
  {
    label: "14.大腿",
    value: "14",
  },
  {
    label: "15.膝",
    value: "15",
  },
  {
    label: "16.小腿",
    value: "16",
  },
  {
    label: "17.踝",
    value: "17",
  },
  {
    label: "18.足",
    value: "18",
  },
]
const detailPosition = [
  {
    label: "左",
    value: "1",
  },
  {
    label: "右",
    value: "2",
  },
  {
    label: "双侧",
    value: "3",
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
  const [number, setNumber] = useState(1)

  const onFinish = async(values) => {
    const res=await postPain(values) 
    console.log(res)
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

        <Form.List name="pain">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item key={field.key} >
                  <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, curValues) =>
                      prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                    }
                  >
                    {() => (
                      <Form.Item
                        style={itemStyle}
                        {...field}
                        label={`部位${++index}`}
                        name={[field.name, `position`]}
                      >
                        <Select options={position} placeholder="无" />
                      </Form.Item>

                    )}
                  </Form.Item>
                  <Form.Item
                    style={{ display: 'inline-block', marginTop: '10vw', marginLeft: '10vw', width: ' 120rem' }}
                    {...field}
                    name={[field.name, `side`]}
                  >
                    <Select options={detailPosition} placeholder="无" />
                  </Form.Item>

                  <Form.Item label="疼痛程度 ： ：" style={{ marginLeft: '4%' }}>
                    <Form.Item style={{ marginLeft: '4%' }} name={[field.name, `level`]} ><Rate count={10} character={<MehOutlined />} /></Form.Item>
                    <img style={{ marginLeft: '3%' }} src={pains} alt="" />
                  </Form.Item>

                  <Button onClick={() => remove(field.name)} icon={<MinusCircleOutlined />}>删除部位</Button>
                  <hr />
                </Form.Item>

              ))}


              <Form.Item wrapperCol={{
                span: 2,
                offset: 0
              }}>
                <Button className='add-btn' style={{ width: '40vw' }} type="dashed" onClick={() => { setNumber((prevstate) => prevstate++); add(); }} block icon={<PlusOutlined />}>
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
