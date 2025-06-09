import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payout-report',
  templateUrl: './payout-report.component.html',
  styleUrls: ['./payout-report.component.css']
})
export class PayoutReportComponent implements OnInit{
   isRefreshing = false;
  constructor(private router:Router, private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back(); }
  checkStatus(event: Event): void {
    this.isRefreshing = true;

    // Simulate an API call
    setTimeout(() => {
      this.isRefreshing = false;
      alert('Status checked!');
    }, 2000);
    }
  
}
