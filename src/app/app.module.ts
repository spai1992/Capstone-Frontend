import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthModule } from './auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { LawyerDetailsComponent } from './lawyer/lawyer-details/lawyer-details.component';
import { AppointmentService } from './appointment/appointment.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    LandingPageComponent,
    NavbarComponent,
    LawyerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
