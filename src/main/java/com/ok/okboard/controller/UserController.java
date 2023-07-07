package com.ok.okboard.controller;

import com.ok.okboard.dto.UserDTO;
import com.ok.okboard.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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


}
