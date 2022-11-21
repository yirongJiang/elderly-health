package com.hx.collector.survey.service;

import com.hx.collector.survey.dao.CognitionMapper;
import com.hx.collector.survey.dao.CognitionTwoMapper;
import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.CognitionDetail;
import com.hx.collector.survey.model.colloctor.dto.CognitionTwoDetail;
import com.hx.collector.survey.model.colloctor.req.AddCognitionReq;
import com.hx.collector.survey.model.colloctor.req.AddCognitionTwoReq;
import com.hx.collector.survey.model.colloctor.req.ModifyCognitionReq;
import com.hx.collector.survey.model.colloctor.req.ModifyCognitionTwoReq;
import com.hx.collector.survey.model.db.CognitionDbBean;
import com.hx.collector.survey.model.db.CognitionTwoDbBean;
import com.hx.collector.utils.UuidUtil;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

import javax.annotation.Resource;

@Service
public class CognitionTwoService extends BaseService{
    @Resource
    private CognitionTwoMapper cognitionTwoMapper;

    public CognitionTwoDetail detail(String token) {
        QueryWrapper<CognitionTwoDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        CognitionTwoDbBean cognitionDbBean = cognitionTwoMapper.selectOne(wrapper);
        CognitionTwoDetail resp = new CognitionTwoDetail();
        BeanUtils.copyProperties(cognitionDbBean, resp);
        return resp;
    }

    public Result create(AddCognitionTwoReq addCognitionTwoReq, String token) {
        Result res = new Result("create cognition error!");
        CognitionTwoDbBean bean = new CognitionTwoDbBean();
        BeanUtils.copyProperties(addCognitionTwoReq, bean);
        bean.setCreateDate(new Date()).setUpdateDate(new Date())
                .setId(UuidUtil.getId()).setDelFlge("1").setUserId(getUserId(token));
        int infoNum = this.createInfo(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("create cognition success!");
            return res;
        }
        return res;
    }

    public Result modify(ModifyCognitionTwoReq modifyCognitionTwoReq, String token) {
        Result res = new Result("modify cognition two error!");
        CognitionTwoDbBean bean = new CognitionTwoDbBean();
        BeanUtils.copyProperties(modifyCognitionTwoReq, bean);
        bean.setUpdateDate(new Date()).setUserId(this.getUserId(token));
        int infoNum = this.modifyInfo(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("modify cognition two success!");
            return res;
        }
        return res;
    }

    @Transactional(rollbackFor = Exception.class)
    public int createInfo(CognitionTwoDbBean bean) {
        return cognitionTwoMapper.insert(bean);
    }

    @Transactional(rollbackFor = Exception.class)
    public int modifyInfo(CognitionTwoDbBean bean) {
        return cognitionTwoMapper.modify(bean);
    }
}
