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

    public UserDTO findUserById(int id) throws Exception {
        return repository.findById(id)
                .map(User::toUserDto)
                .orElseThrow(() -> new Exception("User not found with ID: " + id));
    }

    public void updateUser(UserDTO userDto) throws Exception {
        User existingUser = repository.findById(userDto.getId())
                .orElseThrow(() -> new Exception("User not found with ID: " + userDto.getId()));

        existingUser.setName(userDto.getName());
        existingUser.setPassword(userDto.getPassword());
        existingUser.setUpdatedAt(userDto.getUpdatedAt());

        repository.save(existingUser);
    }

    public void deleteUser(int id) throws Exception {
        repository.deleteById(id);
    }

}
