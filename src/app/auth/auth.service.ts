import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  isLoggedIn() {
    return (localStorage.getItem("username"));
  }
  private Username = "";
  private Password = "";

  register(username: string, password: string) {
    this.Username = username;
    this.Password = username;
    localStorage.setItem("username", username);
    this.router.navigateByUrl('/dashboard');
  }

  logout(){
    localStorage.removeItem("username");
  }

  login(username: string, password: string) {
    if (username.toLowerCase() == this.Username.toLowerCase() && password.toLowerCase() == this.Password.toLowerCase()) {
      localStorage.setItem("username", username);
      this.router.navigateByUrl('/dashboard');
    } 
  }

  username() {
    if (localStorage.getItem("username")){
      return localStorage.getItem("username");
    }
    return "";
  }

  constructor(private router: Router) { }
}
