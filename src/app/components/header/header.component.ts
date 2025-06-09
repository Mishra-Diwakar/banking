import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
declare var $: any;  // Declaring jQuery globally

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
userType:string="";
  constructor( private router:Router,private authService:AuthService){
    this.toggleSidebar();

  }
  ngOnInit(): void {
    this.onHover();
    this.userType = String(sessionStorage.getItem("userType"));
  }
  ngOnDestroy(): void {
    // Clean up event listeners when component is destroyed
    $(document).off('mouseover');
  }
  logout(){
    this.authService.logout();
  }
 
  toggleSidebar(): void {
    // Attach click event listener to #toggle_btn
    $(document).on('click', '#toggle_btn', () => {
      const $body = $('body');
      console.log("toggle click");
      // Toggle the 'mini-sidebar' class on body
      $body.toggleClass('mini-sidebar');
      // Toggle the 'active' class on the toggle button
      $('#toggle_btn').toggleClass('active');
      // Toggle the 'active' class on header-left element
      $('.header-left').toggleClass('active');
      // Update local storage based on the presence of the 'mini-sidebar' class
      localStorage.setItem('screenModeNightTokenState', $body.hasClass('mini-sidebar') ? '' : 'night');
    });
  }
  onHover(): void {
    $(document).on('mouseover', (e: MouseEvent) => {
      e.stopPropagation();

      if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
        const targ = $(e.target).closest('.sidebar, .header-left').length;
        if (targ) {
          $('body').addClass('expand-menu');
          $('.subdrop + ul').slideDown();
        } else {
          $('body').removeClass('expand-menu');
          $('.subdrop + ul').slideUp();
        }
      }
    });
  }
  goToDashboard(){
    if(this.userType=="1"){
      this.router.navigateByUrl("/dashboard");
    }else if(this.userType =="2"){
      this.router.navigateByUrl("/dashboard/hr");
    }else{
      this.router.navigateByUrl("/dashboard/employee");
    }
  }
}
