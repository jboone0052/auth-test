import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DashboardService {

  constructor(private authHttp: AuthHttp) { }

  
  private apiUrl: string = "http://localhost:3000/api";

  getDashboard() {
    console.log("getDashboard");
    return this.authHttp.get(this.apiUrl + '/dashboard').map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
      let body = res;
      console.log (body);
      return body;
    }

private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    console.log(error);
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
}
