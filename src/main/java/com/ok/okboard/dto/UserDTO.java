package com.ok.okboard.dto;

import com.ok.okboard.domain.User;
import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class UserDTO {

    private Long id;
    private String email;
    private String name;
    private String password;
    private LocalDateTime createdAt;
    private Boolean role;

    public User toUser() {
        return User.builder()
                .id(id)
                .email(email)
                .name(name)
                .password(password)
                .createdAt(createdAt)
                .role(role)
                .build();
    }

}
