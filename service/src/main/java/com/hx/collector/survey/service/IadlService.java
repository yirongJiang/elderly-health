package com.hx.collector.survey.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hx.collector.survey.dao.BiMapper;
import com.hx.collector.survey.dao.IadlMapper;
import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.BiDetail;
import com.hx.collector.survey.model.colloctor.dto.IadlDetail;
import com.hx.collector.survey.model.colloctor.req.AddBiReq;
import com.hx.collector.survey.model.colloctor.req.AddIadlReq;
import com.hx.collector.survey.model.colloctor.req.ModifyBiReq;
import com.hx.collector.survey.model.colloctor.req.ModifyIadlReq;
import com.hx.collector.survey.model.db.BiDbBean;
import com.hx.collector.survey.model.db.IadlDbBean;
import com.hx.collector.utils.UuidUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Date;

@Service
public class IadlService extends BaseService{
    @Resource
    private IadlMapper iadlMapper;

    public IadlDetail detail(String token) {
        QueryWrapper<IadlDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        IadlDbBean iadlDbBean = iadlMapper.selectOne(wrapper);
        IadlDetail resp = new IadlDetail();
        BeanUtils.copyProperties(iadlDbBean, resp);
        return resp;
    }

    public IadlDbBean create(AddIadlReq addIadlReq, String token) {
        IadlDbBean bean = new IadlDbBean();
        BeanUtils.copyProperties(addIadlReq, bean);
        bean.setCreateDate(new Date()).setUpdateDate(new Date())
                .setId(UuidUtil.getId()).setDelFlge("1").setUserId(getUserId(token));
        return bean;
    }

    public IadlDbBean modify(ModifyIadlReq modifyIadlReq, String token) {
        IadlDbBean bean = new IadlDbBean();
        BeanUtils.copyProperties(modifyIadlReq, bean);
        bean.setUpdateDate(new Date()).setUserId(this.getUserId(token));
        return bean;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result createInfo(IadlDbBean bean) {
        Result res = new Result("create iadl error!");
        int infoNum =  iadlMapper.insert(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("create iadl success!");
            return res;
        }
        return res;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result modifyInfo(IadlDbBean bean) {
        Result res = new Result("modify iadl error!");
        int infoNum =  iadlMapper.modify(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("modify iadl success!");
            return res;
        }
        return res;
    }
}
