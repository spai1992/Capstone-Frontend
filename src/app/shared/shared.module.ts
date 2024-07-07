import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from '../auth/auth.module';
import { AppointmentModalComponent } from './appointment-modal/appointment-modal.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, AppointmentModalComponent, FooterComponent],
  imports: [CommonModule, RouterModule, NgbModule, AuthModule, FormsModule],
  exports: [NavbarComponent, AppointmentModalComponent, FooterComponent],
  providers: [NgbActiveModal],
})
export class SharedModule {}
