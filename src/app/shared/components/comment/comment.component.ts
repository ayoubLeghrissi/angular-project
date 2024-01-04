import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {

  toSend:any={};
  users:any;
 
 group=new FormGroup( {
  mail:new FormControl('mail'),
  comment:new FormControl('comment',Validators.required)
 })
 constructor(private userService:UserServiceService) {

 }
  
  
  @Output() ev = new EventEmitter();
  added:boolean=false;
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
  handleEv() {
    if(this.userService.isUserLoggedIn()) {
    
      const username=sessionStorage.getItem('username');
      for(let u of this.users) {
        if(u.mail==username) {

        this.toSend={
    
        commentContent:this.group.value.comment,
        mail:this.group.value.mail,
        user:{userId:u.userId},
        filmId:0,
        createDate: new Date().toISOString()
        }
        this.ev.emit(this.toSend);
         this.added=true;
    this.group.reset();
    console.log(this.group.value.comment + "m" + this.group.value.mail);
      }
    
   
    //window.location.reload()
  }
}


}
}
