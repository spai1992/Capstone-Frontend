import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module'; // Percorso corretto per il modulo condiviso
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Aggiungi il modulo ng-bootstrap
import { LandingPageModule } from './landing-page/landing-page.module'; // Importa il modulo della landing page

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    SharedModule,
    NgbModule, // Aggiungi il modulo ng-bootstrap
    LandingPageModule, // Aggiungi il modulo della landing page
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
