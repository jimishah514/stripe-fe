import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formGroup;
  constructor(private state: StateService,
              private router: Router,
              private formBuilder: FormBuilder) {
                this.formGroup = this.formBuilder.group({
                  username: ['', Validators.required],
                  password: ['', Validators.required],
                });
               }

  ngOnInit() {
  }

  login() {
    this.state.loggedIn = true;
    if  (this.formGroup.valid) {
      this.router.navigateByUrl('/home');
    }

  }

}
