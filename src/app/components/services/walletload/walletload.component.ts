import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walletload',
  templateUrl: './walletload.component.html',
  styleUrls: ['./walletload.component.css']
})
export class WalletloadComponent implements OnInit{
  constructor(private router:Router,private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back(); }
}
