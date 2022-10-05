package com.hx.collector.survey.controller;

import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(value = "/rest/v1")
public class BaseController {
    protected static final String TOKEN = "X-Auth-Token";
}
