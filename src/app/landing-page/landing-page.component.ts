import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  @ViewChild('loginModal') loginModal: any;
  @ViewChild('registerModal') registerModal: any;

  constructor(private router: Router, private modalService: NgbModal) {}

  openLoginModal(): void {
    this.modalService.open(this.loginModal);
  }

  openRegisterModal(): void {
    this.modalService.open(this.registerModal);
  }
}
