import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  @ViewChild('loginModal') loginModal: any;
  @ViewChild('registerModal') registerModal: any;

  constructor(private modalService: NgbModal) {}

  openLoginModal(): void {
    this.modalService.open(this.loginModal);
  }

  openRegisterModal(): void {
    this.modalService.open(this.registerModal);
  }

  closeModal(): void {
    this.modalService.dismissAll();
  }
}
