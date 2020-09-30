import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {
  ngOnInit() {

  }
  formGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
  ) {
    this.formGroup = this.formBuilder.group({
      percentageOff: '',
      duration: 'repeating',
      duration_in_months: ''
    });
  }

  onSubmit() {
    debugger
    const per = this.formGroup.value.percentageOff;
    const dur = this.formGroup.value.duration;
    const months = this.formGroup.value.duration_in_months;
    this.api.postCoupons(
      per, dur, months
      );
  }



}
