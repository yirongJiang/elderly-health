package com.hx.collector.survey.controller;

import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.CognitionDetail;
import com.hx.collector.survey.model.colloctor.req.AddCognitionReq;
import com.hx.collector.survey.model.colloctor.req.ModifyCognitionReq;
import com.hx.collector.survey.service.CognitionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@Api(tags = "自制认知筛查接口", description = "记录量表")
public class CognitionController extends BaseController {
    @Resource
    private CognitionService cognitionService;

    @ApiOperation("查询认知量表记录")
    @PostMapping(value = "/cognition/detail")
    public CognitionDetail detail(@RequestHeader(name = TOKEN)String token) {
        return cognitionService.detail(token);
    }

    @ApiOperation("新增认知量表记录")
    @PostMapping(value = "/cognition/creat")
    public Result create(@RequestBody AddCognitionReq addCognitionReq, @RequestHeader(name = TOKEN)String token) {
        return cognitionService.create(addCognitionReq, token);
    }

    @ApiOperation("变更认知量表记录")
    @PostMapping(value = "/cognition/modify")
    public Result modify(@RequestBody ModifyCognitionReq modifyCognitionReq, @RequestHeader(name = TOKEN)String token) {
        return cognitionService.modify(modifyCognitionReq, token);
    }
}
