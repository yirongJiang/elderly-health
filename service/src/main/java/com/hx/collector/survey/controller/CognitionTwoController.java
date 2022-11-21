package com.hx.collector.survey.controller;

import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.CognitionDetail;
import com.hx.collector.survey.model.colloctor.dto.CognitionTwoDetail;
import com.hx.collector.survey.model.colloctor.req.AddCognitionReq;
import com.hx.collector.survey.model.colloctor.req.AddCognitionTwoReq;
import com.hx.collector.survey.model.colloctor.req.ModifyCognitionReq;
import com.hx.collector.survey.model.colloctor.req.ModifyCognitionTwoReq;
import com.hx.collector.survey.service.CognitionService;
import com.hx.collector.survey.service.CognitionTwoService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@Api(tags = "自制认知筛查2接口", description = "记录量表")
public class CognitionTwoController extends BaseController {
    @Resource
    private CognitionTwoService cognitionTwoService;

    @ApiOperation("查询认知量表2记录")
    @PostMapping(value = "/cognitionTwo/detail")
    public CognitionTwoDetail detail(@RequestHeader(name = TOKEN)String token) {
        return cognitionTwoService.detail(token);
    }

    @ApiOperation("新增认知量表2记录")
    @PostMapping(value = "/cognitionTwo/creat")
    public Result create(@RequestBody AddCognitionTwoReq addCognitionTwoReq, @RequestHeader(name = TOKEN)String token) {
        return cognitionTwoService.create(addCognitionTwoReq, token);
    }

    @ApiOperation("变更认知量表2记录")
    @PostMapping(value = "/cognitionTwo/modify")
    public Result modify(@RequestBody ModifyCognitionTwoReq modifyCognitionTwoReq, @RequestHeader(name = TOKEN)String token) {
        return cognitionTwoService.modify(modifyCognitionTwoReq, token);
    }
}
