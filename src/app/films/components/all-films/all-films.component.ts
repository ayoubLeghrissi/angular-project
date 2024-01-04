import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Film } from '../film/filmInterface';
import { FilmService } from '../../services/film-service.service';
//import { FilmComponent } from '../film/film.component';

@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrl: './all-films.component.scss'
})
export class AllFilmsComponent {

  //film!:Film;

  data:any={};
  urlImg:string ='https://image.tmdb.org/t/p/w300' + this.data.poster_path;
  pageToRequest:any=1;
  test:any;
  //myFilms:Film[]=[];
  
  constructor(private filmService:FilmService,private route:ActivatedRoute,private router:Router) {
    this.pageToRequest=route.snapshot.paramMap.get('page');
 
  }
  
  ngOnInit() {
    this.getData();
    
    //this.getPage(this.pageToRequest);
    
  }
  receive(event:number) {
    //this.pageToRequest=event;
    this.getPage(event)
   
  }
  
  getIt(event:any) {
    this.filmService.searchByText(event).subscribe(
      res=>{
        this.data=res;
        console.log(this.data);
      }
    );
  }
  getPage(page:number) {
    this.filmService.getAllByPage(page).subscribe(
      res=> {
        this.data=res;
        console.log(JSON.stringify(this.data))
      }
    )
  }

  
  getData() {
     this.filmService.getAllFilms().subscribe(
      (res:any)=> {
        this.data=res;
        console.log(JSON.stringify(this.data));
      }
      
    );
  }
  
  

  

}
