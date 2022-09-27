
/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2021-2021. All rights reserved.
 */

package com.hx.collector.utils;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;

/**
 * ECS util
 *
 * @Description: INFO util
 * @author: ghca
 * @since 2021-04-03
 **/
public class UuidUtil {
    private UuidUtil() {
    }

    /**
     * function
     *
     * @return 返回值
     */
    public static String newGuid() {
        UUID uuid = UUID.randomUUID();
        return uuid.toString().replaceAll("-", "");
    }

    /**
     * 获取32位GUID
     *
     * @return 返回值
     */
    public static String getId() {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            UUID uuid = UUID.randomUUID();
            String guidStr = uuid.toString();
            md.update(guidStr.getBytes("UTF-8"), 0, guidStr.length());
            return new BigInteger(1, md.digest()).toString(16);
        } catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
            return "";
        }
    }
}
