package com.hx.collector.survey.model.colloctor.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@ApiModel(description = "用户注册请求")
public class RegisterReq {
    @ApiModelProperty(value = "用户名", example = "test", dataType = "String")
    private String userName;

    @ApiModelProperty(value = "密码", example = "test", dataType = "String")
    private String passWord;

    @ApiModelProperty(value = "角色", example = "0：医生用户；1：普通用户", dataType = "String")
    private String role;

    @ApiModelProperty(value = "电话号码", example = "test", dataType = "String")
    private String phone;
}
