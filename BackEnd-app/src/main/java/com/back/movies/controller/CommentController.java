package com.back.movies.controller;




import com.back.movies.entities.Comment;
import com.back.movies.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
@CrossOrigin("*")
//@CrossOrigin("http://localhost/f-movies-app/browser/")
public class CommentController {

    @Autowired
    private CommentRepository commentRepository;
    @PostMapping()
    public void createComment(@RequestBody Comment comment) {
        commentRepository.save(comment);
    }
    @GetMapping()
    public List<Comment> getComment() {
        return commentRepository.findAll();
    }


}
