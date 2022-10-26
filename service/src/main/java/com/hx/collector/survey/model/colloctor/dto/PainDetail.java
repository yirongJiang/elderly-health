package com.hx.collector.survey.model.colloctor.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

@Data
@ApiModel(description = "疼痛报告详情")
public class PainDetail {
    @ApiModelProperty(value = "部位1的左、右、双侧，无：0，左：1，右：2，双侧：3", example = "0、1、2", dataType = "String")
    private String positionOne;

    @ApiModelProperty(value = "部位1的疼痛程度，疼痛程度表示为0~10分", example = "1、2、3..", dataType = "String")
    private String levelOne;

    @ApiModelProperty(value = "部位2的左、右、双侧，无：0，左：1，右：2，双侧：3", example = "0、1、2", dataType = "String")
    private String positionTwo;

    @ApiModelProperty(value = "部位2的疼痛程度，疼痛程度表示为0~10分", example = "1、2、3..", dataType = "String")
    private String levelTwo;

    @ApiModelProperty(value = "填写用户id", example = "", dataType = "String")
    private String userId;

    @ApiModelProperty(value = "创建时间", example = "", dataType = "Date")
    private Date createDate;

    @ApiModelProperty(value = "变更时间", example = "", dataType = "Date")
    private Date updateDate;
}
