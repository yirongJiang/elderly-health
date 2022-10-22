package com.hx.collector.survey.model.db;

import com.baomidou.mybatisplus.annotation.TableName;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@Accessors(chain = true)
@TableName("heart")
public class HeartDbBean {
    private String id;
    private String qOne;
    private Date createDate;
    private Date updateDate;
    private String userId;
    private String delFlge;
}
