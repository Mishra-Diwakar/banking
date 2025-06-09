import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit{
  constructor(private router:Router, private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back(); }
}
