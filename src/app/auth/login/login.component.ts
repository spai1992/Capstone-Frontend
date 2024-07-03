import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../authservice.service';
import { Router } from '@angular/router';
import { LoginData } from '../../models/login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() closeModal = new EventEmitter<void>();

  loginData: LoginData = { email: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        // Assume the response contains the JWT token and user details
        this.authService.setToken(response.token);
        localStorage.setItem('user', JSON.stringify(response.user)); // Salva l'utente nel localStorage
        this.router.navigate(['/dashboard']);
        this.closeModal.emit();
      },
      (error) => {
        this.errorMessage = 'Invalid credentials';
      }
    );
  }
}
