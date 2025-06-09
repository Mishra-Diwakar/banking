import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.css']
})
export class SheetsComponent implements OnInit{
  constructor(private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back(); }
}
