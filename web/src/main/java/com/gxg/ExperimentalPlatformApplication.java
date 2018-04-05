package com.gxg;

import com.gxg.dao.ExperimentalNodeDao;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.cache.CacheAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication(exclude = CacheAutoConfiguration.class)
@EnableScheduling  //启动定时任务
public class ExperimentalPlatformApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(ExperimentalPlatformApplication.class, args);
		context.getBean(ExperimentalNodeDao.class).setUserIdAndTimeNull();
	}
}
