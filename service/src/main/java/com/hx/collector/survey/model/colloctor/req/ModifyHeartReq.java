package com.hx.collector.survey.model.colloctor.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "新增冠心/心率问题请求")
public class ModifyHeartReq {
    @ApiModelProperty(value = "是否有心脏相关的问题？严重程度划分：1、2、3、4", example = "1、2、3、4", dataType = "String")
    private String qOne;
}
