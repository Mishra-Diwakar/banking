import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chargeback-report',
  templateUrl: './chargeback-report.component.html',
  styleUrls: ['./chargeback-report.component.css']
})
export class ChargebackReportComponent  implements OnInit{
  constructor(private router:Router, private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back(); }
}
