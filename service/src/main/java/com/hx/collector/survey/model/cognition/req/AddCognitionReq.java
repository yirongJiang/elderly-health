package com.hx.collector.survey.model.cognition.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import lombok.Data;

@Data
@ApiModel(description = "新增认知记录请求")
public class AddCognitionReq {
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
}
