import { Component } from '@angular/core';
import { AuthService } from '../authservice.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

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
    specialization: '',
    description: '',
    address: '',
    phone: '',
    profilePicture: '',
    roles: new Set<string>(),
  };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.user.role === 'user') {
      this.user.roles = new Set<string>(['ROLE_USER']);
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
      this.user.roles = new Set<string>(['ROLE_LAWYER']);
      this.authService.registerLawyer(this.user).subscribe(
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
