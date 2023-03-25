import { Button, message } from 'antd'
import React, { useEffect, useState, useRef } from 'react'
import {  useNavigate } from 'react-router-dom'
import Commontitle from '../../../../UI/Nav-head'
import './index.less'
import { postCognitionTwo } from '../../../../api'
import { useContext } from 'react'
import { topicNumbercontext } from '../../../../store/topicNumbercontext'

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
let isTap = 0

export default function Cognizethird() {

  let drawingTime = 0;
  const position = {}
  const startTime = +new Date()
  //测试传感器

  const [changePage, setChangePage] = useState(0)
  const canvasDom = useRef()
  const nav = useNavigate()
  const [canvasUrl, setCanvasUrl] = useState([])
  const [start, setStart] = useState(false)
  const ctx = useContext(topicNumbercontext)

  useEffect(() => {
    let timer = setInterval(() => {
      if (start) {
        isTapArray.push(isTap)
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
      setStart(true)
      isTap = 1
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
      setStart(true)
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
        position[beginX] = beginY
        timer = null
      }, 33.2)

      if (timer1) { return }
      timer1 = setTimeout(() => {
        drawingTime++
        timer1 = null
      }, 1000);
    })

    canvas.addEventListener('touchend', () => {
      isTap = '0'
    })

  }, [])

  useEffect(() => {
    let t
    if (start) {
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

        }, 1000);
      });

      return () => {
        window.removeEventListener("deviceorientation", function (event) {
          if (t) { return }
          t = setTimeout(() => {
            let x = event.alpha;
            let y = event.gamma;
            let z = event.beta;
            t = null
            cgq_zl_angx.push(x)
            cgq_zl_angy.push(y)
            cgq_zl_angz.push(z)

          }, 1000);
        })
      }
    }


  }, [start])

  useEffect(() => {
    let t1
    if (start) {
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

          t1 = null
        }, 1000);
      })
    }
    return () => {
      window.removeEventListener("devicemotion", function (event) {
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

          t1 = null
        }, 1000);
      })
    }
  }, [start])

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
    }
  }

  const sure = async () => {
    const url = canvasDom.current.toDataURL("image/jpeg", 1.0)
    const endTime = +new Date()
    let totalTime = 0
    let totalLength = 0
    totalTime = endTime - startTime
    totalLength = xMoveLength + yMoveLength
    const obj = {
      "fingerStatus": isTapArray,
      "gravityAngx": cgq_zl_angx,
      "gravityAngy": cgq_zl_angy,
      "gravityAngz": cgq_zl_angz,
      "speedAngx": cgq_jsd_x,
      "speedAngy": cgq_jsd_y,
      "speedAngz": cgq_jsd_z,
      "gyroscopeAngx": cgq_tly_x,
      "gyroscopeAngy": cgq_tly_y,
      "gyroscopeAngz": cgq_tly_z,
      "pressure": `12.12`,
      "photoClock": url,
      "collectTime": `${totalTime}`,
      "collectLong": `${totalLength}`
    }
    await postCognitionTwo(obj)
    ctx.numberDispatch({ type: 'COGNIZEADD', selectedNumber: 3 })
    ctx.numberDispatch({ type: 'TOTALADD', selectedNumber: 1 })
    setChangePage(1)
    setTimeout(() => {
      nav('/evaluationdetail/scalenav')
      message.success('恭喜您提交成功')
    }, 1000);
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
    <Commontitle title='在空白处绘制11点10分的钟表 ：' back className='cognizethird-wrapper'>
      {changePage === 0 ?
        <div className='formal-content'>
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

