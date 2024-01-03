import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './components/film/film.component';
import { AllFilmsComponent } from './components/all-films/all-films.component';
import { RouterModule } from '@angular/router';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FavoriComponent } from './components/favori/favori.component';



@NgModule({
  declarations: [
    FilmComponent,
    AllFilmsComponent,
    FilmDetailComponent,
    FavoriComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule
    
  ],
  exports:[
    AllFilmsComponent,
    FilmComponent,
    FilmDetailComponent
  ]
})
export class FilmsModule { }
