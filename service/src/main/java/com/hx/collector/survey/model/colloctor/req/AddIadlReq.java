package com.hx.collector.survey.model.colloctor.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "新增洛顿IADL请求")
public class AddIadlReq {
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
}
