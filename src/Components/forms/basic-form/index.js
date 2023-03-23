import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Input, message, Radio, Select, Tag } from 'antd';
import './index.less'
import TextArea from 'antd/lib/input/TextArea';
import { postInfo } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { basicFormContext } from '../../../store/topicNumbercontext';
import { CaretLeftFilled } from '@ant-design/icons';

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
  const [form] = Form.useForm();
  const [locationSpecial, setLocationSpecial] = useState(0)
  const [diseaseHistory, setDiseaseHistory] = useState(0)
  const formdataContext = useContext(basicFormContext)

  const onFinish = async (values) => {
    sessionStorage.setItem('isPost', 1)
    const illnessList = values.disease.toString()
    const userId = localStorage.getItem("adminUserId")
    const result = await postInfo(
      {
        ...values,
        "disease": illnessList,
        "adminUserId": userId,
        "illness": '0',
        "illnessNum": "0",
        "illnessOther": "0",
        "org": '华西',
      })

    localStorage.setItem('X-Auth-Token', result.body)
    nav(-1)
    message.success('恭喜您，完成填写！')
  };

  const locationChange = (value) => {
    if (value === '其他(请注明)') {
      setLocationSpecial(1)
      form.setFieldsValue({
        place: null,
      });
    }
  }

  const diseaseHistoryChange = (value) => {
    if (value === '有(请注明)') {
      setDiseaseHistory(1)
      form.setFieldsValue({
        disease: [],
      });
    }
  }

  const handleChange = (value) => {
    if (value.indexOf('其他') !== -1) {
      setDiseaseHistory(2)
      form.setFieldsValue({
        disease: [],
      });
    }
  };

  const formChange = () => {
    const value = form.getFieldsValue(true)
    let formData = value
    formdataContext.basicFormGroupDispatch({ type: 'basicForm', formData: formData })
  }

  const tagRender = (props) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    const rgb = ['#560192', '#8e0dc0', '#9d16be', '#c627be', '#da30bb', '#db30bc', '#f062cb', '#590299', '##8c0dbe', '#f07fd2']
    const leng = rgb.length
    const number = Math.ceil(Math.random() * (leng - 1))
    return (
      <Tag
        color={rgb[number]}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ fontSize: '18rem', padding: '5rem', margin: '2rem' }}
      >
        {label}
      </Tag>
    );
  };
  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.basicForm })
  }, [])

  return (

    <div className='basicform-wrapper'>
      <div className="basicform-heade">
        <div onClick={() => { nav(-1) }} className="back"> <CaretLeftFilled />  返回</div>
        <div className="title">请填写您的基本信息（全部必填）</div>
      </div>

      <Form
        onFieldsChange={formChange} size='large'
        layout="vertical"
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        form={form}
      >

        <Form.Item
          hasFeedback
          label="姓名"
          name='name'
          rules={[
            {
              pattern: /[a-zA-Z\u4e00-\u9fa5]+$/,
              required: true,
              message: '请填写2-6位真实姓名',
            }
          ]}
          style={{ width: '90%' }} >
          <Input placeholder="请输入您的姓名" bordered />
        </Form.Item>

        <Form.Item
          rules={commonRuls} style={{ width: '90%' }} name="gender" label="性别">
          <Radio.Group>
            <Radio value="1">男</Radio>
            <Radio value="0">女</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          hasFeedback
          label="年龄"
          name='age'
          rules={[
            {
              pattern: /^[1-9]\d?$|^1[01]\d$|^120$|^0$/,
              required: true,
              message: '请填写0-120之间的年龄',
            }
          ]}
          style={{ width: '90%' }}>
          <Input placeholder="请输入您的年龄" />
        </Form.Item>



        <Form.Item
          hasFeedback
          name='height'
          rules={[
            {
              pattern: /1[0-9][0-9]/,
              required: true,
              message: '请填写100-200厘米之间的身高',
            }
          ]}
          style={{ width: '90%' }} label="身高 / cm">
          <Input placeholder="cm" />
        </Form.Item>

        <Form.Item
          hasFeedback
          name='weight'
          rules={[
            {
              pattern: /^((\d{1,2})(\.[0-9]{1})?$)/,
              required: true,
              message: '请填写1-100千克之间的体重',
            }
          ]} style={{ width: '90%' }} label="体重 / kg">
          <Input placeholder="kg" />
        </Form.Item>

        <Form.Item
          style={{ width: '90%' }}
          hasFeedback
          name='hospital'
          rules={commonRuls} label='一年内住院次数 : ' >
          <Select style={{ width: '80%' }} size='large' placeholder="请选择多少次">
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return <Option key={item} value={`${index}`}>{index}</Option>
              })
            }
          </Select>
        </Form.Item>

        <Form.Item
          style={{ width: '90%' }}
          hasFeedback
          name='fall'
          rules={commonRuls} label='一年内跌倒次数 ： ' >
          <Select style={{ width: '80%' }} size='large' placeholder="请选择多少次">
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return <Option key={item} value={`${index}`}>{index}</Option>
              })
            }
          </Select>
        </Form.Item>

        {diseaseHistory === 0 ?
          <Form.Item
            hasFeedback
            rules={commonRuls}
            style={{ width: '90%' }}
            name="disease"
            label="疾病史"
          >
            <Select style={{ width: '80%' }} size='large' onChange={diseaseHistoryChange} placeholder="点击选择疾病">
              <Option value="有(请注明)">有(请注明)</Option>
              <Option value="0">无</Option>
            </Select>
          </Form.Item> :
          diseaseHistory === 1 ?
            <Form.Item
              style={{ width: '80%' }}
              hasFeedback
              name='disease'
              rules={commonRuls} label='现有疾病供选择（多选）： ' >
              <Select
                style={{ width: '90%' }}
                mode="multiple"
                placeholder="点击选择疾病"
                onChange={handleChange}
                optionLabelProp="label"
                tagRender={tagRender}
              >
                <Option value="1" label="脑卒中">
                  脑卒中
                </Option>
                <Option value="2" label="帕金森">
                  帕金森
                </Option>
                <Option value="3" label="阿尔兹海默">
                  阿尔兹海默
                </Option>
                <Option value="4" label="精神疾病">
                  精神疾病
                </Option>
                <Option value="5" label="糖尿病周围神经病">
                  糖尿病周围神经病
                </Option>
                <Option value="6" label="颈椎病">
                  颈椎病
                </Option>
                <Option value="7" label="腰椎间盘突出">
                  腰椎间盘突出
                </Option>
                <Option value="8" label="髋/膝骨关节炎">
                  髋/膝骨关节炎
                </Option>
                <Option value="9" label="类风湿性关节炎">
                  类风湿性关节炎
                </Option>
                <Option value="10" label="髋部骨折">
                  髋部骨折
                </Option>
                <Option value="11" label="骨质疏松性骨折">
                  骨质疏松性骨折
                </Option>
                <Option value="12" label="冠心病">
                  冠心病
                </Option>
                <Option value="13" label="慢性心律失常">
                  慢性心律失常
                </Option>
                <Option value="14" label="COPD">
                  COPD
                </Option>
                <Option value="15" label="肺癌">
                  肺癌
                </Option>
                <Option value="其他" label="其他">
                  其他
                </Option>
              </Select>
            </Form.Item> :
            <Form.Item style={{ width: '90%' }} hasFeedback name='illnessOther' label='请填写您的其他疾病史' required='true'>
              <TextArea rows={2} style={{ width: '70%', }} placeholder='点击开始填写说明' />
            </Form.Item>
        }

        <Form.Item
          hasFeedback
          rules={commonRuls}
          style={{ width: '90%' }}
          name="edu"
          label="文化程度"
        >
          <Select style={{ width: '80%' }} size='large' placeholder="点击选择文化程度">
            <Option value="未受过文化教育">未受过文化教育</Option>
            <Option value="小学">小学</Option>
            <Option value="初中">初中</Option>
            <Option value="高中">高中</Option>
            <Option value="大学及以上">大学及以上</Option>
          </Select>
        </Form.Item>

        <Form.Item
          hasFeedback
          rules={commonRuls}
          style={{ width: '90%' }}
          name="matrim"
          label="婚姻状况"
        >
          <Select style={{ width: '80%' }} size='large' placeholder="点击选择文化婚姻">
            <Option value="0">已婚</Option>
            <Option value="1">未婚</Option>
            <Option value="2">离异</Option>
          </Select>
        </Form.Item>

        <Form.Item
          hasFeedback
          rules={commonRuls}
          style={{ width: '90%' }}
          name="institution"
          label="机构来源"
        >
          <Select style={{ width: '80%' }} size='large' placeholder="点击选择机构来源">
            <Option value="0">四川大学华西医院</Option>
            <Option value="1">南京医科大学</Option>
            <Option value="2">中南大学湘雅医院</Option>
            <Option value="3">中国康复研究中心</Option>
          </Select>
        </Form.Item>

        <Form.Item
          hasFeedback
          label="填写医生"
          name='staff'
          rules={[
            {
              pattern: /[a-zA-Z\u4e00-\u9fa5]+$/,
              required: true,
              message: '请填写2-6位真实姓名',
            }
          ]}
          style={{ width: '90%' }} >
          <Input placeholder="请输入医生姓名" bordered />
        </Form.Item>

        {locationSpecial === 0 ?
          <Form.Item
            hasFeedback
            rules={commonRuls}
            style={{ width: '90%' }}
            name="place"
            label="评估地点"
          >
            <Select style={{ width: '80%' }} size='large' onChange={locationChange} placeholder="点击选择评估地点">
              <Option value="1">住院</Option>
              <Option value="2">社区</Option>
              <Option value="3">养老院</Option>
              <Option value="4">家中</Option>
              <Option value="其他(请注明)">其他(请注明)</Option>
            </Select>
          </Form.Item> :
          <Form.Item
            hasFeedback
            name='place'
            rules={commonRuls} label='评估地点说明' ><TextArea style={{ width: '88%' }} rows={2} placeholder='点击开始填写说明说明' /></Form.Item>
        }

        {/* 
        {peopleSpecial === 0 ?
          <Form.Item
            hasFeedback
            rules={commonRuls}
            style={{ width: '90%' }}
            name="staff"
            label="填写人员"
          >
            <Select style={{ width: '80%' }} size='large' onChange={peopleChange} placeholder="点击选择填写人员">
              <Option value="本人">本人</Option>
              <Option value="照顾者">照顾者</Option>
              <Option value="医务人员">医务人员</Option>
              <Option value="其他(请注明)">其他(请注明)</Option>
            </Select>
          </Form.Item> :
          <Form.Item
            hasFeedback
            name='staff'
            rules={commonRuls} label='填写人员说明' >
            <TextArea rows={2} style={{ width: '88%', }} placeholder='点击开始填写说明' />
          </Form.Item>}

 */}

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
    </div >
  )
}
