import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LawyersComponent } from './lawyers/lawyers.component';
import { LawyerDetailsComponent } from './lawyer-details/lawyer-details.component';
import { LawyerProfileComponent } from './lawyer-profile/lawyer-profile.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: LawyersComponent },
  { path: 'profile/:id', component: LawyerDetailsComponent },
  { path: 'lawyer-profile', component: LawyerProfileComponent },
];

@NgModule({
  declarations: [
    LawyersComponent,
    LawyerDetailsComponent,
    LawyerProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class LawyerModule {}
