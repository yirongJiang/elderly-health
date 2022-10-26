package com.hx.collector.survey.model.colloctor.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

@Data
@ApiModel(description = "听力筛查详情")
public class AuditionDetail {
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

    @ApiModelProperty(value = "是的：3，有时：2，不是：1", example = "1、2、3", dataType = "String")
    private String qSix;

    @ApiModelProperty(value = "是的：3，有时：2，不是：1", example = "1、2、3", dataType = "String")
    private String qSeven;

    @ApiModelProperty(value = "是的：3，有时：2，不是：1", example = "1、2、3", dataType = "String")
    private String qEight;

    @ApiModelProperty(value = "是的：3，有时：2，不是：1", example = "1、2、3", dataType = "String")
    private String qNine;

    @ApiModelProperty(value = "是的：3，有时：2，不是：1", example = "1、2、3", dataType = "String")
    private String qTen;

    @ApiModelProperty(value = "填写用户id", example = "", dataType = "String")
    private String userId;

    @ApiModelProperty(value = "创建时间", example = "", dataType = "Date")
    private Date createDate;

    @ApiModelProperty(value = "变更时间", example = "", dataType = "Date")
    private Date updateDate;
}
