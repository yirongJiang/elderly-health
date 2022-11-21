package com.hx.collector.survey.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hx.collector.survey.dao.BiMapper;
import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.BiDetail;
import com.hx.collector.survey.model.colloctor.req.AddBiReq;
import com.hx.collector.survey.model.colloctor.req.ModifyBiReq;
import com.hx.collector.survey.model.db.BiDbBean;
import com.hx.collector.utils.UuidUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Date;

@Service
public class BiService extends BaseService{
    @Resource
    private BiMapper biMapper;

    public BiDetail detail(String token) {
        QueryWrapper<BiDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        BiDbBean biDbBean = biMapper.selectOne(wrapper);
        BiDetail resp = new BiDetail();
        BeanUtils.copyProperties(biDbBean, resp);
        return resp;
    }

    public BiDbBean create(AddBiReq addBiReq, String token) {
        BiDbBean bean = new BiDbBean();
        BeanUtils.copyProperties(addBiReq, bean);
        bean.setCreateDate(new Date()).setUpdateDate(new Date())
                .setId(UuidUtil.getId()).setDelFlge("1").setUserId(getUserId(token));
        return bean;
    }

    public BiDbBean modify(ModifyBiReq modifyBiReq, String token) {
        BiDbBean bean = new BiDbBean();
        BeanUtils.copyProperties(modifyBiReq, bean);
        bean.setUpdateDate(new Date()).setUserId(this.getUserId(token));
        return bean;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result createInfo(BiDbBean bean) {
        Result res = new Result("create bi error!");
        int infoNum =  biMapper.insert(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("create bi success!");
            return res;
        }
        return res;
    }

    @Transactional(rollbackFor = Exception.class)
    public Result modifyInfo(BiDbBean bean) {
        Result res = new Result("modify bi error!");
        int infoNum =  biMapper.modify(bean);
        if (infoNum == 1) {
            res.setCode(200);
            res.setBody("modify bi success!");
            return res;
        }
        return res;
    }
}
