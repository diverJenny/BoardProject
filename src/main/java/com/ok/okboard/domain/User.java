package com.ok.okboard.domain;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

//JPA의 entity로 등록
@Entity
// 필드의 Getter를 생성
@Getter
@Table(name = "user")
public class User {

    // 해당 컬럼이 식별키라는 것을 의미
    @Id
    // 식별키 생성 전략 명시(AUTO : 데이터베이스에 맞게 자동으로 생성)
    @GeneratedValue(strategy = GenerationType.AUTO)
    // DB 컬럼으로 등록
    @Column(name = "user_id")
    private  Long id;

    @Column(length = 50, nullable = false)
    private String email;

    @Column(length = 50, nullable = false)
    private String password;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(length = 20, nullable = false)
    private String role;
}
