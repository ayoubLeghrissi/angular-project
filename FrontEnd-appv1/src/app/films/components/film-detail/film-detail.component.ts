import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../services/film-service.service';
import { UserServiceService } from '../../../shared/services/user-service.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.scss'
})
export class FilmDetailComponent {

  id:any;
  data:any={};
  noPoster:boolean=false;
  commentObj:any={};
  commentList:any;
  users:any;
  now:any;

  constructor(private route:ActivatedRoute,private filmService:FilmService,private userService:UserServiceService) {
    this.id=this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {

    this.getDetails();
    this.users=this.userService.getUsers();
    this.getCommentars();
    this.now=new Date();
    
  }
  findUserById(id:number) {
    for (let u of this.users) {
      if(id==u.userId) {
        return u.name;
      }
    }
  }
  getTime(event:any) {
    const timestamp = new Date(event.createDate);
    const now = new Date();
    const minutesPassed = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
    return minutesPassed;
  }
  rec(event:any) {
    event.filmId=this.id;
    this.filmService.postComment(event).subscribe(
      res=>{
        

        this.getCommentars();
        console.log(res);
      },
      error=>error
    )
    //console.log(JSON.stringify(event))
  }
  /*sendToDb(obj:any) {
    this.filmService.postComment(obj).subscribe(
      res=>res,
      error=>error
    )
  }*/

  getDetails() {
    this.filmService.getFilmById(this.id).subscribe(
      res=> {
        this.data=res;
        console.log("data retrieved"+JSON.stringify(this.data));
      },
      error=>{
        
      if (error.status === 404) {
        console.log("Movie not found");
        // Handle the case where the movie is not found
      } else {
        console.log("Other error occurred");
        // Handle other types of errors
      }
      }
    )
  }
  getCommentars() {
    this.filmService.getComment().subscribe(
      res=>this.commentList=res,
      error=>error
    )
  }
  ngOnDestroy() {
    console.log('FilmDetailComponent destroyed');
  }

}
