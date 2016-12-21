import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { AuthHttp, tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  private apiUrl: string = "http://localhost:3000/api";

  private extractData(res: Response) {
      let body = res.json();
      let jwtHelper: JwtHelper = new JwtHelper();
      console.log (body);
      if (body.token && body.token.length > 0){
        localStorage.setItem('token', body.token);
        console.log(jwtHelper.decodeToken(body.token));
        if (body.email && body.email.length > 0){
          localStorage.setItem('username', body.email);
        }
      }
      return {
          token: body.token || ""
       };
    }

private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      if (body != ''){
        errMsg = body.message;
      } else {
        errMsg = body;
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  constructor(private router: Router, private http: Http, private authHttp: AuthHttp) { }

  isLoggedIn() {
    if (localStorage.getItem("token")){
      return !tokenNotExpired(localStorage.getItem("token"));
    }
    return false;
  }
  private Email = "";
  private Password = "";

  register(email: string, password: string) {
    this.Email = email;
    this.Password = email;
    let user = {
      email: email,
      password: password
    }
    return this.http.post(this.apiUrl + "/register", user).map(this.extractData).catch(this.handleError);

    
  }

  logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  }

  login(email: string, password: string) {
   let user = {
      email: email,
      password: password
    }
    return this.http.post(this.apiUrl + "/authenticate", user).map(this.extractData).catch(this.handleError);
  }

  username() {
    if (localStorage.getItem("username")){
      return localStorage.getItem("username");
    }
    return "";
  }


}
