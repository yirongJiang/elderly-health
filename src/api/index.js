import request from "./request";

export function login(params){
  return request.post('rest/v1/user/login',params)
}

export function register(params){
  return request.post('rest/v1/user/register',params)
}


export function postInfo(params){
  return request.post('rest/v1/user/info/creat',params)
}

export function postIadl(params){
  return request.post('rest/v1/iadl/creat',params)
}

