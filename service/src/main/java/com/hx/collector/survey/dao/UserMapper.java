package com.hx.collector.survey.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.hx.collector.survey.model.db.UserDbBean;

public interface UserMapper extends BaseMapper<UserDbBean> {
    int insert(UserDbBean userDbBean);

    int modify(UserDbBean userDbBean);
}
