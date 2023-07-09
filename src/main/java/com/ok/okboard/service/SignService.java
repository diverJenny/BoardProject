package com.ok.okboard.service;

import com.ok.okboard.domain.User;
import com.ok.okboard.dto.UserDTO;
import com.ok.okboard.repository.SignRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SignService {

    private final SignRepository repository;

    // 로그인
    public boolean signIn(String email, String password) {
        User user = repository.findByEmail(email);
        if(user != null && user.getPassword().equals(password)) {
            return true;
        }
        return false;
    }

    public Long signUp(UserDTO userDto) throws Exception {
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setName((userDto.getName()));
        user.setPassword(userDto.getPassword());

        return repository.save(userDto.toUser()).getId();
    }
}
