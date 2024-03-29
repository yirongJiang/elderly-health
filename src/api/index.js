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

export function postMmse(params){
  return request.post('rest/v1/mmse/creat',params)
}

export function postBi(params){
  return request.post('rest/v1/bi/creat',params)
}

export function postHearing(params){
  return request.post('rest/v1/audition/creat',params)
}

export function postEyesight(params){
  return request.post('rest/v1/vision/creat',params)
}

export function postHeart(params){
  return request.post('rest/v1/heart/creat',params)
}
export function postPsychology(params){
  return request.post('rest/v1/psychology/creat',params)
}
export function postSwallow(params){
  return request.post('rest/v1/swallow/creat',params)
}
export function postCognitionTwo(params){
  return request.post('rest/v1/cognitionTwo/creat',params)
}
export function postWalk(params){
  return request.post('rest/v1/walk/creat',params)
}
export function postPain(params){
  return request.post('rest/v1/pain/creat',params)
}

//分数计算
export function postCountGrade(){
  return request.post('rest/v1/evaluate/count/grade')
}

//分数查询
export function postGetGrade(params){
  return request.post('/rest/v1/evaluate/get/grade',params)
}

