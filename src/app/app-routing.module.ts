import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { GuestGuard } from './auth/guest.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { LawyerProfileComponent } from './lawyer/lawyer-profile/lawyer-profile.component';
import { LawyersComponent } from './lawyer/lawyers/lawyers.component';
import { ConfirmAppointmentComponent } from './confirm-appointment/confirm-appointment.component'; // Importa il componente qui

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
  {
    path: 'dashboard',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'lawyer-profile',
    component: LawyerProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'lawyer',
    loadChildren: () =>
      import('./lawyer/lawyer.module').then((m) => m.LawyerModule),
  },
  {
    path: 'lawyers',
    component: LawyersComponent,
  },
  {
    path: 'appointments',
    loadChildren: () =>
      import('./appointment/appointment.module').then(
        (m) => m.AppointmentModule
      ),
  },
  { path: 'confirmed-appointment', component: ConfirmAppointmentComponent }, // Aggiungi questa rotta
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
