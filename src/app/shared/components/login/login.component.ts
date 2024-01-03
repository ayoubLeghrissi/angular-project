import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']  // Fix the typo here
})
export class LoginComponent {

  constructor(private router: Router,
    private loginservice: UserServiceService) { }

  loginForm = new FormGroup({
    mail: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  allUsers:any;
  invalidLogin:boolean=false;
  ngOnInit() {
    this.loginservice.getUsers().subscribe(
      data => {
        this.allUsers = data;
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }

  handler() {
    if(this.allUsers && this.authenticate(this.loginForm.value.mail,this.loginForm.value.password)) {
      this.router.navigate([''])
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin=true;
    }
  }
  authenticate(username:string|null|undefined, password:string|null|undefined) {
    console.log("in");
    for(let item of this.allUsers) {
      console.log("username :"+username + "," +"mail:"+item.mail)
      console.log("password:"+password+","+"pass:"+item.password)
      if(username==item.mail && password==item.password) {
        console.log("in for");
        sessionStorage.setItem('username', item.mail)
        return true;
      }
    }
    console.log("out for");
    return false;
    
  }
}
