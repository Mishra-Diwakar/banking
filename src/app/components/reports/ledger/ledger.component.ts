import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent  implements OnInit{
  constructor(private router:Router, private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back(); }
}
