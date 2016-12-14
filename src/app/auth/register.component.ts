import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() { }

  username: string = "";
  password: string= "";

  submit(form) {
    console.log(this.username);
    console.log(this.password);
    this.authService.register(this.username, this.password);
  }
}
