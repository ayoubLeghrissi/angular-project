import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService{

  API_TOKEN:any="15c48e121706335fd5b85cbb536f810c";
  URL:string= 'https://api.themoviedb.org/3/trending/all/day?api_key=' + 
  this.API_TOKEN;
  URL2:string ='https://api.themoviedb.org/3/search/movie?api_key=' + 
  this.API_TOKEN + '&query=' ;
  private readonly fav:string=environment.API_BASE_URL+'/favoris';
  private readonly com:string=environment.API_BASE_URL+'/comment';
  
  //private readonly server:string ='htttp://192.168.100.83:8080';

  constructor(private http:HttpClient) { }

   getAllFilms() {
    return  this.http.get(this.URL );
  }
  getAllByPage(page:number) {
    return this.http.get(this.URL+"&page="+page)
  }

  getFilmById(id:any) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + 
    this.API_TOKEN )
  }
  searchByText(text:string) {
    return this.http.get(this.URL2+text);
  }
  postData(f:any) {
    return this.http.post(this.fav,f); 
  }
  getDataBackEnd() {
    return this.http.get(this.fav)  }
  
  postComment(comm:any) {
    return this.http.post(this.com,comm)
  }
  getComment() {
    return this.http.get(this.com);
  }
  deleteFav(id:any) {
    return this.http.delete(this.fav+'/'+id);
  }
}
