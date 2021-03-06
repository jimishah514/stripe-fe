import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {
  loading = true;
  constructor(private api: ApiService,public state: StateService) { }

  ngOnInit() {
    this.state.getCoupons();
    this.loading = false;
  }

  deleteCoupon(id) {
    this.api.deleteCoupon(id)
    .then(res => {
      this.state.getCoupons();
    });
  }



}
