import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
   title = 'app1';
   formGroup!:FormGroup;
   constructor(private builder:FormBuilder){
    this.formGroup=builder.group({
      name:["",Validators.maxLength(3)],
      email:[""],
      password:[""],
    })
   }
   callForm1(){
    console.log("hii form")
    console.log(this.formGroup)
   }
   getvalue(e:any){
    console.log(e)
   }
}
