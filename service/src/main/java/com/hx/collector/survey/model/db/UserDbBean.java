package com.hx.collector.survey.model.db;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@Accessors(chain = true)
@TableName("user")
public class UserDbBean {
    private String id;
    private String userId;
    private String userName;
    private String passWord;
    private String phone;
    private String role;
    private Date createDate;
    private Date updateDate;
    private String delFlge;
}
