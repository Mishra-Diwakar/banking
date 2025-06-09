import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  constructor(private router:Router) {}

  login() {
    // get login data form session
    this.isLoggedIn = Boolean(sessionStorage.getItem("login"));
  }

  logout() {
    sessionStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
