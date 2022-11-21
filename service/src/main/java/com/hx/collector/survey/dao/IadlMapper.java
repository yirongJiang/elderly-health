package com.hx.collector.survey.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.hx.collector.survey.model.db.BiDbBean;
import com.hx.collector.survey.model.db.IadlDbBean;

public interface IadlMapper extends BaseMapper<IadlDbBean> {
    int insert(IadlDbBean iadlDbBean);

    int modify(IadlDbBean iadlDbBean);
}
