import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  urlUser:string=environment.API_BASE_URL+'/signup';
  urlLog:string = environment.API_BASE_URL+'/login';

  postUser(user:any) {
    return this.http.post(this.urlUser,user);
  }
  getUsers() {
    return this.http.get(this.urlLog);
  }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
