package com.hx.collector.survey.dao;

import com.hx.collector.survey.model.db.CognitionTwoDbBean;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

public interface CognitionTwoMapper extends BaseMapper<CognitionTwoDbBean> {
    int insert(CognitionTwoDbBean cognitionTwoDbBean);

    int modify(CognitionTwoDbBean cognitionTwoDbBean);
}
