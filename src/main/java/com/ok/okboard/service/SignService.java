package com.ok.okboard.service;

import com.ok.okboard.domain.User;
import com.ok.okboard.dto.UserDTO;
import com.ok.okboard.repository.SignRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class SignService {

    private final SignRepository repository;

    // 로그인
    public boolean signIn(String email, String password) {
        User user = repository.findByEmail(email);
        if(user != null && user.getPassword().equals(password)) {
            // 패스워드가 일치 하면 인증 성공
            return true;
        }
        // 인증 실패
        return false;
    }

    // 회원가입
    public Long signUp(UserDTO userDto) {
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setName((userDto.getName()));
        user.setPassword(userDto.getPassword());

        User saveUser = repository.save(user);
        return saveUser.getId();
    }
}
