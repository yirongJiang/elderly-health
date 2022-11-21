package com.hx.collector.survey.dao;

import com.hx.collector.survey.model.db.PainDbBean;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

public interface PainMapper extends BaseMapper<PainDbBean> {
    int insert(PainDbBean visionDbBean);

    int modify(PainDbBean visionDbBean);
}
