import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Commontitle from '../../../UI/Nav-head';
import Chart from '../../../utility/echart';
import { Button } from 'antd'
// 引入 echarts 核心模块
import * as echarts from 'echarts/core';
import "echarts/lib/component/legend";
// 按需引入图表类型
import { RadarChart } from 'echarts/charts';
// 按需引入标题，提示框组件
import { LegendComponent, TitleComponent, TooltipComponent,} from 'echarts/components';
// 引入 Canvas 渲染器
import { CanvasRenderer } from 'echarts/renderers';
import './index.less'
import HomeBtn from '../../../UI/HeaderBtn';
import { useEffect } from 'react';
import { basicFormContext } from '../../../store/topicNumbercontext';
import { useState } from 'react';


// 注册必须的组件
echarts.use([
  RadarChart,
  TitleComponent,
  TooltipComponent,
  CanvasRenderer,
  LegendComponent
]);

export default function Evaluationoutcome() {

  const [sevenInfo, setSevenInfo] = useState({})
  const formdataContext = useContext(basicFormContext)
  const nav = useNavigate()
  let location = useLocation();
  const { state: { array, trueBack } } = location

  const outCome = async () => {
    setSevenInfo(array)
  }

  useEffect(() => {
    outCome()
  }, [])

  const navHome = () => {
    formdataContext.basicFormGroupDispatch({ type: 'basicForm', formData: {} })
    nav('/home')
  }

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
        { name: '感觉', max: 100 },
        { name: '运动', max: 100 },
        { name: '心理', max: 100 },
        { name: '二便', max: 100 },
        { name: '吞咽', max: 100 },
        { name: '心肺', max: 100 },
        { name: '认知', max: 100 }
      ]
    },
    series: [
      {
        name: '七维认知分析图',
        type: 'radar',
        data: [
          {
            value: [sevenInfo?.evaGzj , sevenInfo?.evaYd , sevenInfo?.evaXl , sevenInfo?.evaRb , sevenInfo?.evaXf , sevenInfo?.evaTy , sevenInfo?.evaRz ],
            name: '认知图例'
          }
        ]
      }
    ]
  };
  return (
    <Commontitle basicPage noBack={trueBack ? false : true} title='您得评估结果如下 ： ' className='echart-wrapper'>
      <HomeBtn />
      <Chart options={options} />
      <table >
        <thead>
          <tr>
            <th>项目</th>
            <th>分数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>感觉</td>
            <td>{sevenInfo?.evaGzj}</td>
          </tr>
          <tr>
            <td>运动</td>
            <td>{sevenInfo?.evaYd}</td>
          </tr>
          <tr>
            <td>心理</td>
            <td>{sevenInfo?.evaXl}</td>
          </tr>
          <tr>
            <td>二便</td>
            <td>{sevenInfo?.evaRb}</td>
          </tr>
          <tr>
            <td>心肺</td>
            <td>{sevenInfo?.evaXf}</td>
          </tr>
          <tr>
            <td>吞咽</td>
            <td>{sevenInfo?.evaTy}</td>
          </tr>
          <tr>
            <td>认知</td>
            <td>{sevenInfo?.evaRz}</td>
          </tr>
        </tbody>
      </table>
      <Button className='Button' onClick={navHome} type='primary'>完成</Button>
    </Commontitle>
  )
}
