import { Alert, Button, Form, message, Radio, Space, Spin } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Commontitle from '../../../UI/Nav-head';
import './index.less'
import { topicNumbercontext, topicFormDatacontext } from '../../../store/topicNumbercontext'
import { postIadl } from '../../../api';
import ToTopBtn from '../../../utility/ToTopBtn';

const  commonRuls  = [
  {
    required: true,
    message: '请填写完整',
  },
]

export default function Ladl() {
  const [form] = Form.useForm()
  const nav = useNavigate()
  const [changePage, setChangePage] = useState(0)
  const onFinish = async (values) => {
    await postIadl(values)
    topicContext.numberDispatch({ type: 'TOTALADD', selectedNumber: 1 })
    setChangePage(1)
    setTimeout(() => {
      nav('/evaluationdetail/scalenav', { replace: true })
      message.success('恭喜您，提交成功')
    }, 1000);
  };

  const formItemLayout = {
    labelCol: {
      span: 6,
      offset: 1,
    },
    wrapperCol: {
      span: 13,
      offset: 1
    },
  };

  const topicContext = useContext(topicNumbercontext)
  const formdataContext = useContext(topicFormDatacontext)

  const formChange = () => {
    const value = form.getFieldsValue(true)
    let formdata = value
    let selectedNumber = Object.keys(value).length
    topicContext.numberDispatch({ type: 'IADLADD', selectedNumber: selectedNumber })
    formdataContext.formDispatch({ type: 'IADLFORM', formdata: formdata })
  }
  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.iadlFormdata })
  }, [])

  return (
    <Commontitle title='洛顿IADL评估' navagation='/evaluationdetail/scalenav' className='ladi-wrapper'>
      <ToTopBtn />
     {changePage===0? 
     <Form
       scrollToFirstError
        form={form}
        onFieldsChange={formChange}
        style={{ fontWeight: 'lighter', fontSize: '20rem', padding: '0 10rem' }}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <div className='question'>1. 电话的使用 </div>
        <Form.Item label='你能不能自己用电话呢?” 包括找电话号码, 打及接听电话?' >
          <Form.Item name="qone" >
            <Radio.Group>
              <Space align='start' direction="vertical">
                <Radio value="1">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="2">需要一些帮忙
                </Radio>
                <Radio value="3">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form.Item>

        <div className='question'>2.交通的使用</div>
        <Form.Item label='你能不能自己搭车呢?” 包括自己上到正确的车, 付车票钱/买车票, 上/下车
            (假设你必须要搭交通工具去一个远的地方，例如探朋友/看病)'  >
          <Form.Item rules={commonRuls} name="qtwo">
            <Radio.Group>
              <Space align='start' direction="vertical">
                <Radio value="1">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="2">需要一些帮忙
                </Radio>
                <Radio value="3">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form.Item>

        <div className='question'>3.购物</div>
        <Form.Item label='你能不能自己买物品呢?” 包括自己选物品﹑付钱及带回家里
            (假设你必须要到附近商店买食物或日用品)'  >
          <Form.Item rules={commonRuls} name="qthree">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="1">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="2">需要一些帮忙
                </Radio>
                <Radio value="3">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form.Item>

        <div className='question'>4.准备食物</div>
        <Form.Item label='你能不能自己煮食呢? 包括自己计划食物﹑准备材料﹑煮熟食物及放入碗碟里
            (假设你必须要自己准备一顿饭)' >
          <Form.Item rules={commonRuls} name="qfour">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="1">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="2">需要一些帮忙
                </Radio>
                <Radio value="3">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form.Item>

        <div className='question'>5.家务活动</div>
        <Form.Item label='你能不能自己做家务呢? 包括简单家务(如抹桌子﹑叠被子﹑洗碗)及较重的家务(如抹地/窗)
            (假设你必须要自己做家务)' >
          <Form.Item rules={commonRuls} name="qfive">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="1">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="2">需要一些帮忙
                </Radio>
                <Radio value="3">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form.Item>

        <div className='question'>6.家居维修</div>
        <Form.Item label='你能不能应付简单的家居维修呢?” 例如换灯泡﹑維修桌子及上螺丝等
            (假设你必须要自己做)' >
          <Form.Item rules={commonRuls} name="qsix">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="1">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="2">需要一些帮忙
                </Radio>
                <Radio value="3">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group></Form.Item>
        </Form.Item>

        <div className='question'>7.卫生</div>
        <Form.Item label='你能不能够自己洗衣服呢?包括清洗及晾晒自己的衬衫﹑被子﹑床单等(假设你必须要洗自己的衬衫﹑被子﹑床单等)' >
          <Form.Item rules={commonRuls} name="qseven">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="1">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="2">需要一些帮忙
                </Radio>
                <Radio value="3">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group></Form.Item>
        </Form.Item>

        <div className='question'>8.服药</div>
        <Form.Item label='你能不能自己服用药物呢? 包括能依照指示在正确的时间內服用正确的份量
            (假设你必须要自己擦药或食药等)'   >
          <Form.Item rules={commonRuls} label="" name="qeight">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="1">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="2">需要一些帮忙
                </Radio>
                <Radio value="3">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group></Form.Item>
        </Form.Item>

        <div className='question'>9.财务管理</div>
     
        <Form.Item rules={commonRuls} label='你能不能处理自己的财物呢? 包括日常的找零钱﹑交租/水电费及到银行提款
            (假设你必须要买物品﹑自己交租/水电费及有钱在银行)' >
          <Form.Item rules={commonRuls} label="" name="qnine">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="1">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="2">需要一些帮忙
                </Radio>
                <Radio value="3">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form.Item>

        <Form.Item rules={commonRuls}
          style={{ width: '80%' }}
          wrapperCol={{
            span: 9,
            offset: 7
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>: <Spin tip="Loading...">
        <Alert style={{ height: '60vh' }}
          message="正在上传，请勿重复提交"
          type="info"
        />
      </Spin>}
    </Commontitle >
  )
}
