package com.ok.okboard.controller;

import com.ok.okboard.dto.UserDTO;
import com.ok.okboard.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    // 전체 사용자 조회
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getUsers() throws Exception {
        List<UserDTO> dtoList = userService.getUsers();
        return ResponseEntity.ok(dtoList);
    }

    // 사용자 조회
    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getUser(@PathVariable("id") Long id) throws Exception{
        UserDTO user = userService.findUserById(id);
        return ResponseEntity.ok(user);
    }

    // 회원가입
    @PostMapping
    public ResponseEntity<String> createUser(@RequestBody UserDTO userDto) throws Exception{
        userDto.setCreatedAt(LocalDateTime.now());
        userDto.setRole(false);
        userService.createUser(userDto);
        return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
    }

}
