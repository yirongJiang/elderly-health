package com.hx.collector.survey.dao;

import com.hx.collector.survey.model.db.VisionDbBean;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

public interface VisionMapper extends BaseMapper<VisionDbBean> {
    int insert(VisionDbBean visionDbBean);

    int modify(VisionDbBean visionDbBean);
}
