import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  email: string = "";
  password: string = "";
  ngOnInit() { }

  error: Boolean = false;
  errorMessage = "";
  submit(form) {
    this.authService.login(this.email, this.password).subscribe(data => {
          if (data.token.length > 0){
            this.router.navigateByUrl('/dashboard')
          }
        }, errorMsg => {
          this.error = true;
          this.errorMessage = errorMsg;
        });
  }
}
