import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiDomain = 'https://polar-shelf-99697.herokuapp.com/';
  //apiDomain = 'http://localhost:8080';

  helloWorld() {
    try {
      return this.http.get(`${this.apiDomain}/`).toPromise();
    } catch {
      throw Error;
    }
  }

  postCoupons(percent_off, duration, duration_in_months ) {
    try {
      return this.http.post(`${this.apiDomain}/coupons`, {percent_off, duration, duration_in_months}).toPromise();
    } catch {
      throw Error;
    }
  }

  getCoupons() {
    try {
      return this.http.get(`${this.apiDomain}/coupons`).toPromise();
    } catch {
      throw Error;
    }
  }
}
