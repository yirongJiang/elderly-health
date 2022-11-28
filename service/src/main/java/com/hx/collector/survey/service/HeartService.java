package com.hx.collector.survey.service;

import com.hx.collector.survey.dao.AuditionMapper;
import com.hx.collector.survey.dao.HeartMapper;
import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.AuditionDetail;
import com.hx.collector.survey.model.colloctor.dto.HeartDetail;
import com.hx.collector.survey.model.colloctor.req.AddAuditionReq;
import com.hx.collector.survey.model.colloctor.req.AddHeartReq;
import com.hx.collector.survey.model.colloctor.req.ModifyAuditionReq;
import com.hx.collector.survey.model.colloctor.req.ModifyHeartReq;
import com.hx.collector.survey.model.db.AuditionDbBean;
<<<<<<< HEAD
import com.hx.collector.survey.model.db.CognitionDbBean;
=======
>>>>>>> main
import com.hx.collector.survey.model.db.HeartDbBean;
import com.hx.collector.utils.UuidUtil;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

import javax.annotation.Resource;

@Service
public class HeartService extends BaseService{
    @Resource
    private HeartMapper heartMapper;

    public HeartDetail detail(String token) {
        QueryWrapper<HeartDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        HeartDbBean heartDbBean = heartMapper.selectOne(wrapper);
        HeartDetail resp = new HeartDetail();
        BeanUtils.copyProperties(heartDbBean, resp);
        return resp;
    }

    public HeartDbBean create(AddHeartReq addHeartReq, String token) {
        HeartDbBean bean = new HeartDbBean();
        BeanUtils.copyProperties(addHeartReq, bean);
        bean.setCreateDate(new Date()).setUpdateDate(new Date())
                .setId(UuidUtil.getId()).setDelFlge("1").setUserId(getUserId(token));
        return bean;
    }

    public HeartDbBean modify(ModifyHeartReq modifyHeartReq, String token) {
        HeartDbBean bean = new HeartDbBean();
        BeanUtils.copyProperties(modifyHeartReq, bean);
        bean.setUpdateDate(new Date()).setUserId(this.getUserId(token));
        return bean;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result createInfo(HeartDbBean bean) {
        Result res = new Result("create heart error!");
        int infoNum =  heartMapper.insert(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("create heart success!");
            return res;
        }
        return res;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result modifyInfo(HeartDbBean bean) {
        Result res = new Result("modify heart error!");
        int infoNum =  heartMapper.modify(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("modify heart success!");
            return res;
        }
        return res;
    }
<<<<<<< HEAD

    public Result getGrade(String token){
        Result res = new Result("not find data!");
        QueryWrapper<HeartDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        HeartDbBean heartDbBean = heartMapper.selectOne(wrapper);
        if (heartDbBean == null) {
            return res;
        }
        int data = Integer.valueOf(heartDbBean.getQOne());
        int sum = 1;
        if (data >= 7) {
            sum = 1;
        } else if (data >= 5 && data < 7) {
            sum = 2;
        } else if (data >= 2 && data < 5) {
            sum = 3;
        } else {
            sum = 4;
        }
        res.setCode(200);
        res.setBody(sum);
        return res;
    }
=======
>>>>>>> main
}
