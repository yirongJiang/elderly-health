package com.hx.collector.config;

import com.hx.collector.common.interceptor.TokenInterceptor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/**
 * InterceptorConfig
 *
 * @since 2021-02-23
 */
@Configuration
public class InterceptorConfig extends WebMvcConfigurationSupport {
    /**
     * tokenInterceptor
     *
     * @return 返回值
     */
    @Bean
    TokenInterceptor tokenInterceptor() {
        return new TokenInterceptor();
    }

    /**
     * addInterceptors
     *
     * @param registry 参数
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(tokenInterceptor())
            .addPathPatterns("/rest/**")
            .excludePathPatterns("/swagger-resources/**", "/webjars/**", "/v2/**", "/swagger-ui.html/**",
                "/doc.html/**", "/rest/v1/user/register", "/rest/v1/user/login");
    }

    /**
     * addResourceHandlers
     *
     * @param registry 参数
     */
    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/swagger-ui/**")
            .addResourceLocations("classpath:/META-INF/resources/webjars/springfox-swagger-ui/")
            .resourceChain(false);
        registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
        registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
    }
}
