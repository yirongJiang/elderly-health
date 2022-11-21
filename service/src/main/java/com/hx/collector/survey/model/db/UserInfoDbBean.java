package com.hx.collector.survey.model.db;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@Accessors(chain = true)
@TableName("user_info")
public class UserInfoDbBean {
    private String id;
    private String userId;
    private String name;
    private String gender;
    private String height;
    private String weight;
    private String age;
    private String matrim;
    private String edu;
    private String disease;
    private String org;
    private String place;
    private String staff;
    private Date createDate;
    private Date updateDate;
    private String delFlge;
}
