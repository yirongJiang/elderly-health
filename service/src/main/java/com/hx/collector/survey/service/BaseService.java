package com.hx.collector.survey.service;


import com.auth0.jwt.interfaces.DecodedJWT;
import com.hx.collector.config.properties.AuthProperties;
import com.hx.collector.utils.JwtUtils;

import javax.annotation.Resource;

public class BaseService {
    @Resource
    protected AuthProperties authProperties;

    protected String getUserId(String token) {
        DecodedJWT tokenInfo = JwtUtils.getTokenInfo(token, authProperties);
        String userId = tokenInfo.getClaim("userId").asString();
        return userId;
    }
}
