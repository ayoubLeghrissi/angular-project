import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFilmsComponent } from './films/components/all-films/all-films.component';
import { FilmDetailComponent } from './films/components/film-detail/film-detail.component';
import { LoginComponent } from './shared/components/login/login.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { AuthGaurdService } from './films/services/auth-guard.service';
import { Favoris } from './films/components/all-films/favoris';
import { FavoriComponent } from './films/components/favori/favori.component';

const routes: Routes = [
  
  {
    path:'',
    component:AllFilmsComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'films/:page',
    component:AllFilmsComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'favoris',
    component:FavoriComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
  ,
  {
    path:'detail/:id',
    component:FilmDetailComponent,
    //canActivate:[AuthGaurdService]
  },
  {
    path:'**',
    component:AllFilmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
