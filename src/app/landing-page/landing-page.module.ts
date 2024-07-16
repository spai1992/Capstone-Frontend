import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { LandingPageRoutingModule } from './landing-page-routing.module'; // Importa il modulo di routing della landing page

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, LandingPageRoutingModule, AuthModule, SharedModule],
})
export class LandingPageModule {}
