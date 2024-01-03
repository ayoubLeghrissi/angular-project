import { Component,Input,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from './filmInterface';
import { FilmService } from '../../services/film-service.service';
import { Favoris } from '../all-films/favoris';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../../../shared/services/user-service.service';
import { LoginComponent } from '../../../shared/components/login/login.component';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss'
})
export class FilmComponent {

 @Input()film:any={};
 idFav:number=this.film.id;
 f:Favoris={} as Favoris;
 users:any;
 help:any;
 

 
 constructor(private service:FilmService,public userService:UserServiceService) {

 }
 ngOnInit() {
  this.userService.getUsers().subscribe(
    data => {
      this.users = data;
    },
    error => {
      console.error('Error fetching users:', error);
    }
  )
 }
 handleClick() {
  //this.f=new Favoris(this.film.id);
  
  if(this.userService.isUserLoggedIn()) {
    
    const username=sessionStorage.getItem('username');
    console.log(this.users)
    for(let u of this.users) {
      if(u.mail==username) {
        console.log("here is id:"+u.userId);
        const dataToSend = { id:this.film.id,userFav:{userId:u.userId} }; // Your data here
        

        this.service.postData(dataToSend).subscribe(response => {

          console.log(response);
          this.service.getDataBackEnd().subscribe(res=>{
          console.log(res);
          
    })

  }, error => {
      console.log(error);
  });
        
      }
    }
    
  }
  
  
 
 }

 
  

}
