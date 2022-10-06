import { Button, Form, Radio, Space } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Commontitle from '../../../UI/Nav-head'

export default function Bi() {
  const [form] = Form.useForm()
  const nav=useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    nav('/home', { state: { isSuccess: true } })
  };
  const formItemLayout = {
    labelCol: {
      span: 6,
      offset: 1
    },
    wrapperCol: {
      span: 13,
      offset: 0
    },
  };
  return (
    <Commontitle title='BI评估表' className='bi-wrapper'>
      
      <Form
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <Form.Item name="BI1" label="1.进食">
          <Radio.Group>

            <Radio value="进食自理">自己在合理的时间内（约10秒钟吃一口）可用筷子取食眼前的食物。
              若需辅具时，应会自行穿脱。
            </Radio>
            <Radio value="进食需要帮忙">需部分帮忙（切面包、抹黄油、夹菜、盛饭等）。
            </Radio>
            <Radio value="进食依赖">依赖。
            </Radio>

          </Radio.Group>
        </Form.Item>

        <Form.Item name="BI2" label="2.转移">
          <Radio.Group>
            <Space align='start' direction="vertical">
              <Radio value="转移自理">自理
              </Radio>
              <Radio value="转移需要帮忙">需要少量说明(1人)或语言指导。
              </Radio>
              <Radio value="转移依赖">需两人或1个强壮、动作娴熟的人帮助。
              </Radio>
              <Radio value="转移完全依赖">完全依赖别人。
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="BI3" label="3.修饰">
          <Radio.Group>
            <Radio value="修饰独立">可独立完成洗脸、洗手、刷牙及梳头。
            </Radio>
            <Radio value="修饰需要帮忙">需要别人帮忙。
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="BI4" label="4.如厕">
          <Radio.Group>
            <Radio value="如厕可以自行">可自行进出厕所，并能穿好衣服。使用便盆者，可自行清理便盆。
            </Radio>
            <Radio value="如厕需要帮忙">需帮忙保持姿势的平衡，整理衣物或使用卫生纸。使用便盆者，可自行取放便盆，但须仰赖他人清理。
            </Radio>
            <Radio value="如厕依赖">需要别人帮忙。
            </Radio>
          </Radio.Group>
        </Form.Item>



        <Form.Item name="BI5" label="5.洗澡">
          <Radio.Group>
            <Radio value="洗澡自理">可独立完成（不论是盆浴或淋浴）。
            </Radio>
            <Radio value="洗澡需要帮忙">需要别人帮忙。
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item  name="BI6" label="6.行45m）">
          <Radio.Group>
            <Radio value="行走自理">使用或不使用辅具皆可独立行走50公尺以上。
            </Radio>
            <Radio value="行走需要扶持">需要稍微的扶持或口头指导方可行走50公尺以上。
            </Radio>
            <Radio value="行走需要轮椅">虽无法行走，但可独立操纵轮椅（包括转弯、进门、及接近桌子/床沿）并可推行轮椅50公尺以上。
            </Radio>
            <Radio value="行走依赖">需要别人帮忙。
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="BI7" label="7.上下楼梯">
          <Radio.Group>
            <Radio value="楼梯自行">可自行上下楼梯（允许抓扶手、用拐杖）
            </Radio>
            <Radio value="楼梯需要帮忙">需要稍微帮忙或口头指导。
            </Radio>
            <Radio value="楼梯依赖">无法上下楼梯。
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="BI8" label="8.穿衣">
          <Radio.Group>
            <Radio value="穿衣自行">可自行穿脱衣服、鞋子及辅具。
            </Radio>
            <Radio value="穿衣需要帮忙">在别人帮忙下、可自行完成一半以上的动作。
            </Radio>
            <Radio value="穿衣依赖">需别人帮忙。
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="BI9" label="9.大便控制">
          <Radio.Group>
            <Space direction='vertical'>
            <Radio value="大便能控制">能控制。
            </Radio>
            <Radio value="大便偶尔失禁">偶尔失禁（每周＜1次）。
            </Radio>
            <Radio value="大便完全失禁">失禁或昏迷。
            </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="BI10" label="10.小便控制">
          <Radio.Group>
            <Radio value="小便能控制">能控制
            </Radio>
            <Radio value="小便偶尔失禁">偶尔失禁（每周＜1次）或尿急（无法等待便盆或无法实时赶到厕所）。
            </Radio>
            <Radio value="小便完全失禁">失禁、昏迷或需要他人导尿。
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
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
    </Commontitle>
  )
}
