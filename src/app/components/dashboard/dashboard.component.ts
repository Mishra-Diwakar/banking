import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
declare function callchart(data1:any,data2:any,data3:any,data4:any) :any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  userType="api";
  constructor(private location:Location){}
  ngOnInit(): void {
    
    this.loadCharts();
  }
  loadCharts(){
    callchart(10,20,30,40);
  }
}
