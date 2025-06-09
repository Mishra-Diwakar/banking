import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payin-api',
  templateUrl: './payin-api.component.html',
  styleUrls: ['./payin-api.component.css']
})
export class PayinApiComponent implements OnInit{
constructor(private location:Location){}
ngOnInit(): void {
  
}
back(){ this.location.back(); }
}
