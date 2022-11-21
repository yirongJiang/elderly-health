package com.hx.collector.survey.service;

import com.hx.collector.survey.dao.VisionMapper;
import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.VisionDetail;
import com.hx.collector.survey.model.colloctor.req.AddVisionReq;
import com.hx.collector.survey.model.colloctor.req.ModifyVisionReq;
import com.hx.collector.survey.model.db.VisionDbBean;
import com.hx.collector.utils.UuidUtil;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

import javax.annotation.Resource;

@Service
public class VisionService extends BaseService{
    @Resource
    private VisionMapper visionMapper;

    public VisionDetail detail(String token) {
        QueryWrapper<VisionDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        VisionDbBean visionDbBean = visionMapper.selectOne(wrapper);
        VisionDetail resp = new VisionDetail();
        BeanUtils.copyProperties(visionDbBean, resp);
        return resp;
    }

    public VisionDbBean create(AddVisionReq addVisionReq, String token) {
        VisionDbBean bean = new VisionDbBean();
        BeanUtils.copyProperties(addVisionReq, bean);
        bean.setCreateDate(new Date()).setUpdateDate(new Date())
                .setId(UuidUtil.getId()).setDelFlge("1").setUserId(getUserId(token));
        return bean;
    }

    public VisionDbBean modify(ModifyVisionReq modifyVisionReq, String token) {
        VisionDbBean bean = new VisionDbBean();
        BeanUtils.copyProperties(modifyVisionReq, bean);
        bean.setUpdateDate(new Date()).setUserId(this.getUserId(token));
        return bean;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result createInfo(VisionDbBean bean) {
        Result res = new Result("create vision error!");
        int infoNum =  visionMapper.insert(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("create vision success!");
            return res;
        }
        return res;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result modifyInfo(VisionDbBean bean) {
        Result res = new Result("vision audition error!");
        int infoNum =  visionMapper.modify(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("modify vision success!");
            return res;
        }
        return res;
    }
}
