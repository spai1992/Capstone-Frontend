import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LawyerDetailsComponent } from './lawyer-details/lawyer-details.component';

const routes: Routes = [
  { path: 'profile/:id', component: LawyerDetailsComponent },
];

@NgModule({
  declarations: [LawyerDetailsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class LawyerModule {}
