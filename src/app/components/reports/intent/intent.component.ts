import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intent',
  templateUrl: './intent.component.html',
  styleUrls: ['./intent.component.css']
})
export class IntentComponent  implements OnInit{
  constructor(private router:Router, private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back(); }
}
