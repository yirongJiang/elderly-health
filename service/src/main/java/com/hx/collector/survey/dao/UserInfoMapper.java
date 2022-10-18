package com.hx.collector.survey.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.hx.collector.survey.model.db.UserInfoDbBean;

public interface UserInfoMapper extends BaseMapper<UserInfoDbBean> {
    int insert(UserInfoDbBean userInfoDbBean);

    int modify(UserInfoDbBean userInfoDbBean);
}
