package com.hx.collector.survey.model.db;

import com.baomidou.mybatisplus.annotation.TableName;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@Accessors(chain = true)
@TableName("cognition_two")
public class CognitionTwoDbBean {
    private String id;
    private String fingerStatus;
    private float gravityAngx;
    private float gravityAngy;
    private float gravityAngz;
    private float speedAngx;
    private float speedAngy;
    private float speedAngz;
    private float gyroscopeAngx;
    private float gyroscopeAngy;
    private float gyroscopeAngz;
    private float pressure;
    private Date collectTime;
    private float collectLong;
    private Date createDate;
    private Date updateDate;
    private String userId;
    private String delFlge;
}
