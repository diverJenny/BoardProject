package com.ok.okboard.service;

import com.ok.okboard.domain.Post;
import com.ok.okboard.dto.PostDTO;
import com.ok.okboard.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository repository;

    public List<PostDTO> getPosts() {
        List<Post> postList = repository.findAll();
        List<PostDTO> postDtoList = new ArrayList<>();
        for(Post post : postList) {
            postDtoList.add(post.toPostDto());
        }
        return postDtoList;
    }

    public PostDTO findPostById(int id) throws Exception {
        return repository.findById(id)
                .map(Post::toPostDto)
                .orElseThrow(() -> new Exception("Post not found with Id: " + id));
    }
}
