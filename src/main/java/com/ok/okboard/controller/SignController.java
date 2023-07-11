package com.ok.okboard.controller;

import com.ok.okboard.domain.User;
import com.ok.okboard.dto.UserDTO;
import com.ok.okboard.service.SignService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.time.LocalDateTime;

@RequiredArgsConstructor
@RestController
@RequestMapping("/sign-api")
public class SignController {

    private final SignService service;

    // 로그인
    @PostMapping(value = "/sign-in")
    public ResponseEntity signIn(@RequestBody UserDTO userDto) {
        String email = userDto.getEmail();
        String password = userDto.getPassword();

        // 사용자 인증 처리
        boolean isAuthenticated = service.signIn(email, password);

        if(isAuthenticated) {
            // 인증 성공
            return ResponseEntity.ok("로그인 성공");
        } else {
            // 인증 실패
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패");
        }
    }

    // 회원가입
    @PostMapping("/sign-up")
    public ResponseEntity<String> signUp(@RequestBody UserDTO userDto) throws Exception{

        userDto.setEmail(userDto.getEmail());
        userDto.setName(userDto.getName());
        userDto.setPassword(userDto.getPassword());
        service.signUp(userDto);
        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }

}
