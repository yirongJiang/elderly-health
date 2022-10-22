package com.hx.collector.survey.controller;

import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.VisionDetail;
import com.hx.collector.survey.model.colloctor.req.AddVisionReq;
import com.hx.collector.survey.model.colloctor.req.ModifyVisionReq;
import com.hx.collector.survey.model.db.VisionDbBean;
import com.hx.collector.survey.service.VisionService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@Api(tags = "视觉筛查接口", description = "视觉筛查表")
public class VisionController extends BaseController{
    @Resource
    private VisionService visionService;

    @ApiOperation("查询视觉筛查表记录")
    @PostMapping(value = "/vision/detail")
    public VisionDetail detail(@RequestHeader(name = TOKEN)String token) {
        return visionService.detail(token);
    }

    @ApiOperation("新增视觉筛查表记录")
    @PostMapping(value = "/vision/creat")
    public Result create(@RequestBody AddVisionReq addVisionReq, @RequestHeader(name = TOKEN)String token) {
        VisionDbBean auditionDbBean = visionService.create(addVisionReq, token);
        return visionService.createInfo(auditionDbBean);
    }

    @ApiOperation("变更视觉筛查表记录")
    @PostMapping(value = "/vision/modify")
    public Result modify(@RequestBody ModifyVisionReq modifyVisionReq, @RequestHeader(name = TOKEN)String token) {
        VisionDbBean auditionDbBean = visionService.modify(modifyVisionReq, token);
        return visionService.modifyInfo(auditionDbBean);
    }
}
