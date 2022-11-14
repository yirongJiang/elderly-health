package com.hx.collector.survey.service;

import com.hx.collector.survey.dao.AuditionMapper;
import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.AuditionDetail;
import com.hx.collector.survey.model.colloctor.req.AddAuditionReq;
import com.hx.collector.survey.model.colloctor.req.ModifyAuditionReq;
import com.hx.collector.survey.model.db.AuditionDbBean;
import com.hx.collector.survey.model.db.VisionDbBean;
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
public class AuditionService extends BaseService{
    @Resource
    private AuditionMapper auditionMapper;

    public AuditionDetail detail(String token) {
        QueryWrapper<AuditionDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        AuditionDbBean auditionDbBean = auditionMapper.selectOne(wrapper);
        AuditionDetail resp = new AuditionDetail();
        BeanUtils.copyProperties(auditionDbBean, resp);
        return resp;
    }

    public AuditionDbBean create(AddAuditionReq addAuditionReq, String token) {
        AuditionDbBean bean = new AuditionDbBean();
        BeanUtils.copyProperties(addAuditionReq, bean);
        bean.setCreateDate(new Date()).setUpdateDate(new Date())
                .setId(UuidUtil.getId()).setDelFlge("1").setUserId(getUserId(token));
        return bean;
    }

    public AuditionDbBean modify(ModifyAuditionReq modifyAuditionReq, String token) {
        AuditionDbBean bean = new AuditionDbBean();
        BeanUtils.copyProperties(modifyAuditionReq, bean);
        bean.setUpdateDate(new Date()).setUserId(this.getUserId(token));
        return bean;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result createInfo(AuditionDbBean bean) {
        Result res = new Result("create audition error!");
        int infoNum =  auditionMapper.insert(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("create audition success!");
            return res;
        }
        return res;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result modifyInfo(AuditionDbBean bean) {
        Result res = new Result("modify audition error!");
        int infoNum =  auditionMapper.modify(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("modify audition success!");
            return res;
        }
        return res;
    }

    public Result getGrade(String token){
        Result res = new Result("not find data!");
        QueryWrapper<AuditionDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        AuditionDbBean auditionDbBean = auditionMapper.selectOne(wrapper);
        if (auditionDbBean == null) {
            return res;
        }
        Field[] fields = auditionDbBean.getClass().getDeclaredFields();
        int sum = 0;
        for (Field field : Arrays.asList(fields)) {
            field.setAccessible(true);
            try {
                sum = gradeVision(sum, field.get(auditionDbBean).toString());
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        res.setCode(200);
        res.setBody(sum);
        return res;
    }

    private int gradeVision(int sum, String ans) {
        switch (ans) {
            case "1": // 不是，0分
                sum = sum + 0;
                break;
            case "2": // 有时，2分
                sum = sum + 2;
                break;
            case "3": // 是的，4分
                sum = sum + 4;
                break;
            default:
                break;
        }
        return sum;
    }
}
