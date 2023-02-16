import { Button, message } from 'antd'
import React, { useEffect, useState, useRef } from 'react'
import { useFetcher, useNavigate } from 'react-router-dom'
import DeviceMotionTest from '../DeviceMotion'
import Commontitle from '../../../../UI/Nav-head'
import './index.less'
import DeviceOrientationTest from '../DeviceOrientation'
import { use } from 'echarts'
import { postCognitionTwo } from '../../../../api'

const cgq_zl_angx = []
const cgq_zl_angy = []
const cgq_zl_angz = []
const cgq_jsd_x = []
const cgq_jsd_y = []
const cgq_jsd_z = []
const cgq_tly_x = []
const cgq_tly_y = []
const cgq_tly_z = []
const isTapArray = []
let xMoveLength = 0
let yMoveLength = 0
let isTap = '0'
export default function Cognizethird() {
  let drawingTime = 0;
  const position = {}
  const startTime = +new Date()
  const [changePage, setChangePage] = useState(0)
  const canvasDom = useRef()
  const nav = useNavigate()
  const [canvasUrl, setCanvasUrl] = useState([])
  const [start, setStart] = useState(false)


  useEffect(() => {
    let timer = setInterval(() => {
      if (start) {
        console.log('isTap 开始')
        console.log(isTap)
        isTapArray.push(isTap)
      } else {
        console.log('还没有开始')
      }
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  })

  useEffect(() => {
    let beginX;
    let beginY;
    let timer;
    let timer1;
    const canvas = canvasDom.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    canvas.addEventListener('touchstart', function (event) {
      isTap = '1'
      setStart(true)
      event.preventDefault() // 阻止在canvas画布上签名的时候页面跟着滚动
      beginX = event.touches[0].clientX - this.offsetLeft
      beginY = event.touches[0].pageY - this.offsetTop
      setCanvasUrl(url => {
        url.push(canvas.toDataURL())
        return url
      })
    }
    )
    canvas.addEventListener('touchmove', (event) => {
      event.preventDefault() // 阻止在canvas画布上签名的时候页面跟着滚动
      event = event.touches[0]
      const stopX = event.clientX - canvas.offsetLeft
      const stopY = event.pageY - canvas.offsetTop
      writing(beginX, beginY, stopX, stopY, ctx)
      xMoveLength += Math.abs(stopX - beginX)
      yMoveLength += Math.abs(stopY - beginY)
      beginX = stopX // 这一步很关键，需要不断更新起点，否则画出来的是射线簇
      beginY = stopY

      if (timer) { return }
      timer = setTimeout(() => {
        console.log('beginX')
        console.log(beginX)
        console.log('beginY')
        console.log(beginY)
        position[beginX] = beginY
        timer = null
      }, 33.2)

      if (timer1) { return }
      timer1 = setTimeout(() => {
        drawingTime++
        console.log('drawingTime')
        console.log(drawingTime)
        timer1 = null
        console.log('isTap', isTap)
      }, 1000);
    })

    let t
    window.addEventListener("deviceorientation", function (event) {
      if (t) { return }
      t = setTimeout(() => {
        let x = event.alpha;
        let y = event.gamma;
        let z = event.beta;
        t = null
        cgq_zl_angx.push(x)
        cgq_zl_angy.push(y)
        cgq_zl_angz.push(z)
        console.log(x, y, z)
      }, 1000);
    });

    let t1
    window.addEventListener('devicemotion', function (event) {
      if (t1) { return }
      t1 = setTimeout(() => {
        let x = event.acceleration.x;
        let y = event.acceleration.y;
        let z = event.acceleration.z;
        let x1 = event.accelerationIncludingGravity.x;
        let y1 = event.accelerationIncludingGravity.y;
        let z1 = event.accelerationIncludingGravity.z;
        cgq_jsd_x.push(x)
        cgq_jsd_y.push(y)
        cgq_jsd_z.push(z)
        cgq_tly_x.push(x1)
        cgq_tly_y.push(y1)
        cgq_tly_z.push(z1)
        console.log("angel acc", x, y, z)
        console.log("angel acc", x1, y1, z1)
        t1 = null
      }, 1000);
    })

    canvas.addEventListener('touchend', () => {
      isTap = '0'
    })

  }, [])


  const writing = (beginX, beginY, stopX, stopY, ctx,) => {
    ctx.beginPath()  // 开启一条新路径
    ctx.globalAlpha = 1  // 设置图片的透明度
    ctx.lineWidth = 3  // 设置线宽
    ctx.fillStyle = 'purple'
    // 设置路径颜色
    ctx.moveTo(beginX, beginY)  // 从(beginX, beginY)这个坐标点开始画图
    ctx.lineTo(stopX, stopY)  // 定义从(beginX, beginY)到(stopX, stopY)的线条（该方法不会创建线条）
    ctx.closePath()  // 创建该条路径
    ctx.stroke()  // 实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
  }


  const clearCanvas = () => {
    const canvas = canvasDom.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  const recallClick = (e) => {
    const canvas = canvasDom.current
    const ctx = canvas.getContext('2d')
    let step = canvasUrl.length - 1
    if (step >= 0) {
      step--;
      ctx.clearRect(0, 0, 1000, 1000);
      let canvasPic = new Image();
      canvasPic.src = canvasUrl[step];
      canvasPic.addEventListener('load', () => {
        ctx.drawImage(canvasPic, 0, 0);
      });

      setCanvasUrl(canvasUrl => {
        canvasUrl.pop()
        return canvasUrl
      })
    } else {
      console.log('不能再继续撤销了');
    }

  }

  const sure = async () => {
    const url = canvasDom.current.toDataURL("image/jpeg", 1.0)
    const endTime = +new Date()
    let totalTime = 0
    let totalLength = 0
    totalTime = endTime - startTime
    totalLength = xMoveLength + yMoveLength
    console.log('drawtime')
    console.log(drawingTime)
    console.log('totalTime')
    console.log(endTime - startTime)
    console.log('xlength')
    console.log(xMoveLength)
    console.log('ylength')
    console.log(yMoveLength)
    console.log('totalLength')
    console.log(totalLength)
    console.log(url)
    console.log('x轴加速度')
    console.log(cgq_jsd_x)
    console.log('y轴加速度')
    console.log(cgq_jsd_y)
    console.log('z轴加速度')
    console.log(cgq_jsd_z)
    console.log('x轴angle加速度')
    console.log(cgq_tly_x)
    console.log('y轴angle加速度')
    console.log(cgq_tly_y)
    console.log('z轴angle加速度')
    console.log(cgq_tly_z)
    console.log('重力传感器采集的x轴角度')
    console.log(cgq_zl_angx)
    console.log('重力传感器采集的y轴角度')
    console.log(cgq_zl_angy)
    console.log('重力传感器采集的z轴角度')
    console.log(cgq_zl_angz)
    console.log('position')
    console.log(position)
    const obj = {
      "fingerStatus": isTapArray,
      "gravityAngx": cgq_zl_angx,
      "gravityAngy": cgq_zl_angy,
      "gravityAngz": cgq_zl_angz,
      "speedAngx":cgq_jsd_x,
      "speedAngy":cgq_jsd_y,
      "speedAngz": cgq_jsd_z,
      "gyroscopeAngx": cgq_tly_x,
      "gyroscopeAngy": cgq_tly_y,
      "gyroscopeAngz": cgq_tly_z,
      // "speedAngx": [
      //   3.12,
      //   13.12,
      //   13.12,
      //   13.12,
      //   13.12
      // ],
      // "speedAngy": [
      //   1.12,
      //   12.12,
      //   13.12,
      //   43.12,
      //   33.12
      // ],
      // "speedAngz": [
      //   6.12,
      //   17.12,
      //   13.12,
      //   23.12,
      //   11.12
      // ],
      // "gyroscopeAngx": [
      //   11.12,
      //   11.12,
      //   11.12,
      //   11.12,
      //   11.12
      // ],
      // "gyroscopeAngy": [
      //   12.12,
      //   12.12,
      //   12.12,
      //   12.12,
      //   12.12
      // ],
      // "gyroscopeAngz": [
      //   3.12,
      //   13.12,
      //   13.12,
      //   13.12,
      //   13.12
      // ],
      "pressure": 12.12,
      "collectTime": totalTime,
      "collectLong": totalLength
    }
    const result = await postCognitionTwo(obj)
    console.log('result')
    console.log(result)
    // setChangePage(1)
    // setTimeout(() => {
    //   nav(-1)
    //   message.success('恭喜您提交成功,请开始画钟')
    // }, 1000);
  }

  const download = () => {
    let img = new Image()
    const url = canvasDom.current.toDataURL("image/jpeg", 1.0)
    img.src = url
    img.onload = () => {
      let href = url
      let a = document.createElement('a');     // 创建一个a节点插入的document
      a.download = 'test.jpeg'  // 设置a节点的download属性值
      a.href = href;         // 将图片的src赋值给a节点的href
      a.click()
    }
  }

  return (
    <Commontitle title='在空白处话初11点10分的钟表 ：' className='cognizethird-wrapper'>
      {changePage === 0 ?
        <div className='formal-content'>
          {

          }
          {/* <DeviceMotionTest arr1={arr1} />
          <DeviceOrientationTest arr={arr} /> */}
          <div className="top-buttons">
            <button onClick={recallClick}>撤销</button>
            <button onClick={clearCanvas}>清除</button>
            <button onClick={download}>下载图片</button>
          </div>
          <canvas className='set-canvas' ref={canvasDom} width="400" height="600" />
          <div className="bottom">
            <Button onClick={sure} type='primary' >绘制完成</Button>
          </div>

        </div> : <div className='buffer'>图片上传中<br />请稍作等待...</div>
      }
    </Commontitle>
  )
}

