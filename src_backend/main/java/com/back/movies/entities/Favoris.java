package com.back.movies.entities;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data

@NoArgsConstructor
@AllArgsConstructor
//@JsonIgnoreProperties("userFav")
@Table(name = "FAVORIS",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"id","userFav"})
        }
)
public class Favoris {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long favorisId;


    private long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userFav;

}
