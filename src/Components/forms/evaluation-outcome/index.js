import React from 'react'
import { useNavigate } from 'react-router-dom'
import Commontitle from '../../../UI/Nav-head';
import Chart from '../../../utility/echart';
import { Button } from 'antd'
// 引入 echarts 核心模块
import * as echarts from 'echarts/core';
// 按需引入图表类型
import { RadarChart } from 'echarts/charts';
// 按需引入标题，提示框组件
import { TitleComponent, TooltipComponent } from 'echarts/components';
// 引入 Canvas 渲染器
import { CanvasRenderer } from 'echarts/renderers';
import './index.less'
import Navfooter from '../../../UI/nav-footer';
import HomeBtn from '../../../UI/HeaderBtn';

// 注册必须的组件
echarts.use([
  RadarChart,
  TitleComponent,
  TooltipComponent,
  CanvasRenderer
]);
export default function Evaluationoutcome() {
  const nav = useNavigate()
  const options = {
    title: {
      text: '七维认知分析图',
      textStyle: {
        color: '#2a4986'
      },
      // top:'20'
    },
    legend: {
      data: ['感觉', '运动', '心理', '二便', '心肺', '吞咽', '认知']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: '感觉', max: 6500 },
        { name: '运动', max: 16000 },
        { name: '心理', max: 30000 },
        { name: '二便', max: 38000 },
        { name: '吞咽', max: 52000 },
        { name: '认知', max: 25000 }
      ]
    },
    series: [
      {
        name: '七维认知分析图',
        type: 'radar',
        data: [
          {
            value: [6200, 10000, 20000, 35000, 50000, 18000],
            name: '认知图例'
          }
        ]
      }
    ]
  };
  return (
    <Commontitle  basicPage title='您得评估结果如下 ： ' className='echart-wrapper'>
      <HomeBtn/>
      <Chart options={options} />
      <table >
        <thead>
          <tr>
            <th>项目</th>
            <th>分数</th>
          </tr>
        </thead>
        <tr>
          <td>感觉</td>
          <td>60</td>
        </tr>
        <tr>
          <td>感觉</td>
          <td>60</td>
        </tr>
        <tr>
          <td>感觉</td>
          <td>60</td>
        </tr>
        <tr>
          <td>感觉</td>
          <td>60</td>
        </tr>
        <tr>
          <td>感觉</td>
          <td>60</td>
        </tr>
        <tr>
          <td>感觉</td>
          <td>60</td>
        </tr>
        <tr>
          <td>感觉</td>
          <td>60</td>
        </tr>
      </table>
      <Button className='Button' onClick={() => { nav('/home') }} type='primary'>完成</Button>
      {/* <Navfooter /> */}
    </Commontitle>
  )
}
