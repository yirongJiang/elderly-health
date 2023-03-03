import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Input, message, Radio, Select, Tag } from 'antd';
import './index.less'
import TextArea from 'antd/lib/input/TextArea';
import { postInfo } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { basicFormContext } from '../../../store/topicNumbercontext';

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
  const [peopleSpecial, setPeopleSpecial] = useState(0)
  const [hospitalSpecial, setHospitalSpecial] = useState(0)
  const [fallingSpecial, setFallingSpecial] = useState(0)
  const [diseaseHistory, setDiseaseHistory] = useState(0)
  const formdataContext = useContext(basicFormContext)

  const onFinish = (values) => {
    sessionStorage.setItem('isPost', 1)
    console.log('Received values of form: ', values);
    nav(`/home/evaluate`)
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

  const peopleChange = (value) => {
    if (value === '其他(请注明)') {
      setPeopleSpecial(1)
      form.setFieldsValue({
        staff: null,
      });
    }
  }

  const hospitalChange = (e) => {
    console.log(e.target.value)
    if (e.target.value === '是') {
      setHospitalSpecial(1)
      form.setFieldsValue({
        hospital: null,
      });
    }
  }

  const fallingChange = (e) => {
    if (e.target.value === '是') {
      setFallingSpecial(1)
      form.setFieldsValue({
        falling: null,
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
    console.log(value)
    let formData = value
    formdataContext.basicFormGroupDispatch({ type: 'basicForm', formData: formData })
    console.log(formdataContext.basicForm)
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
  const options = []

  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.basicForm })
  }, [])

  return (

    <div className='basicform-wrapper'>
      <div className="basicform-heade">
        <div onClick={() => { nav('/home/evaluate') }} className="back"> &lt;  返回</div>
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
              pattern: /^[\一-\龥]{2,6}$|[a-zA-Z]/,
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
              pattern: /^(\d{1,2}$)/,
              required: true,
              message: '请填写1-100千克之间的体重',
            }
          ]} style={{ width: '90%' }} label="体重 / kg">
          <Input placeholder="kg" />
        </Form.Item>

        {hospitalSpecial === 0 ?
          <Form.Item
            rules={commonRuls}
            style={{ width: '90%' }}
            name="hospital"
            label="一年内是否住过院"
          // hasFeedback
          >
            <Radio.Group onChange={hospitalChange}>
              <Radio value="是">是</Radio>
              <Radio value="否">否</Radio>
            </Radio.Group>

          </Form.Item> :
          <Form.Item
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
        }

        {fallingSpecial === 0 ?
          <Form.Item
            hasFeedback
            rules={commonRuls}
            style={{ width: '90%' }}
            name="falling"
            label="一年内是否跌倒过"
          >
            <Radio.Group onChange={fallingChange} >
              <Radio value="是">是</Radio>
              <Radio value="否">否</Radio>
            </Radio.Group>
          </Form.Item> :
          <Form.Item
            hasFeedback
            name='falling'
            rules={commonRuls} label='一年内跌倒次数 ： ' >
            <Select style={{ width: '80%' }} size='large' placeholder="请选择多少次">
              {
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                  return <Option key={item} value={`${index}`}>{index}</Option>
                })
              }
            </Select>
          </Form.Item>
        }

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
              <Option value="无">无</Option>
            </Select>
          </Form.Item> :
          diseaseHistory === 1 ?
            <Form.Item
              hasFeedback
              name='disease'
              rules={commonRuls} label='现有疾病供选择（多选）： ' >
              <Select
                mode="multiple"
                placeholder="点击选择疾病"
                onChange={handleChange}
                optionLabelProp="label"
                tagRender={tagRender}
              >
                <Option value="脑卒中" label="脑卒中">
                  脑卒中
                </Option>
                <Option value="帕金森" label="帕金森">
                  帕金森
                </Option>
                <Option value="阿尔兹海默" label="阿尔兹海默">
                  阿尔兹海默
                </Option>
                <Option value="精神疾病" label="精神疾病">
                  精神疾病
                </Option>
                <Option value="糖尿病周围神经病" label="糖尿病周围神经病">
                  糖尿病周围神经病
                </Option>
                <Option value="颈椎病" label="颈椎病">
                  颈椎病
                </Option>
                <Option value="腰椎间盘突出" label="腰椎间盘突出">
                  腰椎间盘突出
                </Option>
                <Option value="髋/膝骨关节炎" label="髋/膝骨关节炎">
                  髋/膝骨关节炎
                </Option>
                <Option value="类风湿性关节炎" label="类风湿性关节炎">
                  类风湿性关节炎
                </Option>
                <Option value="髋部骨折" label="髋部骨折">
                  髋部骨折
                </Option>
                <Option value="骨质疏松性骨折" label="骨质疏松性骨折">
                  骨质疏松性骨折
                </Option>
                <Option value="冠心病" label="冠心病">
                  冠心病
                </Option>
                <Option value="慢性心律失常" label="慢性心律失常">
                  慢性心律失常
                </Option>
                <Option value="COPD" label="COPD">
                  COPD
                </Option>
                <Option value="肺癌" label="肺癌">
                  肺癌
                </Option>
                <Option value="其他" label="其他">
                  其他
                </Option>
              </Select>
            </Form.Item> :
            <Form.Item hasFeedback name='disease' label='请填写您的其他疾病史' required='true'>
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
            <Option value="已婚">已婚</Option>
            <Option value="未婚">未婚</Option>
            <Option value="离异">离异</Option>
          </Select>
        </Form.Item>

        <Form.Item
          hasFeedback
          rules={commonRuls}
          style={{ width: '90%' }}
          name="org"
          label="机构来源"
        >
          <Select style={{ width: '80%' }} size='large' placeholder="点击选择机构来源">
            <Option value="四川大学华西医院">四川大学华西医院</Option>
            <Option value="南京医科大学">南京医科大学</Option>
            <Option value="中南大学湘雅医院">中南大学湘雅医院</Option>
            <Option value="中国康复研究中心">中国康复研究中心</Option>
          </Select>
        </Form.Item>

        <Form.Item
          hasFeedback
          label="填写医生"
          name='doctor'
          rules={[
            {
              pattern: /^[\一-\龥]{2,6}$|[a-zA-Z]/,
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
              <Option value="住院">住院</Option>
              <Option value="社区">社区</Option>
              <Option value="养老院">养老院</Option>
              <Option value="家中">家中</Option>
              <Option value="其他(请注明)">其他(请注明)</Option>
            </Select>
          </Form.Item> :
          <Form.Item
            hasFeedback
            name='place'
            rules={commonRuls} label='评估地点说明' ><TextArea style={{ width: '88%' }} rows={2} placeholder='点击开始填写说明说明' /></Form.Item>
        }


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
