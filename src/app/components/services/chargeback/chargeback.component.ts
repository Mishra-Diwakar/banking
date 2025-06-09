import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chargeback',
  templateUrl: './chargeback.component.html',
  styleUrls: ['./chargeback.component.css']
})
export class ChargebackComponent implements OnInit{
  constructor(private router:Router, private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back(); }
}
