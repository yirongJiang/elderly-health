import React from 'react'
import Commontitle from '../../../UI/Nav-head'
import { Button, Col, DatePicker, Divider, Form, Input, Row, Select } from 'antd';
import './index.less'
import Navfooter from '../../../UI/nav-footer';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 14,
  },
}

export default function Queryresult() {
  const nav=useNavigate()
  const [form] = Form.useForm();
  const style = {
    height: '30rem'
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Commontitle title='查询评估结果' className='queryresult-wrapper'>
      <Form
        form={form}
        {...layout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="horizontal"
      >
        <Form.Item >
          <Row style={style}  >
            <Col offset={1} span={4}>
              <div>姓名</div>
            </Col>
            <Col span={12}>
              <Form.Item name='姓名'>
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
              <Form.Item name='机构来源'>
                <Select>
                  <Option value="四川大学华西医院">四川大学华西医院</Option>
                  <Option value="南京医科大学">南京医科大学</Option>
                  <Option value="中南大学湘雅医院">中南大学湘雅医院</Option>
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
              <Form.Item name='评估时间'>
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>
      <hr />
      <div className="result-wrapper">
        <table >
          <thead>
            <tr>
              <th>姓名</th>
              <th>评估时间</th>
              <th>机构来源</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => { nav('/evaluationdetail/evaluateoutcome') }}>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>

          </tbody>
        </table>
      </div>
      <Navfooter />
    </Commontitle >
  )
}
