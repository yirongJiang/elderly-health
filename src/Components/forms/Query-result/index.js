import React, { useState } from 'react'
import Commontitle from '../../../UI/Nav-head'
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import './index.less'
import { Link, useNavigate } from 'react-router-dom';
import HomeBtn from '../../../UI/HeaderBtn';
import { postGetGrade } from '../../../api';
import dayjs from 'dayjs';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 14,
  },
}
const arr = ["四川大学华西医院", "南京医科大学", "中南大学湘雅医院", "中国康复研究中心"]
export default function Queryresult() {

  const [date, setDate] = useState()
  const [list, SetList] = useState([])
  const nav = useNavigate()
  const [form] = Form.useForm();
  const style = {
    height: '30rem'
  };

  const onFinish = async (values) => {
    console.log(values)
    const institution = String(arr.indexOf(values.institution) + 1)
    const res = await postGetGrade({
      "createDate": date,
      "name": values.name || '',
      "institution": institution,
      "userId": "",
      "adminUserId": localStorage.getItem('adminUserId'),
      "staff": ""
    })
    console.log(res)
    SetList(res.body)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const formChange = () => {
    console.log('first')
    console.log(form.getFieldsValue(true))
  }

  const onChange = (date, dateString) => {
    console.log(dateString);
    setDate(dateString)
  };

  return (
    <Commontitle title='查询评估结果' basicPage className='queryresult-wrapper'>
      <HomeBtn />
      <Form
        form={form}
        {...layout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="horizontal"
        onFieldsChange={formChange}
      >
        <Form.Item >
          <Row style={style}  >
            <Col offset={1} span={4}>
              <div>姓名</div>
            </Col>
            <Col span={12}>
              <Form.Item name='name'>
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item >
          <Row style={style}  >
            <Col offset={1} span={4}>
              <div>机构来源</div>
            </Col>
            <Col span={12}>
              <Form.Item name='institution'>
                <Select>
                  <Option value="四川大学华西医院">四川大学华西医院</Option>
                  <Option value="南京医科大学">南京医科大学</Option>
                  <Option value="中南大学湘雅医院">中南大学湘雅医院</Option>
                  <Option value="中国康复研究中心">中国康复研究中心</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item >
          <Row style={style}  >
            <Col offset={1} span={4}>
              <div>评估时间</div>
            </Col>
            <Col span={12}>
              <Form.Item name='createDate'>
                <DatePicker onChange={onChange} />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item style={{ marginTop: '2vh' }} >
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>

      <div className="result-wrapper">
        <table>
          <thead>
            <tr>
              <th>姓名</th>
              <th>评估时间</th>
              <th>机构来源</th>
            </tr>
          </thead>
          <tbody>   
            {list.map((item, index) => {
              return <Link key={item} to='/evaluationdetail/evaluateoutcome' state={
                {
                  array:{...item}
                }
              } > 
              <tr>
                  <td>{item.name}</td>
                  <td>{dayjs(item.createDate).format('YYYY-MM-DD')}</td>
                  <td>{item.org}</td>
                </tr>
              </Link>
            })
            }
          </tbody>
        </table>
      </div>
      {/* <Navfooter /> */}
    </Commontitle >
  )
}
