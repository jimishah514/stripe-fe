import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { NotyService } from './services/noty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coupons ;
 constructor(private api: ApiService) {
   this.api.helloWorld();
 }
}
