package com.ok.okboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

// Data Source 없이 실행 할때 : @SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class OkBoardApplication {

    public static void main(String[] args) {
        SpringApplication.run(OkBoardApplication.class, args);
    }

}
