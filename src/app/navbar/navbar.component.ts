import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
    return false;
  }
  ngOnInit() { }
}
