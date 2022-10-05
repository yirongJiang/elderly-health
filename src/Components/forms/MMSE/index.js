import React from 'react'
import { Button, Form, Radio } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.less'
import rectangel from '../../../assect/img/画图.png'

export default function Mmse() {
  const [form] = Form.useForm()
  const nav = useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    nav('/home', { state: { isSuccess: true } })
  };
  const formItemLayout = {
    labelCol: {
      span: 3,
      offset: 2
    },
    wrapperCol: {
      span: 16,
      offset: 2
    },
  };
  return (
    <div className='common-wrapper'>
      <div className="cognize-heade">
        <div onClick={() => { nav(-1) }} className="back"> &lt;  返回</div>
        <div className="title">简易精神状态检查量表(MMSE)</div>
      </div>
      <div className="attention">
        * 填写人为医务人员时，可选填此表，自评则不需转跳至此表）<br />
        正确为“1”，不正确为“0”
      </div>
      <Form
        form={form}
        name="validate_other"
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
          name="mmse1" label="1、今年是哪一年？ ">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]}
          name="mmse2" label="2、现在是什么季节？">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]}
          name="mmse3" label="3、现在是几月份？ ">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]}
          name="mmse4" label="4、今天是几号？">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse5" label="5、今天是星期几？">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse6" label="6、你现在在哪个省（市）？">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse7" label="7、你现在在哪个县（区）？">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse8" label="8、你现在在哪个乡（镇、街道）？">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse9" label="9、你现在在第几层楼？">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse10" label="10、这里是什么地方？">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse11" label="11、复述：皮球 ">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse12" label="12、复述：国旗 ">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse13" label="13、复述：树木">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse14" label="14、计算100－7＝？">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse15" label="15、－7＝？">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse16" label="16、－7＝？">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse17" label="17、－7＝？">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse18" label="18、－7＝？">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse19" label="19、回忆：皮球 ">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse20" label="20、回忆：国旗 ">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse21" label="21、回忆：树木">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse22" label="22、辨认：手表">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse23" label="23、辨认：铅笔">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse24" label="24、复述：四十四只石狮子">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse25" label="25、按卡片上的指令去做“闭上您的眼睛">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse26" label="26、用右手拿这张纸">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]} name="mmse27" label="27、再用双手把纸对折">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]}
          name="mmse28" label="28、将纸放在大腿上">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]}
          name="mmse29" label="29、请说一句完整的句子">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
        rules={[
          {
            required: true,
            message: '请选择完整',
          },
        ]}
          name="mmse30" label="30、请您按样子在下框中画图">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="0">0</Radio>
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
          style={{ width: '80%',marginTop:'90px'}}
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
    </div>
  )
}
