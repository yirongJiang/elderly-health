package com.hx.collector.survey.dao;

import com.hx.collector.survey.model.db.MmseDbBean;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

public interface MmseMapper extends BaseMapper<MmseDbBean> {
    int insert(MmseDbBean mmseDbBean);

    int modify(MmseDbBean mmseDbBean);
}
