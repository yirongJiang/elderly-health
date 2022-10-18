package com.hx.collector.survey.controller;

import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.CognitionDetail;
import com.hx.collector.survey.model.colloctor.dto.UserInfoDetail;
import com.hx.collector.survey.model.colloctor.req.AddCognitionReq;
import com.hx.collector.survey.model.colloctor.req.AddUserInfoReq;
import com.hx.collector.survey.model.colloctor.req.ModifyCognitionReq;
import com.hx.collector.survey.model.colloctor.req.ModifyUserInfoReq;
import com.hx.collector.survey.model.db.UserInfoDbBean;
import com.hx.collector.survey.service.CognitionService;
import com.hx.collector.survey.service.UserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@Api(tags = "测试者基本信息接口", description = "测试者基本信息表")
public class UserInfoController extends BaseController {
    @Resource
    private UserInfoService userInfoService;

    @ApiOperation("查询测试者基本信息")
    @PostMapping(value = "/user/info/detail")
    public UserInfoDetail detail(@RequestHeader(name = TOKEN)String token) {
        return userInfoService.detail(token);
    }

    @ApiOperation("新增测试者基本信息")
    @PostMapping(value = "/user/info/creat")
    public Result create(@RequestBody AddUserInfoReq addUserInfoReq, @RequestHeader(name = TOKEN)String token) {
        UserInfoDbBean bean = userInfoService.create(addUserInfoReq, token);
        return userInfoService.createInfo(bean);
    }

    @ApiOperation("变更测试者基本信息")
    @PostMapping(value = "/user/info/modify")
    public Result modify(@RequestBody ModifyUserInfoReq modifyUserInfoReq, @RequestHeader(name = TOKEN)String token) {
        UserInfoDbBean bean = userInfoService.modify(modifyUserInfoReq, token);
        return userInfoService.modifyInfo(bean);
    }
}
