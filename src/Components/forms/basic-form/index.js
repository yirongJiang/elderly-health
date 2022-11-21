import React, { useState } from 'react'
import { Button, Form, Input, message, Radio, Select, Tag } from 'antd';
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
  const [form] = Form.useForm();
  const [locationSpecial, setLocationSpecial] = useState(0)
  const [peopleSpecial, setPeopleSpecial] = useState(0)
  const [hospitalSpecial, setHospitalSpecial] = useState(0)
  const [fallingSpecial, setFallingSpecial] = useState(0)
  const [diseaseHistory, setDiseaseHistory] = useState(0)

  const onFinish = (values) => {
    localStorage.setItem('isPost', 1)
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

  const hospitalChange = (value) => {
    if (value === '是') {
      setHospitalSpecial(1)
      form.setFieldsValue({
        hospital: null,
      });
    }
  }

  const fallingChange = (value) => {
    if (value === '是') {
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

  const tagRender = (props) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    // const rgb=['bold','lime','cyan','green','blue','red','purple','yellow','#D24D57','pink']
    const rgb=['#560192','#8e0dc0','#9d16be','#c627be','#da30bb','#db30bc','#f062cb','#590299','##8c0dbe','#f07fd2']
    const leng=rgb.length
    const number=Math.ceil(Math.random()*(leng-1))
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 118)
    let b = Math.floor(Math.random() * 189)
    return (
      <Tag
        // color={`rgb(${r},${g},${b},0.8)`}
        color={rgb[number]}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{fontSize:'18rem',padding:'5rem',margin:'2rem'}}
      >
        {label}
      </Tag>
    );
  };

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
        form={form}

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

        {hospitalSpecial === 0 ?
          <Form.Item
            rules={commonRuls}
            style={{ width: '90%' }}
            name="hospital"
            label="一年内是否住过院"
          >
            <Select style={{ width: '80%' }} size='large' onChange={hospitalChange} placeholder="点击进行选择">
              <Option value="是">是</Option>
              <Option value="否">否</Option>
            </Select>
          </Form.Item> :
          <Form.Item
            name='hospital'
            rules={commonRuls} label='一年内住院次数 : ' >
            <TextArea style={{ width: '80%' }} rows={2} placeholder='点击开始填写次数' />
          </Form.Item>
        }

        {fallingSpecial === 0 ?
          <Form.Item
            rules={commonRuls}
            style={{ width: '90%' }}
            name="falling"
            label="一年内是否跌倒过"
          >
            <Select style={{ width: '80%' }} size='large' onChange={fallingChange} placeholder="点击进行选择">
              <Option value="是">是</Option>
              <Option value="否">否</Option>
            </Select>
          </Form.Item> :
          <Form.Item
            name='falling'
            rules={commonRuls} label='一年内住院次数 ： ' >
            <TextArea style={{ width: '80%' }} rows={2} placeholder='点击开始填写次数' />
          </Form.Item>
        }

        {diseaseHistory === 0 ?
          <Form.Item
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
            <Form.Item name='disease' label='请填写您的其他疾病史' required='true'>
              <TextArea rows={2} style={{ width: '70%', }} placeholder='点击开始填写说明' />
            </Form.Item>
        }

        <Form.Item
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
          rules={commonRuls}
          style={{ width: '90%' }}
          name="org"
          label="机构来源"
        >
          <Select style={{ width: '80%' }} size='large' placeholder="点击选择机构来源">
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
            <Select style={{ width: '80%' }} size='large' onChange={locationChange} placeholder="点击选择评估地点">
              <Option value="住院">住院</Option>
              <Option value="社区">社区</Option>
              <Option value="养老院">养老院</Option>
              <Option value="家中">家中</Option>
              <Option value="其他(请注明)">其他(请注明)</Option>
            </Select>
          </Form.Item> :
          <Form.Item
            name='place'
            rules={commonRuls} label='评估地点说明' ><TextArea style={{ width: '88%' }} rows={2} placeholder='点击开始填写说明说明' /></Form.Item>
        }


        {peopleSpecial === 0 ?
          <Form.Item
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
    </div>
  )
}
