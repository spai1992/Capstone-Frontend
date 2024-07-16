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
        this.authService.setToken(response.token);
        this.authService.setUser(response.user);

        if (this.authService.isLawyer()) {
          this.router.navigate(['/lawyer-profile']);
        } else {
          this.router.navigate(['/lawyers']);
        }
        this.closeModal.emit();
      },
      (error) => {
        this.errorMessage = 'Invalid credentials';
      }
    );
  }
}
