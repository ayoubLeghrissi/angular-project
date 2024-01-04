import { Component } from '@angular/core';
import { FilmService } from '../../services/film-service.service';

@Component({
  selector: 'app-favori',
  templateUrl: './favori.component.html',
  styleUrl: './favori.component.scss'
})
export class FavoriComponent {

  favoris:any;
  favo:any;
  resultados:any[]=[];

  constructor(private filmService:FilmService ) {

  }
  ngOnInit() {
    this.getFavoris();
    this.getMyFilms();
  }
  findFilmById(filmsArray:any[], filmId:any) {
    return filmsArray.find(film => film.id === filmId);
  }
  getMyFilms() {
    this.filmService.getAllFilms().subscribe(
      res=>
        {
          this.favo=res;
          
        },
      error=>error
    )
  }

  getFavoris() {
    this.filmService.getDataBackEnd().subscribe(
      res=>{
        this.favoris=res;
        /*for (let f of this.favoris) {
          this.filmService.getFilmById(f.id).subscribe(
            res=>{
              const toAdd={...res,...{fav_id:f.favorisId}}
              this.resultados.push(toAdd);
            }
          )
        }
        console.log(this.resultados)*/
        
        
        console.log(this.favoris)
        
        
      },
      error=>error
    )
  }
  delFav(id:any) {
    
          this.filmService.deleteFav(id).subscribe(
      res=>{
        this.getFavoris();
      },
      error=>error
    )
        }
}
   


