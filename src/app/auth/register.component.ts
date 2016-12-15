import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  email: string = "";
  password: string= "";

  error: Boolean = false;
  errorMessage = "";
  submit(form) {
    this.error = false;
    this.authService.register(this.email, this.password).
        subscribe(data => {
          if (data.token.length > 0){
            this.router.navigateByUrl('/dashboard')
          }
        }, errorMsg => {
          this.error = true;
          this.errorMessage = errorMsg;
        });
  }
}
