import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {
  coupons;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getCoupons()
   .then(res => {
    this.coupons = res['data'];
    console.log("coupons: ", this.coupons);
   })
   .catch(e => {
     throw Error("Can't get coupons");

   })
  }


}
