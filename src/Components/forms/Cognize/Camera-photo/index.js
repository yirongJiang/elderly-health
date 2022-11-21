
import { But, Button, message } from 'antd';
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { topicNumbercontext } from '../../../../store/topicNumbercontext';
import './index.less'

export default function CameraComponent() {
  let width = 320;
  let height = 0;
  let streaming = false;
  let video = null;
  let canvas = null;
  let startButton = null;

  const nav = useNavigate()
  useEffect(() => {
    startup()
  }, [])

  const topicContext = useContext(topicNumbercontext)

  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    startButton = document.getElementById('startButton');

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(function (stream) {
        video.srcObject = stream;
        video.play();
      })
      .catch(function (err) {
        console.log("拍照错误: " + err);
      });

    video.addEventListener('canplay', function (ev) {
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width);

        if (isNaN(height)) {
          height = width / (5 / 4);
        }

        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);

    startButton.addEventListener('click', function (ev) {
      takepicture();
      ev.preventDefault();
    }, false);

    clearphoto();
  }

  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    console.log(data)
  }

  function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      var data = canvas.toDataURL('image/png');
      console.log(data)
    } else {
      clearphoto();
    }
  }
  const subClock = () => {
    video.pause()
    nav('/evaluationdetail/scalenav')
    topicContext.numberDispatch({ type: 'COGNIZEADD', selectedNumber: 3 })
    message.success('拍照完成啦')
  }
  return (
    <div className="contentarea">
      <div className="camera">
        <video id="video">视频还未准备好</video>
        <canvas id="canvas">
        </canvas>
        <div className="bottom">
          <Button type='primary' id="startButton">点击拍照</Button>
          <Button type='primary' onClick={subClock} id="submitButton">提交</Button>
        </div>
      </div>
    </div>
  )
}

