package com.ok.okboard.domain;

import com.ok.okboard.dto.UserDTO;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;

//JPA의 entity로 등록
@Entity
// 필드의 Getter를 생성
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    // 해당 컬럼이 식별키라는 것을 의미
    @Id
    // 식별키 생성 전략 명시(AUTO : 데이터베이스에 맞게 자동으로 생성)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // DB 컬럼으로 등록
    @Column(name = "user_id", nullable = false, updatable = false)
    private Long id;
    private String email;
    private String name;
    private String password;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    @ColumnDefault("false")
    private Boolean role;

    public UserDTO toUserDto() {
        return UserDTO.builder()
                .id(id)
                .email(email)
                .name(name)
                .password(password)
                .createdAt(createdAt)
                .role(role)
                .build();
    }

}
