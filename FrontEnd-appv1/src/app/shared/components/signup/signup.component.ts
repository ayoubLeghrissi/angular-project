import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signUp=new FormGroup({
    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    repPassword:new FormControl('',Validators.required),
    chk:new FormControl(false,Validators.required)
  })
  user:any= {

  }
  constructor(private userService:UserServiceService) {

  }
  handler() {
    this.user={
      name:this.signUp.value.username,
      password:this.signUp.value.password,
      mail:this.signUp.value.email
    }
    if(this.signUp.value.repPassword===this.signUp.value.password) {
      this.userService.postUser(this.user).subscribe(
      res=>res,
      error=>error
    )
    }
    else {
      alert("not identical passwords");
    }
    
    alert(JSON.stringify(this.user));

    
  }

  createUser(user:any) {
    this.userService.postUser(user).subscribe(
      res=> {
        console.log('success' + res)
      }
      ,
      error=> {
        console.log('failed',error)
      }
      
    );
  }

}
