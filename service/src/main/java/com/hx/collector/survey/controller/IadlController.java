package com.hx.collector.survey.controller;

import com.hx.collector.survey.model.Result;
import com.hx.collector.survey.model.colloctor.dto.BiDetail;
import com.hx.collector.survey.model.colloctor.dto.IadlDetail;
import com.hx.collector.survey.model.colloctor.req.AddBiReq;
import com.hx.collector.survey.model.colloctor.req.AddIadlReq;
import com.hx.collector.survey.model.colloctor.req.ModifyBiReq;
import com.hx.collector.survey.model.colloctor.req.ModifyIadlReq;
import com.hx.collector.survey.model.db.BiDbBean;
import com.hx.collector.survey.model.db.IadlDbBean;
import com.hx.collector.survey.service.BiService;
import com.hx.collector.survey.service.IadlService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@Api(tags = "洛顿IADL接口", description = "洛顿IADL")
public class IadlController extends BaseController{
    @Resource
    private IadlService iadlService;

    @ApiOperation("查询洛顿IADL记录")
    @PostMapping(value = "/iadl/detail")
    public IadlDetail detail(@RequestHeader(name = TOKEN)String token) {
        return iadlService.detail(token);
    }

    @ApiOperation("新增洛顿IADL记录")
    @PostMapping(value = "/iadl/creat")
    public Result create(@RequestBody AddIadlReq addIadlReq, @RequestHeader(name = TOKEN)String token) {
        IadlDbBean iadlDbBean = iadlService.create(addIadlReq, token);
        return iadlService.createInfo(iadlDbBean);
    }

    @ApiOperation("变更洛顿IADL记录")
    @PostMapping(value = "/iadl/modify")
    public Result modify(@RequestBody ModifyIadlReq modifyIadlReq, @RequestHeader(name = TOKEN)String token) {
        IadlDbBean iadlDbBean = iadlService.modify(modifyIadlReq, token);
        return iadlService.modifyInfo(iadlDbBean);
    }
}
