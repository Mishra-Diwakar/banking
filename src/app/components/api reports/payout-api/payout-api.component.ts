import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payout-api',
  templateUrl: './payout-api.component.html',
  styleUrls: ['./payout-api.component.css']
})
export class PayoutApiComponent implements OnInit{
  constructor(private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back(); }
}
