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
import com.hx.collector.survey.model.db.VisionDbBean;
import com.hx.collector.utils.UuidUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.lang.reflect.Field;
import java.util.Arrays;
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

    public Result getGrade(String token){
        Result res = new Result("not find data!");
        QueryWrapper<IadlDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        IadlDbBean iadlDbBean = iadlMapper.selectOne(wrapper);
        if (iadlDbBean == null) {
            return res;
        }
        Field[] fields = iadlDbBean.getClass().getDeclaredFields();
        int sum = 0;
        for (Field field : Arrays.asList(fields)) {
            if ("delFlge".equals(field.getName()) || "userId".equals(field.getName())
                    || "createDate".equals(field.getName()) || "id".equals(field.getName())
                    || "updateDate".equals(field.getName())) {
                continue;
            }
            field.setAccessible(true);
            try {
                sum = gradeVision(sum, field.get(iadlDbBean).toString());
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        res.setCode(200);
        res.setBody(sum);
        return res;
    }

    private int gradeVision(int sum, String ans) {
        switch (ans) {
            case "1":
                sum = sum + 1;
                break;
            case "2":
                sum = sum + 2;
                break;
            case "3":
                sum = sum + 3;
                break;
            default:
                break;
        }
        return sum;
    }
}
