package com.gxg.task;

import com.gxg.services.VNCService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * 该类用于设置某些运行定时任务
 * Created by 郭欣光 on 2017/12/31.
 */
@Component
public class TimedTask {

    @Autowired
    private VNCService vncService;

    @Scheduled(fixedRate = 10000)
    public void checkVNCNodeUsed() {
        vncService.checkVNCNodeUsed();
    }
}
