package com.hx.collector.survey.service;


import com.hx.collector.config.properties.AuthProperties;

import javax.annotation.Resource;

public class BaseService {
    @Resource
    protected AuthProperties authProperties;
}
