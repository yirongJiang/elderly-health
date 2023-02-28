import React, { useContext, useEffect } from 'react'
import { Button, Form, message, Radio, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.less'
import rectangel from '../../../assect/img/画图.png'
import Commontitle from '../../../UI/Nav-head';
import { topicNumbercontext, topicFormDatacontext } from '../../../store/topicNumbercontext'
import { postMmse } from '../../../api';
import ToTopBtn from '../../../utility/ToTopBtn';

export default function Mmse() {
  const [form] = Form.useForm()
  const nav = useNavigate()

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    const res = await postMmse(values)
    console.log(res)
    topicContext.numberDispatch({ type: 'TOTALADD', selectedNumber: 1 })
    nav('/evaluationdetail/scalenav')
    message.success('恭喜您，完成填写！')
  };


  const formItemLayout = {
    labelCol: {
      span: 3,
      offset: 1
    },
    wrapperCol: {
      span: 16,
      offset: 2
    },
  };

  const topicContext = useContext(topicNumbercontext)
  const formdataContext = useContext(topicFormDatacontext)

  const formChange = (e) => {
    const value = form.getFieldsValue(true)
    let formdata = value
    let selectedNumber = Object.keys(value).length
    topicContext.numberDispatch({ type: 'MMSEADD', selectedNumber: selectedNumber })
    formdataContext.formDispatch({ type: 'MMSEFORM', formdata: formdata })
  }
  useEffect(() => {
    form.setFieldsValue({ ...formdataContext.mmseFormdata })

  }, [])

  return (
    <Commontitle title='简易精神状态检查量表(MMSE)' className='mmse-wrapper'>
      <h2>说明:（回答正确为1，回答错误为0）</h2>
      {/* <Button className='goTop' type='primary' ghost onClick={handleScroll}>回到顶部</Button> */}
      <ToTopBtn />
      <Form
        scrollToFirstError
        onFieldsChange={formChange}
        form={form}
        name="MMSE-FORM"
        {...formItemLayout}
        onFinish={onFinish}
      >

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]}
          name="qone" label="1、今年是哪一年？ ">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]}
          name="qtwo" label="2、现在是什么季节？">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]}
          name="qthree" label="3、现在是几月份？ ">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]}
          name="qfour" label="4、今天是几号？">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qfive" label="5、今天是星期几？">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qsix" label="6、你现在在哪个省（市）？">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qseven" label="7、你现在在哪个县（区）？">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qeight" label="8、你现在在哪个乡（镇、街道）？">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qnine" label="9、你现在在第几层楼？">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qten" label="10、这里是什么地方？">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qeleven" label="11、复述：皮球 ">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qtwelve" label="12、复述：国旗 ">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qthirteen" label="13、复述：树木">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qfourteen" label="14、计算100－7＝？">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qfifteen" label="15、－7＝？">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qsixteen" label="16、－7＝？">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qseventeen" label="17、－7＝？">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qeighteen" label="18、－7＝？">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qnineteen" label="19、回忆：皮球 ">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qtwenty" label="20、回忆：国旗 ">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qtwentyOne" label="21、回忆：树木">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qtwentyTwo" label="22、辨认：手表">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qtwentyThree" label="23、辨认：铅笔">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qtwentyFour" label="24、复述：四十四只石狮子">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qtwentyFive" label="25、按卡片上的指令,去做“闭上您的眼睛">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qtwentySix" label="26、用右手拿这张纸">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]} name="qtwentySeven" label="27、再用双手把纸对折">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]}
          name="qtwentyEight" label="28、将纸放在大腿上">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]}
          name="qtwentyNine" label="29、请说一句完整的句子">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]}
          name="qthirty" label="30、请您按样子在下框中画图">
          <Radio.Group>
            <Space size={180}>
              <Radio value="1">1</Radio>
              <Radio value="0">0</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <img src={rectangel} alt="" />

        <Form.Item
          rules={[
            {
              required: true,
              message: '请选择完整',
            },
          ]}
          style={{ width: '80%', marginTop: '90px' }}
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
