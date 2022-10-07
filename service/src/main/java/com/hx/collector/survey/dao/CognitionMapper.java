package com.hx.collector.survey.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.hx.collector.survey.model.db.CognitionDbBean;

public interface CognitionMapper extends BaseMapper<CognitionDbBean> {
    int insert(CognitionDbBean cognitionDbBean);

    int modify(CognitionDbBean cognitionDbBean);
}
