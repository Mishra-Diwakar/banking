import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit{
  isHide=false;
  constructor(private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back; }
}
