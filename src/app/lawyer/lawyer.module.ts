import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LawyerDetailsComponent } from './lawyer-details/lawyer-details.component';
import { LawyersComponent } from './lawyers/lawyers.component'; // Importa il nuovo componente

const routes: Routes = [
  { path: 'profile/:id', component: LawyerDetailsComponent },
  { path: '', component: LawyersComponent }, // Aggiungi la rotta per LawyersComponent
];

@NgModule({
  declarations: [LawyerDetailsComponent, LawyersComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class LawyerModule {}
