package com.back.movies.entities;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "userSign")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"favorises","comments"})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;
    private String name;

    @Column(length = 60)
    private String password;

    private String mail;
    private String urlImage;

    @OneToMany(mappedBy = "userFav")
    private List<Favoris> favorises;
    @OneToMany(mappedBy = "user")
    private List<Comment> comments;
}
