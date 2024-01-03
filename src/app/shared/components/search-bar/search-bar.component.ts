import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  text:string='search ...'
  
  @Output() ev = new EventEmitter();
  constructor() {

  }

 
  getSearch() {

    this.ev.emit(this.text);
  }

}
