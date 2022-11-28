package com.hx.collector.survey.controller;

import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.PainDetail;
import com.hx.collector.survey.model.colloctor.req.AddPainReq;
import com.hx.collector.survey.model.colloctor.req.ModifyPainReq;
import com.hx.collector.survey.model.db.PainDbBean;
import com.hx.collector.survey.service.PainService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@Api(tags = "疼痛报告接口", description = "疼痛报告表")
public class PainController extends BaseController{
    @Resource
    private PainService painService;

    @ApiOperation("查询疼痛报告记录")
    @PostMapping(value = "/pain/detail")
    public PainDetail detail(@RequestHeader(name = TOKEN)String token) {
        return painService.detail(token);
    }

    @ApiOperation("新增疼痛报告记录")
    @PostMapping(value = "/pain/creat")
    public Result create(@RequestBody AddPainReq addPainReq, @RequestHeader(name = TOKEN)String token) {
        PainDbBean painDbBean = painService.create(addPainReq, token);
        return painService.createInfo(painDbBean);
    }

    @ApiOperation("变更疼痛报告记录")
    @PostMapping(value = "/pain/modify")
    public Result modify(@RequestBody ModifyPainReq modifyPainReq, @RequestHeader(name = TOKEN)String token) {
        PainDbBean painDbBean = painService.modify(modifyPainReq, token);
        return painService.modifyInfo(painDbBean);
    }
<<<<<<< HEAD

    @ApiOperation("获取疼痛记录分数")
    @PostMapping(value = "/pain/grade")
    public Result getGrade(@RequestHeader(name = TOKEN)String token) {
        return painService.getGrade(token);
    }
=======
>>>>>>> main
}
