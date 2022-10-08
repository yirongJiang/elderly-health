package com.hx.collector.survey.model.cognition.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "变更认知记录请求")
public class ModifyCognitionReq {
    @ApiModelProperty(value = "时间问题答案", example = "1:是，0：否", dataType = "String")
    private String answerTime;

    @ApiModelProperty(value = "石头问题答案", example = "1:是，0：否", dataType = "String")
    private String answerStone;

    @ApiModelProperty(value = "时钟照片二进制数据", example = "1112#4#@", dataType = "String")
    private String photoClock;

    @ApiModelProperty(value = "手绘时钟二进制数据", example = "1112#4#@", dataType = "String")
    private String drawClock;
}
