package com.back.movies.controller;




import com.back.movies.entities.Favoris;
import com.back.movies.repositories.FavorisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favoris")
@CrossOrigin("http://localhost:4200")
//@CrossOrigin("http://localhost/f-movies-app/browser/")
public class FavorisController {

    @Autowired
    private FavorisRepository favorisRepository;

    @PostMapping()
    public void createFavoris(@RequestBody Favoris data) {
        favorisRepository.save(data);
    }
    @GetMapping()
    public List<Favoris> getAllFavoris() {
        return favorisRepository.findAll();
    }
    @DeleteMapping("/{id}")
    public void deleteFavoris(@PathVariable long id) {
        favorisRepository.deleteById(id);
    }

}
