import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Custom {
  
  constructor( private http:HttpClient){  }
  getApi(){
    return this.http.get("http://jsonplaceholder.typicode.com/posts/1")
  }
  checkLocal(){
  return localStorage.getItem("user");
}

}
