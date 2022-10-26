package com.hx.collector.survey.service;

import com.hx.collector.survey.dao.AuditionMapper;
import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.AuditionDetail;
import com.hx.collector.survey.model.colloctor.req.AddAuditionReq;
import com.hx.collector.survey.model.colloctor.req.ModifyAuditionReq;
import com.hx.collector.survey.model.db.AuditionDbBean;
import com.hx.collector.utils.UuidUtil;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}
