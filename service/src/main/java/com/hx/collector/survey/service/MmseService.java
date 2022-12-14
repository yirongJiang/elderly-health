package com.hx.collector.survey.service;

import com.hx.collector.survey.dao.AuditionMapper;
import com.hx.collector.survey.dao.MmseMapper;
import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.AuditionDetail;
import com.hx.collector.survey.model.colloctor.dto.MmseDetail;
import com.hx.collector.survey.model.colloctor.req.AddAuditionReq;
import com.hx.collector.survey.model.colloctor.req.AddMmseReq;
import com.hx.collector.survey.model.colloctor.req.ModifyAuditionReq;
import com.hx.collector.survey.model.colloctor.req.ModifyMmseReq;
import com.hx.collector.survey.model.db.AuditionDbBean;
import com.hx.collector.survey.model.db.MmseDbBean;
import com.hx.collector.utils.UuidUtil;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

import javax.annotation.Resource;

@Service
public class MmseService extends BaseService{
    @Resource
    private MmseMapper mmseMapper;

    public MmseDetail detail(String token) {
        QueryWrapper<MmseDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        MmseDbBean auditionDbBean = mmseMapper.selectOne(wrapper);
        MmseDetail resp = new MmseDetail();
        BeanUtils.copyProperties(auditionDbBean, resp);
        return resp;
    }

    public MmseDbBean create(AddMmseReq addMmseReq, String token) {
        MmseDbBean bean = new MmseDbBean();
        BeanUtils.copyProperties(addMmseReq, bean);
        bean.setCreateDate(new Date()).setUpdateDate(new Date())
                .setId(UuidUtil.getId()).setDelFlge("1").setUserId(getUserId(token));
        return bean;
    }

    public MmseDbBean modify(ModifyMmseReq modifyMmseReq, String token) {
        MmseDbBean bean = new MmseDbBean();
        BeanUtils.copyProperties(modifyMmseReq, bean);
        bean.setUpdateDate(new Date()).setUserId(this.getUserId(token));
        return bean;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result createInfo(MmseDbBean bean) {
        Result res = new Result("create mmse error!");
        int infoNum =  mmseMapper.insert(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("create mmse success!");
            return res;
        }
        return res;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result modifyInfo(MmseDbBean bean) {
        Result res = new Result("modify mmse error!");
        int infoNum =  mmseMapper.modify(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("modify mmse success!");
            return res;
        }
        return res;
    }
}
