package com.hx.collector.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.hx.collector.config.properties.AuthProperties;
import org.springframework.beans.factory.annotation.Value;

import javax.annotation.Resource;
import java.util.Calendar;

public class JwtUtils {
    public static String getToken(String userName, String userId, AuthProperties authProperties) {
        Calendar now = Calendar.getInstance();
        now.add(Calendar.MINUTE, authProperties.getExpires());
        String token = JWT.create()
                .withClaim("userId", userId)
                .withClaim("userName", userName)
                .withExpiresAt(now.getTime())
                .sign(Algorithm.HMAC256(authProperties.getKey()));
        return token;
    }

    public static void verify(String token, AuthProperties authProperties) {
        JWT.require(Algorithm.HMAC256(authProperties.getKey())).build().verify(token);
    }

    public static DecodedJWT getTokenInfo(String token, AuthProperties authProperties) {
        return JWT.require(Algorithm.HMAC256(authProperties.getKey())).build().verify(token);
    }
}
