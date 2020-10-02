import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { NotyService } from 'src/app/services/noty.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  formGroup;
  percentage = 0;
  duration = 'repeating';
  months = 0;
  name = '';

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private state: StateService,
    private noty: NotyService
  ) {
    this.formGroup = this.formBuilder.group({
      name: '',
      percentageOff: 0,
      duration: 'repeating',
      duration_in_months: 0
    });
  }

  ngOnInit() { }

  onSubmit() {
    this.name = this.formGroup.value.name;
    this.percentage = this.formGroup.value.percentageOff;
    this.duration  = this.formGroup.value.duration;
    this.months = this.formGroup.value.duration_in_months;
    this.api.postCoupons(
      this.name, this.percentage, this.duration, this.months
      )
      .then(res => {
        this.state.getCoupons();
       // this.noty.showSuccess("Coupon Added Successfully", "Create Coupon");
      })
      .catch(e => {
       // this.noty.showError("Create Coupon Failed","Create Coupon");
      });

    console.log("Form Submitted!");
    this.formGroup.reset();

  }



}
