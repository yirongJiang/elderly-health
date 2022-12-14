package com.hx.collector.survey.model.colloctor.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

@Data
@ApiModel(description = "认知记录详情")
public class CognitionDetail {
    @ApiModelProperty(value = "时间问题答案", example = "1:是，0：否", dataType = "String")
    private String answerTime;

    @ApiModelProperty(value = "石头问题答案", example = "1:是，0：否", dataType = "String")
    private String answerStone;

    @ApiModelProperty(value = "时钟照片二进制数据", example = "", dataType = "String")
    private String photoClock;

    @ApiModelProperty(value = "手绘时钟二进制数据", example = "", dataType = "String")
    private String drawClock;

    @ApiModelProperty(value = "填写用户id", example = "", dataType = "String")
    private String userId;

    @ApiModelProperty(value = "创建时间", example = "", dataType = "Date")
    private Date createDate;

    @ApiModelProperty(value = "变更时间", example = "", dataType = "Date")
    private Date updateDate;
}
