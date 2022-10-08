package com.hx.collector.survey.service;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hx.collector.config.properties.AuthProperties;
import com.hx.collector.survey.dao.CognitionMapper;
import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.cognition.dto.CognitionDetail;
import com.hx.collector.survey.model.cognition.req.AddCognitionReq;
import com.hx.collector.survey.model.cognition.req.ModifyCognitionReq;
import com.hx.collector.survey.model.db.CognitionDbBean;
import com.hx.collector.utils.JwtUtils;
import com.hx.collector.utils.UuidUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Date;

@Service
public class CognitionService {
    @Resource
    private CognitionMapper cognitionMapper;
    @Resource
    private AuthProperties authProperties;

    public CognitionDetail detail(String token) {
        QueryWrapper<CognitionDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", this.getUserId(token));
        CognitionDbBean cognitionDbBean = cognitionMapper.selectOne(wrapper);
        CognitionDetail resp = new CognitionDetail();
        BeanUtils.copyProperties(cognitionDbBean, resp);
        return resp;
    }

    public Result create(AddCognitionReq addCognitionReq, String token) {
        Result res = new Result("create cognition error!");
        CognitionDbBean bean = new CognitionDbBean();
        BeanUtils.copyProperties(addCognitionReq, bean);
        bean.setCreateDate(new Date()).setUpdateDate(new Date())
                .setId(UuidUtil.getId()).setDelFlge("1").setUserId(this.getUserId(token));
        int infoNum = this.createInfo(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("create cognition success!");
            return res;
        }
        return res;
    }

    public Result modify(ModifyCognitionReq modifyCognitionReq, String token) {
        Result res = new Result("modify cognition error!");
        CognitionDbBean bean = new CognitionDbBean();
        BeanUtils.copyProperties(modifyCognitionReq, bean);
        bean.setUpdateDate(new Date()).setUserId(this.getUserId(token));
        int infoNum = this.modifyInfo(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("modify cognition success!");
            return res;
        }
        return res;
    }

    @Transactional(rollbackFor = Exception.class)
    public int createInfo(CognitionDbBean bean) {
        return cognitionMapper.insert(bean);
    }

    @Transactional(rollbackFor = Exception.class)
    public int modifyInfo(CognitionDbBean bean) {
        return cognitionMapper.modify(bean);
    }

    private String getUserId(String token) {
        DecodedJWT tokenInfo = JwtUtils.getTokenInfo(token, authProperties);
        String userId = tokenInfo.getClaim("userId").asString();
        return userId;
    }
}
