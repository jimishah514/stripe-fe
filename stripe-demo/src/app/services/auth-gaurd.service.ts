import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { StateService } from './state.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(private router: Router,
              private state: StateService) { }

  CanActivate(): boolean {
    if(!this.state.loggedIn) {
      this.router.navigate['/'];
      return false;
    }
    return true;
  }
}
