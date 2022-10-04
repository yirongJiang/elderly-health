import React from 'react'
import { Form, Radio, Button } from 'antd';
import './index.less'
import { useNavigate } from 'react-router-dom';

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
export default function Cognizefirst() {
  const nav = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className='common-wrapper'>
      <div className="cognize-heade">
        <div onClick={() => { nav(-1) }} className="back"> &lt;  返回</div>
        <div className="title">自制认知筛查表</div>
      </div>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <Form.Item name="radio-group" label="1. 现在是上午还是下午？">
          <Radio.Group>
            <Radio value="上午">上午</Radio>
            <Radio value="下午">下午</Radio>
            <Radio value="晚上">晚上</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="radio-group" label="2. 石头是否能浮在水面？">
          <Radio.Group>
            <Radio value="上午">上午</Radio>
            <Radio value="下午">下午</Radio>
            <Radio value="晚上">晚上</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button onClick={() => { nav('/evaluationdetail/cognize/second') }} type="primary" htmlType="submit">
            下一步
          </Button>
        </Form.Item>
      </Form>

    </div>
  )
}
