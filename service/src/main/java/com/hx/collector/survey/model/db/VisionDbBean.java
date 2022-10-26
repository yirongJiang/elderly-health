package com.hx.collector.survey.model.db;

import com.baomidou.mybatisplus.annotation.TableName;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@Accessors(chain = true)
@TableName("vision")
public class VisionDbBean {
    private String id;
    private String qOne;
    private String qTwo;
    private String qThree;
    private String qFour;
    private String qFive;
    private Date createDate;
    private Date updateDate;
    private String userId;
    private String delFlge;
}
