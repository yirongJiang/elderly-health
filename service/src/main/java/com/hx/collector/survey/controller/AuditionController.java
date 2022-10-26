package com.hx.collector.survey.controller;

import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.AuditionDetail;
import com.hx.collector.survey.model.colloctor.req.AddAuditionReq;
import com.hx.collector.survey.model.colloctor.req.ModifyAuditionReq;
import com.hx.collector.survey.model.db.AuditionDbBean;
import com.hx.collector.survey.service.AuditionService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@Api(tags = "听力筛查接口", description = "听力筛查表")
public class AuditionController extends BaseController{
    @Resource
    private AuditionService auditionService;

    @ApiOperation("查询听力筛查表记录")
    @PostMapping(value = "/audition/detail")
    public AuditionDetail detail(@RequestHeader(name = TOKEN)String token) {
        return auditionService.detail(token);
    }

    @ApiOperation("新增听力筛查表记录")
    @PostMapping(value = "/audition/creat")
    public Result create(@RequestBody AddAuditionReq addAuditionReq, @RequestHeader(name = TOKEN)String token) {
        AuditionDbBean auditionDbBean = auditionService.create(addAuditionReq, token);
        return auditionService.createInfo(auditionDbBean);
    }

    @ApiOperation("变更听力筛查表记录")
    @PostMapping(value = "/audition/modify")
    public Result modify(@RequestBody ModifyAuditionReq modifyAuditionReq, @RequestHeader(name = TOKEN)String token) {
        AuditionDbBean auditionDbBean = auditionService.modify(modifyAuditionReq, token);
        return auditionService.modifyInfo(auditionDbBean);
    }
}
