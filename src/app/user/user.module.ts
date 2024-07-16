import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './user.service';

const routes: Routes = [{ path: 'profile', component: UserProfileComponent }];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [UserService],
})
export class UserModule {}
