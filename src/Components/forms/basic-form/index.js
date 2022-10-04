import React, { useState } from 'react'
import { Button, Form, Input, Radio, Select } from 'antd';
import './index.less'
import TextArea from 'antd/lib/input/TextArea';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
    offset: 2,
  },
  wrapperCol: {
    span: 6,
    offset: 2
  },
};

export default function Basicform() {


  const nav=useNavigate()

  const [locationSpecial, setLocationSpecial] = useState(0)
  const [peopleSpecial, setPeopleSpecial] = useState(0)

  const onFinish = (values) => {
    nav(`/home/evaluate/1`,{state:{isSuccess:false}})
    console.log('Received values of form: ', values);
  };

  const locationChange = (value) => {
    if (value === '其他(请注明)') {
      setLocationSpecial(1)
    }
    console.log('llalla')
  }

  const peopleChange = (value) => {
    if (value === '其他(请注明)') {
      setPeopleSpecial(1)
    }
  }

  return (
    <div className='basicform-wrapper'>
      <div className="basicform-heade">
        <div onClick={() => { nav('/home/evaluate/ ',{state:{isSuccess:false}}) }} className="back"> &lt;  返回</div>
        <div className="title">请填写您的基本信息（全部必填）</div>
      </div>
      <Form
        layout="vertical"
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <Form.Item style={{ width: '90%' }} label="姓名" >
          <Input placeholder="请输入您的姓名" bordered={false} style={{ border: 'none', borderBottom: '2px ##fcfcfc solid' }} />
        </Form.Item>

        <Form.Item style={{ width: '90%' }} name="radio-group" label="性别">
          <Radio.Group>
            <Radio value="男">男</Radio>
            <Radio value="女">女</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item style={{ width: '90%' }} label="年龄">
          <Input placeholder="请输入您的年龄" bordered={false} style={{ border: 'none', borderBottom: '2px ##fcfcfc solid' }} />
        </Form.Item>


        <Form.Item style={{ width: '90%' }} label="身高 / cm">
          <Input placeholder="cm" bordered={false} style={{ border: 'none', borderBottom: '2px ##fcfcfc solid' }} />
        </Form.Item>

        <Form.Item style={{ width: '90%' }} label="体重 / kg">
          <Input placeholder="kg" bordered={false} style={{ border: 'none', borderBottom: '2px ##fcfcfc solid' }} />
        </Form.Item>

        <Form.Item
          style={{ width: '90%' }}
          name="select"
          label="文化程度"
        >
          <Select style={{ width: '50%' }} size='middle' placeholder="点击选择文化程度">
            <Option value="未受过文化教育">未受过文化教育</Option>
            <Option value="小学">小学</Option>
            <Option value="初中">初中</Option>
            <Option value="高中">高中</Option>
            <Option value="大学及以上">大学及以上</Option>
          </Select>
        </Form.Item>

        <Form.Item
          style={{ width: '90%' }}
          name="婚姻状况"
          label="婚姻状况"
        >
          <Select style={{ width: '50%' }} size='middle' placeholder="点击选择文化婚姻">
            <Option value="已婚">已婚</Option>
            <Option value="未婚">未婚</Option>
            <Option value="离异">离异</Option>
          </Select>
        </Form.Item>

        {locationSpecial === 0 ?
          <Form.Item
            style={{ width: '90%' }}
            name="评估地点"
            label="评估地点"
          >
            <Select style={{ width: '50%' }} size='middle' onChange={locationChange} placeholder="点击选择评估地点">
              <Option value="本人">本人</Option>
              <Option value="住院">住院</Option>
              <Option value="社区">社区</Option>
              <Option value="养老院">养老院</Option>
              <Option value="家中">家中</Option>
              <Option value="其他(请注明)">其他(请注明)</Option>
            </Select>
          </Form.Item> :
          <Form.Item label='评估地点说明' ><TextArea style={{ width: '80%' }} rows={2} placeholder='点击开始填写说明说明' /></Form.Item>
        }


        {peopleSpecial === 0 ?
          <Form.Item
            style={{ width: '90%' }}
            name="填写人员"
            label="填写人员"
          >
            <Select style={{ width: '50%' }} size='middle' onChange={peopleChange} placeholder="点击选择填写人员">
              <Option value="本人">本人</Option>
              <Option value="照顾者">照顾者</Option>
              <Option value="医务人员">医务人员</Option>
              <Option value="其他(请注明)">其他(请注明)</Option>
            </Select>
          </Form.Item> :
          <Form.Item label='填写人员说明' ><TextArea rows={2} style={{ width: '80%', }} placeholder='点击开始填写说明' /></Form.Item>}



        <Form.Item
          style={{ width: '80%' }}
          wrapperCol={{
            span: 9,
           
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
