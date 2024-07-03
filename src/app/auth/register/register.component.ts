import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../authservice.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { Lawyer } from '../../models/lawyer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @Output() closeModal = new EventEmitter<void>();

  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user',
    roles: [],
  };

  lawyer: Lawyer = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'lawyer',
    roles: [],
    specialization: '',
    description: '',
    city: '',
    address: '',
    phone: '',
    profilePicture: '',
  };

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    if (this.user.role === 'user') {
      this.authService.registerUser(this.user).subscribe(
        () => {
          this.router.navigate(['/login']);
          this.closeModal.emit();
        },
        (error) => {
          this.errorMessage = 'Registration failed. Please try again.';
          console.error(error);
        }
      );
    } else {
      // Copia i campi dall'utente al lawyer
      this.lawyer.firstName = this.user.firstName;
      this.lawyer.lastName = this.user.lastName;
      this.lawyer.email = this.user.email;
      this.lawyer.password = this.user.password;
      this.lawyer.roles = this.user.roles;

      this.authService.registerLawyer(this.lawyer).subscribe(
        () => {
          this.router.navigate(['/login']);
          this.closeModal.emit();
        },
        (error) => {
          this.errorMessage = 'Registration failed. Please try again.';
          console.error(error);
        }
      );
    }
  }
}
