import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  constructor(private r:Router){

  }

val="";
arr=[1,2,3,4,5]
type="number"
 
@Input()
title:string|undefined
login(){
  if(this.val==="admin"){
    localStorage.setItem("user","admin");
this.r.navigateByUrl("new")
  }else{
    alert("invalid")
  }
}
@Output()
toparent=new EventEmitter<any>();

callparent(){
  
  this.toparent.emit(this.val);
}

}

