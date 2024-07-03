import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { RouterModule } from '@angular/router';

import { AuthService } from './authservice.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuard } from './auth.guard';
import { GuestGuard } from './guest.guard';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule, // Aggiungi FormsModule qui
    RouterModule,
    AuthRoutingModule,
  ],
  providers: [AuthService, AuthGuard, GuestGuard],
  exports: [LoginComponent, RegisterComponent], // Esporta i componenti qui
})
export class AuthModule {}
