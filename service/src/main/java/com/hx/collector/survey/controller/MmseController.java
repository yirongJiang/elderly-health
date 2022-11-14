package com.hx.collector.survey.controller;

import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.AuditionDetail;
import com.hx.collector.survey.model.colloctor.dto.MmseDetail;
import com.hx.collector.survey.model.colloctor.req.AddAuditionReq;
import com.hx.collector.survey.model.colloctor.req.AddMmseReq;
import com.hx.collector.survey.model.colloctor.req.ModifyAuditionReq;
import com.hx.collector.survey.model.colloctor.req.ModifyMmseReq;
import com.hx.collector.survey.model.db.AuditionDbBean;
import com.hx.collector.survey.model.db.MmseDbBean;
import com.hx.collector.survey.service.AuditionService;
import com.hx.collector.survey.service.MmseService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@Api(tags = "简易精神状态检查量表MMSE接口", description = "简易精神状态检查量表MMSE表")
public class MmseController extends BaseController{
    @Resource
    private MmseService mmseService;

    @ApiOperation("查询简易精神状态检查量表MMSE记录")
    @PostMapping(value = "/mmse/detail")
    public MmseDetail detail(@RequestHeader(name = TOKEN)String token) {
        return mmseService.detail(token);
    }

    @ApiOperation("新增简易精神状态检查量表MMSE记录")
    @PostMapping(value = "/mmse/creat")
    public Result create(@RequestBody AddMmseReq addMmseReq, @RequestHeader(name = TOKEN)String token) {
        MmseDbBean mmseDbBean = mmseService.create(addMmseReq, token);
        return mmseService.createInfo(mmseDbBean);
    }

    @ApiOperation("变更简易精神状态检查量表MMSE记录")
    @PostMapping(value = "/mmse/modify")
    public Result modify(@RequestBody ModifyMmseReq modifyMmseReq, @RequestHeader(name = TOKEN)String token) {
        MmseDbBean mmseDbBean = mmseService.modify(modifyMmseReq, token);
        return mmseService.modifyInfo(mmseDbBean);
    }

    @ApiOperation("获取MMSE记录分数")
    @PostMapping(value = "/mmse/grade")
    public Result getGrade(@RequestHeader(name = TOKEN)String token) {
        return mmseService.getGrade(token);
    }
}
