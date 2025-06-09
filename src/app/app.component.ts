import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NavigationStart, Router,NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Banking';
   isLogin: boolean = false;
   allowedRoutes: string[] = [
    "/dashboard","/users","/users/create","/users/update","/users/fund","/users/action", "/users/profile", "/users/password","/users/tpin",
    "/banks","/banks/add","/banks/update","/services/payin","/services/payout","/services/chargeback","/services/invoice","/reports/payin",
    "/reports/payout","/reports/chargeback","/reports/intent","/reports/ledger","/reports/profit" ,"/reports/api/all","/reports/api/payin",
    "/reports/api/payout","/reports/api/running","/sheets", "/docs/token","/docs/payin","/docs/payout","/docs/balance"
  ];
  constructor(private router: Router, public authService: AuthService, private viewportScroller: ViewportScroller ) {

    // Set isLogin on route start
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLogin = this.allowedRoutes.includes(event.url);
        // console.log(this.isLogin)
      }
      // console.log(event)
    });

  }
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Scroll to top
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
