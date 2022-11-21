package com.hx.collector.survey.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.hx.collector.survey.model.db.BiDbBean;

public interface BiMapper extends BaseMapper<BiDbBean> {
    int insert(BiDbBean biDbBean);

    int modify(BiDbBean biDbBean);
}
