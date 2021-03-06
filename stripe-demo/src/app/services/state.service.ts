import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  coupons;
  loggedIn;
  constructor(private api: ApiService) {
    this.loggedIn = false;
  }

  getCoupons() {
    this.api.getCoupons()
   .then(res => {
    this.coupons = res['data'];
    console.log("coupons: ", this.coupons);
   })
   .catch(e => {
     throw Error("Can't get coupons");

   });
  }
}
