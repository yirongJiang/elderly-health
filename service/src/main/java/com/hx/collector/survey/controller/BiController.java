package com.hx.collector.survey.controller;

import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.BiDetail;
import com.hx.collector.survey.model.colloctor.req.AddBiReq;
import com.hx.collector.survey.model.colloctor.req.ModifyBiReq;
import com.hx.collector.survey.model.db.BiDbBean;
import com.hx.collector.survey.service.BiService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@Api(tags = "BI评估接口", description = "BI评估表")
public class BiController extends BaseController{
    @Resource
    private BiService biService;

    @ApiOperation("查询BI评估表记录")
    @PostMapping(value = "/bi/detail")
    public BiDetail detail(@RequestHeader(name = TOKEN)String token) {
        return biService.detail(token);
    }

    @ApiOperation("新增BI评估表记录")
    @PostMapping(value = "/bi/creat")
    public Result create(@RequestBody AddBiReq addBiReq, @RequestHeader(name = TOKEN)String token) {
        BiDbBean biDbBean = biService.create(addBiReq, token);
        return biService.createInfo(biDbBean);
    }

    @ApiOperation("变更BI评估表记录")
    @PostMapping(value = "/bi/modify")
    public Result modify(@RequestBody ModifyBiReq modifyBiReq, @RequestHeader(name = TOKEN)String token) {
        BiDbBean biDbBean = biService.modify(modifyBiReq, token);
        return biService.modifyInfo(biDbBean);
    }
}
