import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/authservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Lawyer } from '../../models/lawyer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('loginModal') loginModal: any;
  @ViewChild('registerModal') registerModal: any;
  profileLink: string = '/profile';

  constructor(
    public authService: AuthService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.updateProfileLink();
  }

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

  navigateToProfile(): void {
    this.updateProfileLink();
    console.log('Navigating to:', this.profileLink); // Debugging statement
    this.router.navigate([this.profileLink]);
  }

  private updateProfileLink(): void {
    const user = this.authService.getUser();
    if (user && (user as Lawyer).specialization) {
      this.profileLink = '/lawyer-profile';
    } else {
      this.profileLink = '/profile';
    }
    console.log('Profile link updated to:', this.profileLink); // Debugging statement
  }
}
