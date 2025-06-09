import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payout-docs',
  templateUrl: './payout-docs.component.html',
  styleUrls: ['./payout-docs.component.css']
})
export class PayoutDocsComponent implements OnInit{
  constructor(private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back(); }
}
