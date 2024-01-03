package com.back.movies.entities;




import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
//@JsonIgnoreProperties("user")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String commentContent;
    private String mail;
    private long filmId;
    private String createDate;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
