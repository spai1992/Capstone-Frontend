// src/app/lawyer/lawyer.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Assicurati di importare FormsModule
import { RouterModule, Routes } from '@angular/router';
import { LawyersComponent } from './lawyers/lawyers.component';
import { LawyerDetailsComponent } from './lawyer-details/lawyer-details.component';

const routes: Routes = [
  { path: '', component: LawyersComponent },
  { path: 'profile/:id', component: LawyerDetailsComponent },
];

@NgModule({
  declarations: [LawyersComponent, LawyerDetailsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)], // Aggiungi FormsModule qui
})
export class LawyerModule {}
