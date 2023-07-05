package com.ok.okboard.controller;

import com.ok.okboard.domain.User;
import com.ok.okboard.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class AccountController {

    UserRepository userRepository;

    @PostMapping("/account/login")
    public Long login(
            @RequestBody Map<String, String> params
            ) {
        User user = userRepository.findByEmailAndPassword(params.get("email"), params.get("password"));

        if(user != null) {
            return user.getId();
        }

        return 0L;
    }
}
