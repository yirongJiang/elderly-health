package com.hx.collector.survey.dao;

import com.hx.collector.survey.model.db.AuditionDbBean;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

public interface AuditionMapper extends BaseMapper<AuditionDbBean> {
    int insert(AuditionDbBean auditionDbBean);

    int modify(AuditionDbBean auditionDbBean);
}
