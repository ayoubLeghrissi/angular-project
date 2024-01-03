import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagin',
  templateUrl: './pagin.component.html',
  styleUrl: './pagin.component.scss'
})
export class PaginComponent {

  @Input() totalPages:number=1;
  pagingArr:number[]=[1,2,3];
  enabledLeft:boolean=false;
  enabledRight:boolean=false;
  //index0:number=1;
  @Output() ev=new EventEmitter();

  handleClick(index:number) {
    this.ev.emit(index);
  }
  
  
  Increment() {
    if(this.pagingArr[this.pagingArr.length-1]==this.totalPages) {
          this.enabledLeft=false;
          this.enabledRight=true;
        }
    for (let i = 0; i < this.pagingArr.length; i++) {
      if(this.pagingArr[this.pagingArr.length-1]<this.totalPages) {
        this.pagingArr[i]++;
      }
      
    }
    
    
  }
  
  Decrement() {
    if(this.pagingArr[0]==1) {
      this.enabledLeft=true;
      this.enabledRight=false;
    }
    else {
      for (let i = 0; i < this.pagingArr.length; i++) {
        this.pagingArr[i]--;
      
       }
    }
    
    
   
  }
  //[1,2,3]
  //up =1  => [2,3,4]  => up=2 => [3,4,5]
  //down=1 => [1,2,3]
  
 

}
