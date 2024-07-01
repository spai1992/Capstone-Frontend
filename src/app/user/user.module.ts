import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [{ path: '', component: UserDashboardComponent }];

@NgModule({
  declarations: [UserDashboardComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class UserModule {}
