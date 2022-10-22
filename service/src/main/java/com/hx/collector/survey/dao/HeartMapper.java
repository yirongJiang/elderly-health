package com.hx.collector.survey.dao;

import com.hx.collector.survey.model.db.HeartDbBean;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

public interface HeartMapper extends BaseMapper<HeartDbBean> {
    int insert(HeartDbBean heartDbBean);

    int modify(HeartDbBean auditionDbBean);
}
