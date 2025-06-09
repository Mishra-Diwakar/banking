import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-api',
  templateUrl: './all-api.component.html',
  styleUrls: ['./all-api.component.css']
})
export class AllApiComponent implements OnInit{
  constructor(private router:Router, private location:Location){ }
  ngOnInit(): void {
    
  }
  back(){ this.location.back(); }
}
