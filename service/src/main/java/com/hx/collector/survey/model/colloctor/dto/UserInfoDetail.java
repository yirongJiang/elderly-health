package com.hx.collector.survey.model.colloctor.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

@Data
@ApiModel(description = "测试者基本信息详情")
public class UserInfoDetail {
    @ApiModelProperty(value = "测试者姓名", example = "test01", dataType = "String")
    private String name;

    @ApiModelProperty(value = "测试者性别,1:男，0：女", example = "1", dataType = "String")
    private String gender;

    @ApiModelProperty(value = "测试者身高", example = "177.5", dataType = "Float")
    private String height;

    @ApiModelProperty(value = "测试者体重", example = "64.5", dataType = "Float")
    private String weight;

    @ApiModelProperty(value = "测试者年龄，分区间(55-60/60-65/65-70/70-75/75-80/80以上)", example = "55-60", dataType = "String")
    private String age;

    @ApiModelProperty(value = "测试者婚姻状况0:未婚，1：已婚，2：离异，3丧偶", example = "0", dataType = "String")
    private String matrim;

    @ApiModelProperty(value = "测试者文化程度", example = "本科", dataType = "String")
    private String edu;

    @ApiModelProperty(value = "测试者基础疾病（多选,逗号分隔）", example = "1,2", dataType = "String")
    private String disease;

    @ApiModelProperty(value = "测试者所在的医院机构", example = "华西", dataType = "String")
    private String org;

    @ApiModelProperty(value = "测试者测试地点（1：门诊;2：住院;3：家里...）", example = "1", dataType = "String")
    private String place;

    @ApiModelProperty(value = "填写人员（0：本人:1：医务人员...）", example = "0", dataType = "String")
    private String staff;

    @ApiModelProperty(value = "填写用户id", example = "", dataType = "String")
    private String userId;

    @ApiModelProperty(value = "创建时间", example = "", dataType = "Date")
    private Date createDate;

    @ApiModelProperty(value = "变更时间", example = "", dataType = "Date")
    private Date updateDate;
}
