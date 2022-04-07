import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  signIn : boolean;
  role : string | null;
  userName! : string | null;
  constructor(private navbarService : NavbarService, private router : Router) { 
    if (!!localStorage.getItem('token')) this.signIn = false//"Sign Out"
    else {
      this.signIn = true//"Sign in"
    }
    this.role = localStorage.getItem('role');
  }

  ngOnInit(): void {
    this.getMessage();
    if ( localStorage.getItem('username')) this.userName =  localStorage.getItem('username');
  }


  signInOut(){
   if (!!localStorage.getItem('token')){
      localStorage.clear();
      this.signIn = true;//"Sign in";
      this.role = null;
    }
  }

  getMessage(){
    this.navbarService.getMessage().subscribe(message => {this.signIn =false;//"welcome "+localStorage.getItem('username') + " | Sign out";
                                                          this.userName =  localStorage.getItem('username');
                                                          this.role = localStorage.getItem('role')});
  }

  goto(){
    if (this.role === "admin") this.router.navigate(['dashboard']);
    if (this.role === "dev") this.router.navigate(['dashboard-dev']);
    if (this.role === "user") this.router.navigate(['dashboard-user']);
  }
}
