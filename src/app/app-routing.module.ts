import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { GuestGuard } from './auth/guest.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LawyerDetailsComponent } from './lawyer/lawyer-details/lawyer-details.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'lawyer-profile/:id', component: LawyerDetailsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
