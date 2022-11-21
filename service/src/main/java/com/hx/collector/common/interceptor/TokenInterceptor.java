package com.hx.collector.common.interceptor;

import com.alibaba.fastjson.JSON;
import com.auth0.jwt.exceptions.AlgorithmMismatchException;
import com.auth0.jwt.exceptions.InvalidClaimException;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.hx.collector.config.properties.AuthProperties;
import com.hx.collector.utils.JwtUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * TokenInterceptor
 *
 * @since 2021-02-03
 */
public class TokenInterceptor implements HandlerInterceptor {
    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(TokenInterceptor.class);
    @Autowired
    private AuthProperties authProperties;

    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o)
        throws Exception {
        httpServletResponse.setCharacterEncoding("UTF-8");
        httpServletResponse.setContentType("application/json; charset=utf-8");
        String token = httpServletRequest.getHeader("X-Auth-Token");
        if (StringUtils.isBlank(token)) {
            PrintWriter out = null;
            try {
                out = httpServletResponse.getWriter();
                out.append(JSON.toJSONString("缺少X-Auth-Token参数"));
            } catch (IOException e) {
                LOGGER.info("preHandle IOException:{}", e.getMessage());
            } finally {
                if (out != null) {
                    out.close();
                }
            }
            return false;
        }
        PrintWriter outToken = null;
        try {
            JwtUtils.verify(token, authProperties);
        } catch (SignatureVerificationException e) {
            LOGGER.info("token SignatureVerificationException");
            outToken = httpServletResponse.getWriter();
            outToken.append(JSON.toJSONString("签名异常"));
            return false;
        } catch (TokenExpiredException e) {
            LOGGER.info("token TokenExpiredException");
            outToken = httpServletResponse.getWriter();
            outToken.append(JSON.toJSONString("token过期"));
            return false;
        } catch (AlgorithmMismatchException e) {
            LOGGER.info("token AlgorithmMismatchException");
            outToken = httpServletResponse.getWriter();
            outToken.append(JSON.toJSONString("token有误"));
            return false;
        } catch (InvalidClaimException e) {
            LOGGER.info("token InvalidClaimException");
            outToken = httpServletResponse.getWriter();
            outToken.append(JSON.toJSONString("token信息失效"));
            return false;
        } catch (Exception e) {
            LOGGER.info("token Exception");
            outToken = httpServletResponse.getWriter();
            outToken.append(JSON.toJSONString("token信息有误"));
            return false;
        }finally {
            if (outToken != null) {
                outToken.close();
            }
        }
        DecodedJWT tokenInfo = JwtUtils.getTokenInfo(token, authProperties);
        String userId = tokenInfo.getClaim("userId").asString();
        if (StringUtils.isBlank(userId)) {
            LOGGER.info("user not exist,userId:{}", userId);
            return false;
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o,
        ModelAndView modelAndView) throws Exception {
    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
        Object o, Exception e) throws Exception {
    }
}
