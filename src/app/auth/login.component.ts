import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) { }

  username: string = "";
  password: string = "";
  ngOnInit() { }

  submit(form) {
    this.authService.login(this.username, this.password);
  }
}
