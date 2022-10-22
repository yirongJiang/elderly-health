package com.hx.collector.survey.model.colloctor.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "新增视觉筛查请求")
public class AddVisionReq {
    @ApiModelProperty(value = "是的：3，有时：2，不是：1", example = "1、2、3", dataType = "String")
    private String qOne;

    @ApiModelProperty(value = "是的：3，有时：2，不是：1", example = "1、2、3", dataType = "String")
    private String qTwo;

    @ApiModelProperty(value = "是的：3，有时：2，不是：1", example = "1、2、3", dataType = "String")
    private String qThree;

    @ApiModelProperty(value = "是的：3，有时：2，不是：1", example = "1、2、3", dataType = "String")
    private String qFour;

    @ApiModelProperty(value = "是的：3，有时：2，不是：1", example = "1、2、3", dataType = "String")
    private String qFive;
}
