import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators'
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { map } from 'rxjs/operators'  //just for testing of postUser()method

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private httpClient: HttpClient) { }
  // userData:any=[];
  payinInvoiceData:any=[];
  auth_token = sessionStorage.getItem("token");
  responseSuccessMessage = new Array();
  responseErrorMessage = new Array();
  skuIdd = new Subject<any>();
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  });
  options = { headers: this.headers };

 getPayinInvoiceData(){
  return this.payinInvoiceData;
 }
 setPayinInvoiceData(data:any){this.payinInvoiceData=data;}

  
};
