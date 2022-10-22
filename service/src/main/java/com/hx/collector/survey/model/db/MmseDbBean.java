package com.hx.collector.survey.model.db;

import com.baomidou.mybatisplus.annotation.TableName;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@Accessors(chain = true)
@TableName("mmse")
public class MmseDbBean {
    private String id;
    private String qOne;
    private String qTwo;
    private String qThree;
    private String qFour;
    private String qFive;
    private String qSix;
    private String qSeven;
    private String qEight;
    private String qNine;
    private String qTen;
    private String qEleven;
    private String qTwelve;
    private String qThirteen;
    private String qFourteen;
    private String qFifteen;
    private String qSixteen;
    private String qSeventeen;
    private String qEighteen;
    private String qNineteen;
    private String qTwenty;
    private String qTwentyOne;
    private String qTwentyTwo;
    private String qTwentyThree;
    private String qTwentyFour;
    private String qTwentyFive;
    private String qTwentySix;
    private String qTwentySeven;
    private String qTwentyEight;
    private String qTwentyNine;
    private String qThirty;
    private Date createDate;
    private Date updateDate;
    private String userId;
    private String delFlge;
}
