package com.back.movies.controller;



import com.back.movies.entities.User;
import com.back.movies.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@CrossOrigin("http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public void createUser(@RequestBody User user) {

        user.setUrlImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZze2gx8I7dnJzD9EZx5HaIOkyrnP8ayG3jA&usqp=CAU");
        List<User> users=userRepository.findAll();
        for(User u:users) {
            if(user.getMail()==u.getMail()) {
                System.out.println("already exists");break;
            }
        }
        userRepository.save(user);
    }
    @GetMapping("/login")
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    /*@GetMapping("/login")
    public Long getUserIdByMail(@RequestBody String name) {
        User user = userRepository.findByMail(name);
        return user.getUserId();
    }*/


}

