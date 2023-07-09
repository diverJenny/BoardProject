package com.ok.okboard.service;

import com.ok.okboard.domain.User;
import com.ok.okboard.dto.UserDTO;
import com.ok.okboard.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

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

    public UserDTO findUserById(Long id) throws Exception {
        return repository.findById(id)
                .map(User::toUserDto)
                .orElseThrow(() -> new Exception("User not found with ID: " + id));
    }

    public Long createUser(UserDTO userDto) throws Exception {
        return repository.save(userDto.toUser()).getId();
    }

    public void deleteUser(Long id) throws Exception {
        repository.deleteById(id);
    }
}
