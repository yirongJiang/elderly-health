package com.hx.collector.survey.service;

import com.hx.collector.survey.dao.PainMapper;
import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.PainDetail;
import com.hx.collector.survey.model.colloctor.req.AddPainReq;
import com.hx.collector.survey.model.colloctor.req.ModifyPainReq;
import com.hx.collector.survey.model.db.AuditionDbBean;
import com.hx.collector.survey.model.db.PainDbBean;
import com.hx.collector.utils.UuidUtil;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.Date;

import javax.annotation.Resource;

@Service
public class PainService extends BaseService{
    @Resource
    private PainMapper painMapper;

    public PainDetail detail(String token) {
        QueryWrapper<PainDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        PainDbBean painDbBean = painMapper.selectOne(wrapper);
        PainDetail resp = new PainDetail();
        BeanUtils.copyProperties(painDbBean, resp);
        return resp;
    }

    public PainDbBean create(AddPainReq addPainReq, String token) {
        PainDbBean bean = new PainDbBean();
        BeanUtils.copyProperties(addPainReq, bean);
        bean.setCreateDate(new Date()).setUpdateDate(new Date())
                .setId(UuidUtil.getId()).setDelFlge("1").setUserId(getUserId(token));
        return bean;
    }

    public PainDbBean modify(ModifyPainReq modifyPainReq, String token) {
        PainDbBean bean = new PainDbBean();
        BeanUtils.copyProperties(modifyPainReq, bean);
        bean.setUpdateDate(new Date()).setUserId(this.getUserId(token));
        return bean;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result createInfo(PainDbBean bean) {
        Result res = new Result("create pain error!");
        int infoNum =  painMapper.insert(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("create pain success!");
            return res;
        }
        return res;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result modifyInfo(PainDbBean bean) {
        Result res = new Result("modify pain error!");
        int infoNum =  painMapper.modify(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("modify pain success!");
            return res;
        }
        return res;
    }

    public Result getGrade(String token){
        Result res = new Result("not find data!");
        QueryWrapper<PainDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        PainDbBean painDbBean = painMapper.selectOne(wrapper);
        if (painDbBean == null) {
            return res;
        }
        int sum = 0;
        if (Integer.valueOf(painDbBean.getLevelOne()) < 3) {
            sum = sum + Integer.valueOf(painDbBean.getLevelOne()) ;
        } else {
            sum += 3;
        }
        if (Integer.valueOf(painDbBean.getLevelTwo()) < 3) {
            sum = sum + Integer.valueOf(painDbBean.getLevelTwo()) ;
        } else {
            sum += 3;
        }
        res.setCode(200);
        res.setBody(sum);
        return res;
    }
}
