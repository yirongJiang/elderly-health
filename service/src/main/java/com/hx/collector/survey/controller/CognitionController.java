package com.hx.collector.survey.controller;

import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.cognition.req.AddCognitionReq;
import com.hx.collector.survey.service.CognitionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@Api(tags = "自制认知筛查接口", description = "记录量表")
@RequestMapping(value = "/rest/v1/cognition")
public class CognitionController {
    @Resource
    private CognitionService cognitionService;

    @ApiOperation("新增认知量表记录")
    @PostMapping(value = "/creat")
    public Result create(@RequestBody AddCognitionReq addCognitionReq) {
        return cognitionService.create(addCognitionReq);
    }
}
