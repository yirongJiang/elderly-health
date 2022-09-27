import axios from "axios";
const request=axios.create({
  baseURL:'',
  timeout:5000
})


//添加请求拦截器
request.interceptors.request.use(config=>{
  return config
},err=>{
  console.log('请求拦截')
  return Promise.reject(err)
}
)

//添加响应拦截器
request.interceptors.response.use(res=>{
  return res.data
},err=>{
  return Promise.reject(err)
})

export default request