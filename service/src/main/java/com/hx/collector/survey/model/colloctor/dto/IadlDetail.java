package com.hx.collector.survey.model.colloctor.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

@Data
@ApiModel(description = "BI评估详情")
public class IadlDetail {
    @ApiModelProperty(value = "电话的使用,由自理能到不能自己做分为1、2、3", example = "1、2、3", dataType = "String")
    private String qOne;

    @ApiModelProperty(value = "交通的使用，由自理能到不能自己做分为1、2、3", example = "1、2、3", dataType = "String")
    private String qTwo;

    @ApiModelProperty(value = "购物，由自理能到不能自己做分为1、2、3", example = "1、2、3", dataType = "String")
    private String qThree;

    @ApiModelProperty(value = "准备食物，由自理能到不能自己做分为1、2、3", example = "1、2、3", dataType = "String")
    private String qFour;

    @ApiModelProperty(value = "家务活动，由自理能到不能自己做分为1、2、3", example = "1、2、3", dataType = "String")
    private String qFive;

    @ApiModelProperty(value = "家居维修，由自理能到不能自己做分为1、2、3", example = "1、2、3", dataType = "String")
    private String qSix;

    @ApiModelProperty(value = "卫生，由自理能到不能自己做分为1、2、3", example = "1、2、3", dataType = "String")
    private String qSeven;

    @ApiModelProperty(value = "服药，由自理能到不能自己做分为1、2、3", example = "1、2、3", dataType = "String")
    private String qEight;

    @ApiModelProperty(value = "财务管理，由自理能到不能自己做分为1、2、3", example = "1、2、3", dataType = "String")
    private String qNine;

    @ApiModelProperty(value = "填写用户id", example = "", dataType = "String")
    private String userId;

    @ApiModelProperty(value = "创建时间", example = "", dataType = "Date")
    private Date createDate;

    @ApiModelProperty(value = "变更时间", example = "", dataType = "Date")
    private Date updateDate;
}
