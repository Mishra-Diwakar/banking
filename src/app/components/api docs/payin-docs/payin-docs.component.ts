import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payin-docs',
  templateUrl: './payin-docs.component.html',
  styleUrls: ['./payin-docs.component.css']
})
export class PayinDocsComponent implements OnInit{
  isHide=true;
  constructor(private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back; }
}
