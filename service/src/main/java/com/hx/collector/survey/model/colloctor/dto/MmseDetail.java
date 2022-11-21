package com.hx.collector.survey.model.colloctor.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

@Data
@ApiModel(description = "简易精神状态检查量表MMSE详情")
public class MmseDetail {
    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qOne;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qTwo;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qThree;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qFour;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qFive;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qSix;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qSeven;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qEight;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qNine;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qTen;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qEleven;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qTwelve;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qThirteen;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qFourteen;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qFifteen;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qSixteen;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qSeventeen;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qEighteen;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qNineteen;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qTwenty;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qTwentyOne;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qTwentyTwo;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qTwentyThree;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qTwentyFour;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qTwentyFive;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qTwentySix;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qTwentySeven;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qTwentyEight;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qTwentyNine;

    @ApiModelProperty(value = "1为回答正确，0为回答不正确", example = "1、0", dataType = "String")
    private String qThirty;

    @ApiModelProperty(value = "填写用户id", example = "", dataType = "String")
    private String userId;

    @ApiModelProperty(value = "创建时间", example = "", dataType = "Date")
    private Date createDate;

    @ApiModelProperty(value = "变更时间", example = "", dataType = "Date")
    private Date updateDate;
}
