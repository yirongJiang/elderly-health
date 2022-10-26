import React, { useState } from 'react'
import { Button, Form, Input, message, Radio, Select } from 'antd';
import './index.less'
import TextArea from 'antd/lib/input/TextArea';
import { postInfo } from '../../../api';
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

const commonRuls = [
  {
    required: true,
    message: '请填写完整',
  },
]
export default function Basicform() {


  const nav = useNavigate()

  const [locationSpecial, setLocationSpecial] = useState(0)
  const [peopleSpecial, setPeopleSpecial] = useState(0)

  const onFinish = (values) => {
    localStorage.setItem('isPost', 1)
    console.log('Received values of form: ', values);
    nav(`/home/evaluate`)
    message.success('恭喜您，完成填写！')
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
        <div onClick={() => { nav('/home/evaluate') }} className="back"> &lt;  返回</div>
        <div className="title">请填写您的基本信息（全部必填）</div>
      </div>
      <Form
        size='large'
        layout="vertical"
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}

      >
        <Form.Item
          label="姓名"
          name='name'
          rules={commonRuls}
          style={{ width: '90%' }} >
          <Input placeholder="请输入您的姓名" bordered={false} style={{ border: 'none', borderBottom: '2px ##fcfcfc solid' }} />
        </Form.Item>

        <Form.Item
          rules={commonRuls} style={{ width: '90%' }} name="gender" label="性别">
          <Radio.Group>
            <Radio value="1">男</Radio>
            <Radio value="0">女</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="年龄"
          name='age'
          rules={commonRuls} style={{ width: '90%' }}>
          <Input placeholder="请输入您的年龄" bordered={false} style={{ border: 'none', borderBottom: '2px ##fcfcfc solid' }} />
        </Form.Item>


        <Form.Item
          name='height'
          rules={commonRuls} style={{ width: '90%' }} label="身高 / cm">
          <Input placeholder="cm" bordered={false} style={{ border: 'none', borderBottom: '2px ##fcfcfc solid' }} />
        </Form.Item>

        <Form.Item
          name='weight'
          rules={commonRuls} style={{ width: '90%' }} label="体重 / kg">
          <Input placeholder="kg" bordered={false} style={{ border: 'none', borderBottom: '2px ##fcfcfc solid' }} />
        </Form.Item>

        <Form.Item
          rules={commonRuls}
          style={{ width: '90%' }}
          name="edu"
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
          rules={commonRuls}
          style={{ width: '90%' }}
          name="matrim"
          label="婚姻状况"
        >
          <Select style={{ width: '50%' }} size='middle' placeholder="点击选择文化婚姻">
            <Option value="已婚">已婚</Option>
            <Option value="未婚">未婚</Option>
            <Option value="离异">离异</Option>
          </Select>
        </Form.Item>

        <Form.Item
          rules={commonRuls}
          style={{ width: '90%' }}
          name="org"
          label="机构来源"
        >
          <Select style={{ width: '50%' }} size='middle' placeholder="点击选择机构来源">
            <Option value="四川大学华西医院">四川大学华西医院</Option>
            <Option value="南京医科大学">南京医科大学</Option>
            <Option value="中南大学湘雅医院">中南大学湘雅医院</Option>
          </Select>
        </Form.Item>

        {locationSpecial === 0 ?
          <Form.Item
            rules={commonRuls}
            style={{ width: '90%' }}
            name="place"
            label="评估地点"
          >
            <Select style={{ width: '50%' }} size='middle' onChange={locationChange} placeholder="点击选择评估地点">
              <Option value="住院">住院</Option>
              <Option value="社区">社区</Option>
              <Option value="养老院">养老院</Option>
              <Option value="家中">家中</Option>
              <Option value="其他(请注明)">其他(请注明)</Option>
            </Select>
          </Form.Item> :
          <Form.Item
            rules={commonRuls} label='评估地点说明' ><TextArea style={{ width: '80%' }} rows={2} placeholder='点击开始填写说明说明' /></Form.Item>
        }


        {peopleSpecial === 0 ?
          <Form.Item
            rules={commonRuls}
            style={{ width: '90%' }}
            name="staff"
            label="填写人员"
          >
            <Select style={{ width: '50%' }} size='middle' onChange={peopleChange} placeholder="点击选择填写人员">
              <Option value="本人">本人</Option>
              <Option value="照顾者">照顾者</Option>
              <Option value="医务人员">医务人员</Option>
              <Option value="其他(请注明)">其他(请注明)</Option>
            </Select>
          </Form.Item> :
          <Form.Item
            rules={commonRuls} label='填写人员说明' ><TextArea rows={2} style={{ width: '80%', }} placeholder='点击开始填写说明' /></Form.Item>}



        <Form.Item
          rules={commonRuls}
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
