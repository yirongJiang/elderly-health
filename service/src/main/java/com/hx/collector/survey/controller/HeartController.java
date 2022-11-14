package com.hx.collector.survey.controller;

import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.AuditionDetail;
import com.hx.collector.survey.model.colloctor.dto.HeartDetail;
import com.hx.collector.survey.model.colloctor.req.AddAuditionReq;
import com.hx.collector.survey.model.colloctor.req.AddHeartReq;
import com.hx.collector.survey.model.colloctor.req.ModifyAuditionReq;
import com.hx.collector.survey.model.colloctor.req.ModifyHeartReq;
import com.hx.collector.survey.model.db.AuditionDbBean;
import com.hx.collector.survey.model.db.HeartDbBean;
import com.hx.collector.survey.service.AuditionService;
import com.hx.collector.survey.service.HeartService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@Api(tags = "冠心/心率问题接口", description = "冠心/心率问题表")
public class HeartController extends BaseController{
    @Resource
    private HeartService heartService;

    @ApiOperation("查询冠心/心率问题表记录")
    @PostMapping(value = "/heart/detail")
    public HeartDetail detail(@RequestHeader(name = TOKEN)String token) {
        return heartService.detail(token);
    }

    @ApiOperation("新增冠心/心率问题表记录")
    @PostMapping(value = "/heart/creat")
    public Result create(@RequestBody AddHeartReq addHeartReq, @RequestHeader(name = TOKEN)String token) {
        HeartDbBean heartDbBean = heartService.create(addHeartReq, token);
        return heartService.createInfo(heartDbBean);
    }

    @ApiOperation("变更冠心/心率问题表记录")
    @PostMapping(value = "/heart/modify")
    public Result modify(@RequestBody ModifyHeartReq modifyHeartReq, @RequestHeader(name = TOKEN)String token) {
        HeartDbBean heartDbBean = heartService.modify(modifyHeartReq, token);
        return heartService.modifyInfo(heartDbBean);
    }

    @ApiOperation("获取冠心/心率问题分数")
    @PostMapping(value = "/heart/grade")
    public Result getGrade(@RequestHeader(name = TOKEN)String token) {
        return heartService.getGrade(token);
    }
}
