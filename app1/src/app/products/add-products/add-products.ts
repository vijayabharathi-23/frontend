import { Component } from '@angular/core';
import { Custom } from '../../custom';

@Component({
  selector: 'app-add-products',
  standalone: false,
  templateUrl: './add-products.html',
  styleUrl: './add-products.css'
})
export class AddProducts {
  constructor(private se:Custom){

  }
ngOnInit(){
this.se.getApi().subscribe
}
}
