package com.hx.collector.survey.model.colloctor.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

@Data
@ApiModel(description = "新增自制认知筛查表2请求")
public class AddCognitionTwoReq {
    @ApiModelProperty(value = "是否在画图落手状态,0：抬起状态，1：手指触摸屏幕状态", example = "1", dataType = "String")
    private String fingerStatus;

    @ApiModelProperty(value = "重力传感器采集的x轴角度，单位：°", example = "11.12", dataType = "float")
    private float gravityAngx;

    @ApiModelProperty(value = "重力传感器采集的y轴角度，单位：°", example = "11.12", dataType = "float")
    private float gravityAngy;

    @ApiModelProperty(value = "重力传感器采集的z轴角度，单位：°", example = "12.12", dataType = "float")
    private float gravityAngz;

    @ApiModelProperty(value = "加速度传感器的x轴加速度，单位：cm/单位时间", example = "12.12", dataType = "float")
    private float speedAngx;

    @ApiModelProperty(value = "加速度传感器的y轴加速度，单位：cm/单位时间", example = "12.12", dataType = "float")
    private float speedAngy;

    @ApiModelProperty(value = "加速度传感器的z轴加速度，单位：cm/单位时间", example = "12.12", dataType = "float")
    private float speedAngz;

    @ApiModelProperty(value = "陀螺仪的x轴角加速度,单位：°/单位时间", example = "12.12", dataType = "float")
    private float gyroscopeAngx;

    @ApiModelProperty(value = "陀螺仪的y轴角加速度,单位：°/单位时间", example = "12.12", dataType = "float")
    private float gyroscopeAngy;

    @ApiModelProperty(value = "陀螺仪的z轴角加速度,单位：°/单位时间", example = "12.12", dataType = "float")
    private float gyroscopeAngz;

    @ApiModelProperty(value = "屏幕压力传感器，压力值，单位：hPa/单位时间", example = "12.12", dataType = "Date")
    private float pressure;

    @ApiModelProperty(value = "时间。*【50】ms采集一次", example = "2234312", dataType = "float")
    private Date collectTime;

    @ApiModelProperty(value = "绘制累积长度*（手指起始点、通过画板取tap坐标）", example = "12.12", dataType = "float")
    private float collectLong;
}
