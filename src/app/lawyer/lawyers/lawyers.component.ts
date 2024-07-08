import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LawyerService } from '../lawyer.service';
import { Lawyer } from '../../models/lawyer';
import { LawyerDetailsComponent } from '../lawyer-details/lawyer-details.component';
import { AppointmentModalComponent } from '../../shared/appointment-modal/appointment-modal.component';

@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.component.html',
  styleUrls: ['./lawyers.component.scss'],
})
export class LawyersComponent implements OnInit {
  searchKeyword: string = '';
  searchCity: string = '';
  lawyers: Lawyer[] = [];

  constructor(
    private lawyerService: LawyerService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.searchLawyers();
  }

  searchLawyers(): void {
    this.lawyerService
      .searchLawyers(this.searchKeyword, this.searchCity)
      .subscribe({
        next: (lawyers: Lawyer[]) => {
          this.lawyers = lawyers;
        },
        error: (err) => {
          console.error('Failed to load lawyers', err);
        },
      });
  }

  viewProfile(lawyerId: number): void {
    const modalRef = this.modalService.open(LawyerDetailsComponent, {
      windowClass: 'custom-modal-class',
      size: 'lg',
    });
    modalRef.componentInstance.lawyerId = lawyerId;
    modalRef.result.then(
      () => {
        // Closed with button click
      },
      () => {
        // Dismissed
      }
    );
  }
}
