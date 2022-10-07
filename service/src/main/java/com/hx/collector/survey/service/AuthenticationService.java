package com.hx.collector.survey.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hx.collector.survey.dao.UserMapper;
import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.cognition.UserInfo;
import com.hx.collector.survey.model.cognition.req.LoginReq;
import com.hx.collector.survey.model.cognition.req.RegisterReq;
import com.hx.collector.survey.model.db.CognitionDbBean;
import com.hx.collector.survey.model.db.UserDbBean;
import com.hx.collector.utils.JwtUtils;
import com.hx.collector.utils.UuidUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Date;

@Service
public class AuthenticationService extends BaseService {
    @Resource
    private UserMapper usermapper;

    public Result register(RegisterReq registerReq) {
        Result res = new Result("register error!");
        UserInfo userInfo = new UserInfo();
        BeanUtils.copyProperties(registerReq, userInfo);
        UserDbBean user = this.getUserInfo(userInfo);
        if (user != null) {
            res.setBody("user already exist!");
            return res;
        }
        UserDbBean userDbBean = new UserDbBean();
        BeanUtils.copyProperties(registerReq, userDbBean);
        userDbBean.setUserId(UuidUtil.getId()).setDelFlge("1").setCreateDate(new Date()).setUpdateDate(new Date());
        if (insertUser(userDbBean) != 1) {
            return res;
        }
        res.setCode(200);
        res.setBody("register success!");
        return res;
    }

    public Result login(LoginReq LoginReq) {
        Result res = new Result("login error!");
        UserInfo userInfo = new UserInfo();
        BeanUtils.copyProperties(LoginReq, userInfo);
        UserDbBean user = this.getUserInfo(userInfo);
        String userId = user.getUserId();
        String token = JwtUtils.getToken(LoginReq.getUserName(), userId, authProperties);
        res.setCode(200);
        res.setBody(token);
        return res;
    }

    @Transactional(rollbackFor = Exception.class)
    public int insertUser(UserDbBean userDbBean) {
        return usermapper.insert(userDbBean);
    }

    public UserDbBean getUserInfo(UserInfo userInfo) {
        QueryWrapper<UserDbBean> wrapper = new QueryWrapper<>();
        if (StringUtils.isNoneBlank(userInfo.getUserId())) {
            wrapper.eq("user_id", userInfo.getUserId());
        }
        if (StringUtils.isNoneBlank(userInfo.getUserName())) {
            wrapper.eq("user_name", userInfo.getUserName());
        }
        if (StringUtils.isNoneBlank(userInfo.getRole())) {
            wrapper.eq("role", userInfo.getRole());
        }
        if (StringUtils.isNoneBlank(userInfo.getPhone())) {
            wrapper.eq("phone", userInfo.getPhone());
        }
        UserDbBean userDbBean = usermapper.selectOne(wrapper);
        return userDbBean;
    }
}
