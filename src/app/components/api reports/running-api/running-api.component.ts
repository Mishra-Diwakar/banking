import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-running-api',
  templateUrl: './running-api.component.html',
  styleUrls: ['./running-api.component.css']
})
export class RunningApiComponent implements OnInit{
  constructor(private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back(); }
}
