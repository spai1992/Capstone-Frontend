// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
