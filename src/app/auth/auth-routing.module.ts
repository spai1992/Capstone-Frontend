import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LawyersComponent } from '../lawyer/lawyers/lawyers.component'; // Modifica il percorso secondo la tua struttura delle cartelle

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'lawyers', component: LawyersComponent },
  { path: '**', redirectTo: 'lawyers' }, // Reindirizzamento predefinito a "lawyers"
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
