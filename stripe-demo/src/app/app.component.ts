import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coupons ;
 constructor(private api: ApiService) {
   debugger
   this.api.helloWorld();
   //this.api.postCoupons();
 }
}
