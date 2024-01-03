import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './components/comment/comment.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { PaginComponent } from './components/pagin/pagin.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    CommentComponent,
    NavBarComponent,
    PaginComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    SearchBarComponent,
    CommentComponent,
    NavBarComponent,
    PaginComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class SharedModule { }
