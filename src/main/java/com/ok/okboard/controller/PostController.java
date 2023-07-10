package com.ok.okboard.controller;

import com.ok.okboard.dto.PostDTO;
import com.ok.okboard.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/posts")
public class PostController {

    private final PostService service;

    // 전체 게시글 조회
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getPosts() throws Exception {
        List<PostDTO> dtoList = service.getPosts();
        return ResponseEntity.ok(dtoList);
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getPosts(@PathVariable("id") int id) throws Exception {
        PostDTO post = service.findPostById(id);
        return ResponseEntity.ok(post);
    }

}
