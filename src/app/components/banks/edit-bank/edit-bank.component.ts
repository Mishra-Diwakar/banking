import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-bank',
  templateUrl: './edit-bank.component.html',
  styleUrls: ['./edit-bank.component.css']
})
export class EditBankComponent implements OnInit{
  constructor(private router:Router, private location:Location){}
  ngOnInit(): void {
    
  }
  back(){ this.location.back(); }
}
