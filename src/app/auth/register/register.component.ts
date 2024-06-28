import { Component } from '@angular/core';
import { AuthService } from '../authservice.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { LawyerRequest } from '../../models/lawyer-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user',
    roles: [],
  };

  lawyer: LawyerRequest = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    specialization: '',
    description: '',
    city: '',
    address: '',
    phone: '',
    profilePicture: '',
    roles: [],
    role: 'lawyer', // Imposta il ruolo dell'avvocato
  };

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.user.role === 'user') {
      this.user.roles = ['ROLE_USER'];
      this.authService.registerUser(this.user).subscribe(
        (response) => {
          this.authService.setToken(response.token);
          this.router.navigate(['/login']);
        },
        (error) => {
          this.errorMessage = 'Registration failed';
        }
      );
    } else if (this.user.role === 'lawyer') {
      this.lawyer.roles = ['ROLE_LAWYER'];
      this.authService.registerLawyer(this.lawyer).subscribe(
        (response) => {
          this.authService.setToken(response.token);
          this.router.navigate(['/login']);
        },
        (error) => {
          this.errorMessage = 'Registration failed';
        }
      );
    }
  }
}
