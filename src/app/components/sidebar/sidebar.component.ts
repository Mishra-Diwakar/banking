import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit, OnInit{
 userType:string="";
  isMiniSidebar: boolean = false;


  constructor(private router:Router){}
  ngOnInit(): void {
   this.userType = String(sessionStorage.getItem("userType"));
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
  goToBanks(){ this.router.navigateByUrl("/banks"); }
  activeMenu: string | null = null;

  toggleMenu(menuName: string): void {
    this.activeMenu = this.activeMenu === menuName ? null : menuName;
  }

  isMenuActive(menuName: string): boolean {
    return this.activeMenu === menuName;
  }
  ngAfterViewInit() {
    $('#sidebar-menu').slimScroll({
      height: '100%',  // Set the height of the scrollable area
      size: '5px',     // Adjust the scrollbar width
      color: '#eeeeee',   // Customize scrollbar color
      railColor: '#fff',
      railOpacity: 0.5,
    });
  }
}
