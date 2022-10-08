import { Button, Form, message, Radio, Space } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Commontitle from '../../../UI/Nav-head';
import './index.less'

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
  return (
    <Commontitle title='洛顿IADL评估' className='ladi-wrapper'>
      <Form
        style={{ fontWeight: 'bold', fontSize: '20rem', padding: '0 10rem' }}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <Form.Item    >
          <div>“你能不能自己用电话呢?” 包括找电话号码, 打及接听电话？</div>
          <Form.Item rules={commonRuls} label="1. 电话的使用" name="1.电话的使用">
            <Radio.Group>
              <Radio value="电话自理">可以自己做，但做的时候有困难
              </Radio>
              <Radio value="电话需要帮忙">需要一些帮忙
              </Radio>
              <Radio value="电话依赖">完全不能自己做
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Form.Item>

        <Form.Item   >
          <div>“你能不能自己搭车呢?” 包括自己上到正确的车, 付车票钱/买车票, 上/下车
            (假设你必须要搭交通工具去一个远的地方，例如探朋友/看病)</div>
          <Form.Item rules={commonRuls} label="2.交通的使用" name="2.交通的使用">
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

        <Form.Item   >
          <div>“你能不能自己买物品呢?” 包括自己选物品﹑付钱及带回家里
            (假设你必须要到附近商店买食物或日用品)</div>
          <Form.Item rules={commonRuls} label="3.购物" name="3.购物">
            <Radio.Group>
              <Radio value="购物自理">可以自己做，但做的时候有困难
              </Radio>
              <Radio value="购物需要帮忙">需要一些帮忙
              </Radio>
              <Radio value="购物依赖">完全不能自己做
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Form.Item>

        <Form.Item  >
          <div>“你能不能自己煮食呢?” 包括自己计划食物﹑准备材料﹑煮熟食物及放入碗碟里
            (假设你必须要自己准备一顿饭)</div>
          <Form.Item rules={commonRuls} label="4.准备食物" name="4.准备食物">
            <Radio.Group>
              <Radio value="准备食物自理">可以自己做，但做的时候有困难
              </Radio>
              <Radio value="准备食物需要帮忙">需要一些帮忙
              </Radio>
              <Radio value="准备食物依赖">完全不能自己做
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Form.Item>



        <Form.Item >
          <div>“你能不能自己做家务呢?” 包括简单家务(如抹桌子﹑叠被子﹑洗碗)及较重的家务(如抹地/窗)
            (假设你必须要自己做家务)</div>
          <Form.Item rules={commonRuls} label="5.家务活动" name="5.家务活动">
            <Radio.Group>
              <Radio value="家务活动自理">可以自己做，但做的时候有困难
              </Radio>
              <Radio value="家务活动需要帮忙">需要一些帮忙
              </Radio>
              <Radio value="家务活动依赖">完全不能自己做
              </Radio>
            </Radio.Group></Form.Item>
        </Form.Item>

        <Form.Item   >
          <div>“你能不能应付简单的家居维修呢?” 例如换灯泡﹑維修桌子及上螺丝等
            (假设你必须要自己做)</div>
          <Form.Item rules={commonRuls} label="6.家居维修" name="6.家居维修">
            <Radio.Group>
              <Radio value="家居维修自理">可以自己做，但做的时候有困难
              </Radio>
              <Radio value="家居维修需要帮忙">需要一些帮忙
              </Radio>
              <Radio value="家居维修依赖">完全不能自己做
              </Radio>
            </Radio.Group></Form.Item>
        </Form.Item>

        <Form.Item  >
          <div>“你能不能夠自己洗衣服呢?” 包括清洗及凉自己的衫﹑被﹑床单等
            (假设你必须要洗自己的衫﹑被﹑床单等)</div>
          <Form.Item rules={commonRuls} label="7.卫生" name="7.卫生">
            <Radio.Group>
              <Radio value="卫生自理">可以自己做，但做的时候有困难
              </Radio>
              <Radio value="卫生需要帮忙">需要一些帮忙
              </Radio>
              <Radio value="卫生依赖">完全不能自己做
              </Radio>
            </Radio.Group></Form.Item>
        </Form.Item>

        <Form.Item   >
          <div>“你能不能自己服用药物呢?” 包括能依照指示在正确的时间內服用正确的份量
            (假设你必须要自己擦药或食药等)</div>
          <Form.Item rules={commonRuls} label="8.服药"  name="8.服药">
            <Radio.Group>
              <Radio value="服药自理">可以自己做，但做的时候有困难
              </Radio>
              <Radio value="服药需要帮忙">需要一些帮忙
              </Radio>
              <Radio value="服药依赖">完全不能自己做
              </Radio>
            </Radio.Group></Form.Item>
        </Form.Item>

        <Form.Item  >
          <div>“你能不能处理自己的财物呢?” 包括日常的找零钱﹑交租/水电费及到银行提款
            (假设你必须要买物品﹑自己交租/水电费及有钱在银行)</div>
          <Form.Item rules={commonRuls} label="9.财务管理" name="9.财务管理">
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
