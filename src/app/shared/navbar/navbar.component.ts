import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/authservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @ViewChild('loginModal') loginModal: any;
  @ViewChild('registerModal') registerModal: any;

  constructor(
    public authService: AuthService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  openLoginModal(): void {
    this.modalService.open(this.loginModal);
  }

  openRegisterModal(): void {
    this.modalService.open(this.registerModal);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
