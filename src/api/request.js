import { message } from "antd";
import axios from "axios";

const request = axios.create({
  baseURL: 'http://43.138.153.236:8090/',
  timeout: 5000,
})


//添加请求拦截器
request.interceptors.request.use(config => {
  if (localStorage.getItem('X-Auth-Token')) {
    config.headers['X-Auth-Token'] = localStorage.getItem('X-Auth-Token')
  }

  return config
}, err => {
  console.log('请求拦截');
  return Promise.reject(err)
})

// 添加响应拦截器
request.interceptors.response.use(res => {
  if (res.data.code === 401) {
    localStorage.removeItem('X-Auth-Token')
    message.error('token已经过期啦,请重新登录')
    window.location.href = '/initail'
  }
  return res.data
}, err => {
  // 对响应错误做点什么
  console.log('err' + err);
  if (err?.response?.code) {
    switch (err.response.code) {
      case 400:
        message.error('请求出错')
        alert('error')
        break;
      case 401:
        localStorage.removeItem('X-Auth-Token');
        window.location.href = '/login'
        message.err("未授权或登录权限已过期")
        break
      case 403:
        message.error('无操作权限');
        break;
      case 500:
        message.error('服务器出错');
        break;
      case 503:
        message.error('服务不可用');
        break;
      default:
        break;
    }
  }
  return Promise.reject(err);
});

export default request