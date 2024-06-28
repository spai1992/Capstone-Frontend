import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component'; // Importa il componente Navbar
import { AuthModule } from './auth/auth.module'; // Importa AuthModule

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,

    LandingPageComponent,
    NavbarComponent, // Dichiarazione del componente Navbar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    AuthModule, // Aggiungi AuthModule qui
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
