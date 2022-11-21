import { Button, Form, message, Radio, Space } from 'antd';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Commontitle from '../../../UI/Nav-head';
import './index.less'
import { topicNumbercontext, topicFormDatacontext } from '../../../store/topicNumbercontext'
import { postIadl } from '../../../api';

const commonRuls = [
  {
    required: true,
    message: '请填写完整',
  },
]
export default function Ladl() {
  const [form] = Form.useForm()
  const nav = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    nav('/evaluationdetail/scalenav')
    message.success('恭喜您提交成功')
  };
  const formItemLayout = {
    labelCol: {
      span: 6,
      offset: 1,
    },
    wrapperCol: {
      span: 13,
      offset: 0
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
    <Commontitle title='洛顿IADL评估' className='ladi-wrapper'>
      <Form
        form={form}
        onFieldsChange={formChange}
        style={{ fontWeight: 'bold', fontSize: '20rem', padding: '0 10rem' }}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <div>1. 电话的使用 </div>
        <Form.Item label='你能不能自己用电话呢?” 包括找电话号码, 打及接听电话?' >
          <Form.Item rules={commonRuls} name="1.电话的使用">
            <Radio.Group>
              <Space align='start' direction="vertical">
                <Radio value="电话自理">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="电话需要帮忙">需要一些帮忙
                </Radio>
                <Radio value="电话依赖">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form.Item>

        <div>2.交通的使用</div>
        <Form.Item label='你能不能自己搭车呢?” 包括自己上到正确的车, 付车票钱/买车票, 上/下车
            (假设你必须要搭交通工具去一个远的地方，例如探朋友/看病)'  >
          <Form.Item rules={commonRuls} name="2.交通的使用">
            <Radio.Group>
              <Space align='start' direction="vertical">
                <Radio value="交通自理">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="交通需要帮忙">需要一些帮忙
                </Radio>
                <Radio value="交通依赖">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form.Item>

        <div>3.购物</div>
        <Form.Item label='你能不能自己买物品呢?” 包括自己选物品﹑付钱及带回家里
            (假设你必须要到附近商店买食物或日用品)'  >
          <Form.Item rules={commonRuls} name="3.购物">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="购物自理">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="购物需要帮忙">需要一些帮忙
                </Radio>
                <Radio value="购物依赖">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form.Item>

        <div>4.准备食物</div>
        <Form.Item label='你能不能自己煮食呢? 包括自己计划食物﹑准备材料﹑煮熟食物及放入碗碟里
            (假设你必须要自己准备一顿饭)' >
          <Form.Item rules={commonRuls} name="4.准备食物">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="准备食物自理">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="准备食物需要帮忙">需要一些帮忙
                </Radio>
                <Radio value="准备食物依赖">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form.Item>



        <div>5.家务活动</div>
        <Form.Item label='你能不能自己做家务呢? 包括简单家务(如抹桌子﹑叠被子﹑洗碗)及较重的家务(如抹地/窗)
            (假设你必须要自己做家务)' >
          <Form.Item rules={commonRuls} name="5.家务活动">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="家务活动自理">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="家务活动需要帮忙">需要一些帮忙
                </Radio>
                <Radio value="家务活动依赖">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form.Item>

        <div>6.家居维修</div>
        <Form.Item label='你能不能应付简单的家居维修呢?” 例如换灯泡﹑維修桌子及上螺丝等
            (假设你必须要自己做)' >
          <Form.Item rules={commonRuls} name="6.家居维修">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="家居维修自理">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="家居维修需要帮忙">需要一些帮忙
                </Radio>
                <Radio value="家居维修依赖">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group></Form.Item>
        </Form.Item>

        <div>7.卫生</div>
        <Form.Item label='你能不能夠自己洗衣服呢?包括清洗及凉自己的衫﹑被﹑床单等
            (假设你必须要洗自己的衫﹑被﹑床单等)' >
          <Form.Item rules={commonRuls} name="7.卫生">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="卫生自理">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="卫生需要帮忙">需要一些帮忙
                </Radio>
                <Radio value="卫生依赖">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group></Form.Item>
        </Form.Item>

        <div>8.服药</div>
        <Form.Item label='你能不能自己服用药物呢? 包括能依照指示在正确的时间內服用正确的份量
            (假设你必须要自己擦药或食药等)'   >
          <Form.Item rules={commonRuls} label="" name="8.服药">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="服药自理">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="服药需要帮忙">需要一些帮忙
                </Radio>
                <Radio value="服药依赖">完全不能自己做
                </Radio>
              </Space>
            </Radio.Group></Form.Item>
        </Form.Item>

        <div>9.财务管理</div>
        <Form.Item label='你能不能处理自己的财物呢? 包括日常的找零钱﹑交租/水电费及到银行提款
            (假设你必须要买物品﹑自己交租/水电费及有钱在银行)' >
          <Form.Item rules={commonRuls} label="" name="9.财务管理">
            <Radio.Group>
              <Space direction='vertical'>
                <Radio value="财务管理自理">可以自己做，但做的时候有困难
                </Radio>
                <Radio value="财务管理需要帮忙">需要一些帮忙
                </Radio>
                <Radio value="财务管理依赖">完全不能自己做
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
      </Form>
    </Commontitle >
  )
}
