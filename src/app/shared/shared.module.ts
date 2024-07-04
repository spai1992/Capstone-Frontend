import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // Importa NgbActiveModal
import { AuthModule } from '../auth/auth.module';
import { AppointmentModalComponent } from './appointment-modal/appointment-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, AppointmentModalComponent],
  imports: [CommonModule, RouterModule, NgbModule, AuthModule, FormsModule],
  exports: [NavbarComponent, AppointmentModalComponent],
  providers: [NgbActiveModal], // Aggiungi NgbActiveModal ai provider
})
export class SharedModule {}
