import { Button, Form, message, Radio, Space } from 'antd';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Commontitle from '../../../UI/Nav-head'
import { topicNumbercontext, topicFormDatacontext } from '../../../store/topicNumbercontext'
import './index.less'
import { postBi } from '../../../api';
import ToTopBtn from '../../../utility/ToTopBtn';


const commonRuls = [
  {
    required: true,
    message: '请填写完整',
  },
]
export default function Bi() {

  const [form] = Form.useForm()
  const nav = useNavigate()

  const onFinish = async (values) => {
    const res = await postBi(values)
    topicContext.numberDispatch({ type: 'TOTALADD', selectedNumber: 1 })
    nav('/evaluationdetail/scalenav')
    message.success('恭喜您，提交成功')
  };

  const formItemLayout = {
    labelCol: {
      span: 6,
      offset: 0,
    },
    wrapperCol: {
      span: 13,
      offset: 1
    },
  };
  const topicContext = useContext(topicNumbercontext)
  const formdataContext = useContext(topicFormDatacontext)

  const formChange = (e) => {
    const value = form.getFieldsValue(true)
    let formdata = value
    let selectedNumber = Object.keys(value).length
    topicContext.numberDispatch({ type: 'BIADD', selectedNumber: selectedNumber })
    formdataContext.formDispatch({ type: 'BIFORM', formdata: formdata })
  }
  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.biFormdata })
  }, [])

  return (
    <Commontitle title='BI评估表' className='bi-wrapper'>
      <ToTopBtn />
      <Form
        scrollToFirstError
        onFieldsChange={formChange}
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        style={{ padding: '0 10rem' }}
      >
        <Form.Item rules={commonRuls} name="qone" label="1.进食">
          <Radio.Group>

            <Radio value="1">自己在合理的时间内（约10秒钟吃一口）可用筷子取食眼前的食物
              若需辅具时，应会自行穿脱
            </Radio>
            <Radio value="2">需部分帮忙（切面包、抹黄油、夹菜、盛饭等）
            </Radio>
            <Radio value="3">依赖
            </Radio>

          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRuls} name="qtwo" label="2.转移">
          <Radio.Group>
            <Space align='start' direction="vertical">
              <Radio value="1">自理
              </Radio>
              <Radio value="2">需要少量说明(1人)或语言指导
              </Radio>
              <Radio value="3">需两人或1个强壮、动作娴熟的人帮助
              </Radio>
              <Radio value="4">完全依赖别人
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRuls} name="qthree" label="3.修饰">
          <Radio.Group>
            <Radio value="1">可独立完成洗脸、洗手、刷牙及梳头
            </Radio>
            <Radio value="2">需要别人帮忙
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRuls} name="qfour" label="4.如厕">
          <Radio.Group>
            <Radio value="1">可自行进出厕所，并能穿好衣服使用便盆者，可自行清理便盆
            </Radio>
            <Radio value="2">需帮忙保持姿势的平衡，整理衣物或使用卫生纸使用便盆者，可自行取放便盆，但须仰赖他人清理
            </Radio>
            <Radio value="3">需要别人帮忙
            </Radio>
          </Radio.Group>
        </Form.Item>



        <Form.Item rules={commonRuls} name="qfive" label="5.洗澡">
          <Radio.Group>
            <Radio value="1">可独立完成（不论是盆浴或淋浴）
            </Radio>
            <Radio value="2">需要别人帮忙
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRuls} name="qsix" label="6.行45m）">
          <Radio.Group>
            <Radio value="1">使用或不使用辅具皆可独立行走50公尺以上
            </Radio>
            <Radio value="2">需要稍微的扶持或口头指导方可行走50公尺以上
            </Radio>
            <Radio value="3">虽无法行走，但可独立操纵轮椅（包括转弯、进门、及接近桌子/床沿）并可推行轮椅50公尺以上
            </Radio>
            <Radio value="4">需要别人帮忙
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRuls} name="qseven" label="7.上下楼梯">
          <Radio.Group>
            <Radio value="1">可自行上下楼梯（允许抓扶手、用拐杖）
            </Radio>
            <Radio value="2">需要稍微帮忙或口头指导
            </Radio>
            <Radio value="3">无法上下楼梯
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRuls} name="qeight" label="8.穿衣">
          <Radio.Group>
            <Radio value="1">可自行穿脱衣服、鞋子及辅具
            </Radio>
            <Radio value="2">在别人帮忙下、可自行完成一半以上的动作
            </Radio>
            <Radio value="3">需别人帮忙
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRuls} name="qnine" label="9.大便控制">
          <Radio.Group>
            <Space direction='vertical'>
              <Radio value="1">能控制
              </Radio>
              <Radio value="2">偶尔失禁（每周＜1次）
              </Radio>
              <Radio value="3">失禁或昏迷
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item rules={commonRuls} name="qten" label="10.小便控制">
          <Radio.Group>
            <Radio value="1">能控制
            </Radio>
            <Radio value="2">偶尔失禁（每周＜1次）或尿急（无法等待便盆或无法实时赶到厕所）
            </Radio>
            <Radio value="3">失禁、昏迷或需要他人导尿
            </Radio>
          </Radio.Group>
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
    </Commontitle>
  )
}
