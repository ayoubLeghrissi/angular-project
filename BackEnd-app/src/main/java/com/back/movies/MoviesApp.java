package com.back.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@SpringBootApplication
public class MoviesApp {

    public static void main(String[] args) {
        SpringApplication.run(MoviesApp.class, args);
    }

}
