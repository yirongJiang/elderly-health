import { Button } from 'antd'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Commontitle from '../../../../UI/Nav-head'
import './index.less'
export default function Cognizethird() {
  const [changePage, setChangePage] = useState(0)
  const canvasDom = useRef()
  const nav = useNavigate()
  const [canvasUrl, setCanvasUrl] = useState([])
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

  useEffect(() => {
    let beginX; let beginY
    const canvas = canvasDom.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    canvas.addEventListener('touchstart', function (event) {
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
      beginX = stopX // 这一步很关键，需要不断更新起点，否则画出来的是射线簇
      beginY = stopY
    })
  }, [])

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

  const sure = () => {
    const url = canvasDom.current.toDataURL("image/jpeg", 1.0)
    console.log(url)
    setChangePage(1)
    setTimeout(() => {
      nav(`/home`,{state:{isSuccess:true}})
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
    <Commontitle title='在空白处话初11点10分的钟表 ：' className='cognizethird-wrapper'>
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
        </div></div> : <div className='buffer'>图片上传中<br />请稍作等待...</div>
      }
    </Commontitle>
  )
}

