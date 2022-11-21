package com.hx.collector.survey.model.colloctor.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "变更BI评估请求")
public class ModifyBiReq {
    @ApiModelProperty(value = "进食,由自理到依赖分为1、2、3", example = "1、2、3", dataType = "String")
    private String qOne;

    @ApiModelProperty(value = "转移，由自理到依赖分为1、2、3、4", example = "1、2、3、4", dataType = "String")
    private String qTwo;

    @ApiModelProperty(value = "修饰，由自理到依赖分为1、2", example = "1、2", dataType = "String")
    private String qThree;

    @ApiModelProperty(value = "如厕，由自理到依赖分为1、2、3", example = "1、2、3", dataType = "String")
    private String qFour;

    @ApiModelProperty(value = "洗澡，由自理到依赖分为1、2", example = "1、2", dataType = "String")
    private String qFive;

    @ApiModelProperty(value = "行45m，由自理到依赖分为1、2、3、4", example = "1、2、3、4", dataType = "String")
    private String qSix;

    @ApiModelProperty(value = "上下楼梯，由自理到依赖分为1、2、3", example = "1、2、3", dataType = "String")
    private String qSeven;

    @ApiModelProperty(value = "穿衣，由自理到依赖分为1、2、3", example = "1、2、3", dataType = "String")
    private String qEight;

    @ApiModelProperty(value = "大便控制，由自理到依赖分为1、2、3", example = "1、2、3", dataType = "String")
    private String qNine;

    @ApiModelProperty(value = "小便控制，由自理到依赖分为1、2、3", example = "1、2、3", dataType = "String")
    private String qTen;
}
