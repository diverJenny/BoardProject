package com.ok.okboard.controller;

import com.ok.okboard.domain.User;
import com.ok.okboard.dto.UserDTO;
import com.ok.okboard.service.SignService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RequiredArgsConstructor
@RestController
@RequestMapping("/sign-api")
public class SignController {

    private final SignService service;

    // 로그인
    @PostMapping("/sign-in")
    public ResponseEntity signIn(@RequestBody UserDTO userDto) {
        String email = userDto.getEmail();
        String password = userDto.getPassword();

        boolean isAuthenticated = service.signIn(email, password);
        if(isAuthenticated) {
            return ResponseEntity.ok("로그인 성공");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패");
        }
    }

    // 회원가입
    @PostMapping("/sign-up")
    public ResponseEntity<String> signUp(@RequestBody UserDTO userDto) throws Exception{

        userDto.setEmail(userDto.getEmail());
        userDto.setName(userDto.getName());
        userDto.setCreatedAt(LocalDateTime.now());
        userDto.setUpdatedAt(LocalDateTime.now());
        userDto.setRole(false);
        service.signUp(userDto);
        return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
    }

}
