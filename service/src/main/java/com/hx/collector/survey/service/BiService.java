package com.hx.collector.survey.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.hx.collector.survey.dao.BiMapper;
import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.BiDetail;
import com.hx.collector.survey.model.colloctor.req.AddBiReq;
import com.hx.collector.survey.model.colloctor.req.ModifyBiReq;
import com.hx.collector.survey.model.db.BiDbBean;
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

    public Result getGrade(String token){
        Result res = new Result("not find data!");
        QueryWrapper<BiDbBean> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", getUserId(token));
        BiDbBean biDbBean = biMapper.selectOne(wrapper);
        if (biDbBean == null) {
            return res;
        }
        Field[] fields = biDbBean.getClass().getDeclaredFields();
        int sum = 0;
        for (Field field : Arrays.asList(fields)) {
            if ("delFlge".equals(field.getName()) || "userId".equals(field.getName())
                    || "createDate".equals(field.getName()) || "id".equals(field.getName())
                    || "updateDate".equals(field.getName())) {
                continue;
            }
            field.setAccessible(true);
            try {
                if ("qTwo".equals(field.getName()) || "qSix".equals(field.getName())) {
                    sum = gradeSubVision(sum, field.get(biDbBean).toString());
                }
                sum = gradeVision(sum, field.get(biDbBean).toString());
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
                sum = sum + 10;
                break;
            case "2":
                sum = sum + 5;
                break;
            case "3":
                sum = sum + 0;
                break;
            default:
                break;
        }
        return sum;
    }

    private int gradeSubVision(int sum, String ans) {
        switch (ans) {
            case "1":
                sum = sum + 15;
                break;
            case "2":
                sum = sum + 10;
                break;
            case "3":
                sum = sum + 5;
                break;
            case "4":
                sum = sum + 0;
                break;
            default:
                break;
        }
        return sum;
    }
}
