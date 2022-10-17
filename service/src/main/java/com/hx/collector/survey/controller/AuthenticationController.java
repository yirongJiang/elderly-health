package com.hx.collector.survey.controller;

import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.req.LoginReq;
import com.hx.collector.survey.model.colloctor.req.RegisterReq;
import com.hx.collector.survey.service.AuthenticationService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@Api(tags = "用户接口", description = "登陆、注册")
public class AuthenticationController extends BaseController{
    @Resource
    private AuthenticationService authenticationService;

    @ApiOperation("用户注册")
    @RequestMapping(value = "/user/register", method = RequestMethod.POST)
    public Result register(@RequestBody RegisterReq registerReq) {
        return authenticationService.register(registerReq);
    }

    @ApiOperation("用户登陆")
    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    public Result login(@RequestBody LoginReq LoginReq) {
        return authenticationService.login(LoginReq);
    }
}
