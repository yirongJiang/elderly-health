package com.hx.collector.survey.model.db;

import com.baomidou.mybatisplus.annotation.TableName;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@Accessors(chain = true)
@TableName("pain")
public class PainDbBean {
    private String id;
    private String positionOne;
    private String levelOne;
    private String positionTwo;
    private String levelTwo;
    private Date createDate;
    private Date updateDate;
    private String userId;
    private String delFlge;
}
