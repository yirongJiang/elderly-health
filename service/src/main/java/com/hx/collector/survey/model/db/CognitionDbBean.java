package com.hx.collector.survey.model.db;

import com.baomidou.mybatisplus.annotation.TableName;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@Accessors(chain = true)
@TableName("cognition")
public class CognitionDbBean {
    private String id;
    private String answerTime;
    private String answerStone;
    private String photoClock;
    private String drawClock;
    private Date createDate;
    private Date updateDate;
    private String userId;
    private String delFlge;
}
