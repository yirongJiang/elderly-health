package com.hx.collector.survey.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hx.collector.survey.dao.BiMapper;
import com.hx.collector.survey.dao.UserInfoMapper;
import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.BiDetail;
import com.hx.collector.survey.model.colloctor.dto.UserInfoDetail;
import com.hx.collector.survey.model.colloctor.req.AddBiReq;
import com.hx.collector.survey.model.colloctor.req.AddUserInfoReq;
import com.hx.collector.survey.model.colloctor.req.ModifyBiReq;
import com.hx.collector.survey.model.colloctor.req.ModifyUserInfoReq;
import com.hx.collector.survey.model.db.BiDbBean;
import com.hx.collector.survey.model.db.UserInfoDbBean;
import com.hx.collector.utils.UuidUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Date;

@Service
public class UserInfoService extends BaseService{
    @Resource
    private UserInfoMapper userInfoMapper;

    public UserInfoDetail detail(String token) {
        QueryWrapper<UserInfoDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        UserInfoDbBean userInfoDbBean = userInfoMapper.selectOne(wrapper);
        UserInfoDetail resp = new UserInfoDetail();
        BeanUtils.copyProperties(userInfoDbBean, resp);
        return resp;
    }

    public UserInfoDbBean create(AddUserInfoReq addUserInfoReq, String token) {
        UserInfoDbBean bean = new UserInfoDbBean();
        BeanUtils.copyProperties(addUserInfoReq, bean);
        bean.setCreateDate(new Date()).setUpdateDate(new Date())
                .setId(UuidUtil.getId()).setDelFlge("1").setUserId(getUserId(token));
        return bean;
    }

    public UserInfoDbBean modify(ModifyUserInfoReq modifyUserInfoReq, String token) {
        UserInfoDbBean bean = new UserInfoDbBean();
        BeanUtils.copyProperties(modifyUserInfoReq, bean);
        bean.setUpdateDate(new Date()).setUserId(this.getUserId(token));
        return bean;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result createInfo(UserInfoDbBean bean) {
        Result res = new Result("create user info error!");
        int infoNum =  userInfoMapper.insert(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("create user info success!");
            return res;
        }
        return res;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result modifyInfo(UserInfoDbBean bean) {
        Result res = new Result("modify bi error!");
        int infoNum =  userInfoMapper.modify(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("modify user info success!");
            return res;
        }
        return res;
    }
}
