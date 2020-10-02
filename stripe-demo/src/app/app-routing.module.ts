import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent} from './components/signup/signup.component';
import { HomeComponent} from './components/home/home.component';
import { AuthGaurdService} from './services/auth-gaurd.service';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  },
  {
    path: 'login',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent,

  },
  {
    path: '**',
    redirectTo: ''

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
