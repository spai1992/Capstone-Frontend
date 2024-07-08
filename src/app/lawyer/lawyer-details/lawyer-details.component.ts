import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { LawyerService } from '../lawyer.service';
import { Lawyer } from '../../models/lawyer';
import { AuthService } from '../../auth/authservice.service';
import {
  NgbModal,
  NgbModalRef,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { AppointmentModalComponent } from '../../shared/appointment-modal/appointment-modal.component';

@Component({
  selector: 'app-lawyer-details',
  templateUrl: './lawyer-details.component.html',
  styleUrls: ['./lawyer-details.component.scss'],
})
export class LawyerDetailsComponent implements OnInit {
  @Input() lawyerId!: number;
  lawyer: Lawyer | null = null;
  closeResult: string = '';
  private modalRef: NgbModalRef | null = null;

  constructor(
    private lawyerService: LawyerService,
    public authService: AuthService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadLawyerDetails();
  }

  loadLawyerDetails(): void {
    this.lawyerService.getLawyerById(this.lawyerId).subscribe({
      next: (lawyer) => (this.lawyer = lawyer),
      error: (err) => console.error('Failed to load lawyer details', err),
    });
  }

  openAppointmentModal(): void {
    if (this.modalRef) {
      this.modalRef.close();
    }
    this.modalRef = this.modalService.open(AppointmentModalComponent, {
      ariaLabelledBy: 'modal-basic-title',
    });
    this.modalRef.componentInstance.lawyer = this.lawyer;

    this.modalRef.componentInstance.closeModalEvent.subscribe(() => {
      this.modalRef?.close();
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
