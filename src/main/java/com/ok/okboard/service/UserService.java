package com.ok.okboard.service;

import com.ok.okboard.domain.User;
import com.ok.okboard.dto.UserDTO;
import com.ok.okboard.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    public List<UserDTO> getUsers() throws Exception{
        List<User> userList = repository.findAll();
        List<UserDTO> userDtoList = new ArrayList<>();
        for (User user : userList) {
            userDtoList.add(user.toUserDto());
        }
        return userDtoList;
    }

    public void createUser(UserDTO userDto) {

    }

    public UserDTO findUserById(Long id) {
//        return repository.findById(id).orElseThrow().toDto();
        return null;
    }
}
