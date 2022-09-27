package com.hx.collector.survey.model;

public class Result {
    private static final int TWO = 200;

    private int code = TWO;

    private Object body;

    /**
     * Result
     *
     * @param code c
     * @param body b
     */
    public Result(int code, Object body) {
        this.code = code;
        this.body = body;
    }

    /**
     * Result
     *
     * @param body b
     */
    public Result(Object body) {
        this.code = 500;
        this.body = body;
    }

    /**
     * Result
     */
    public Result() {
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public Object getBody() {
        return body;
    }

    public void setBody(Object body) {
        this.body = body;
    }
}
