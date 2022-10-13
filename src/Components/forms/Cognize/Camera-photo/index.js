
import { But, Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

export default function CameraComponent() {
  let width = 320;
  let height = 0;
  let streaming = false;
  let video = null;
  let canvas = null;
  let startButton  = null;
  useEffect(() => {
    startup()
  })
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

  return (
    <div className="contentarea">
      <div className="camera">
        <video id="video">视频还未准备好</video>
        <canvas id="canvas">
        </canvas>
        <Button type='primary' id="startButton">点击拍照</Button>
      </div>
    </div>
  )
}

