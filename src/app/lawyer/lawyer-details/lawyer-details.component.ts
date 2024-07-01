import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LawyerService } from '../lawyer.service';
import { LawyerResponse } from '../../models/lawyer-response';
import { AppointmentService } from '../../appointment/appointment.service';
import { AuthService } from '../../auth/authservice.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lawyer-details',
  templateUrl: './lawyer-details.component.html',
  styleUrls: ['./lawyer-details.component.scss'],
})
export class LawyerDetailsComponent implements OnInit {
  lawyer: LawyerResponse | null = null;
  showModal: boolean = false;
  appointmentDate: string = '';
  appointmentTime: string = '';
  appointmentDescription: string = '';
  closeResult: string = '';
  availableTimes: string[] = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ];

  constructor(
    private route: ActivatedRoute,
    private lawyerService: LawyerService,
    private appointmentService: AppointmentService,
    private authService: AuthService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    const lawyerId = this.route.snapshot.paramMap.get('id');
    if (lawyerId) {
      this.lawyerService.getLawyerById(+lawyerId).subscribe({
        next: (lawyer) => (this.lawyer = lawyer),
        error: (err) => console.error('Failed to load lawyer details', err),
      });
    }
  }

  openAppointmentModal(content: TemplateRef<any>): void {
    console.log('Opening appointment modal');
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.showModal = true;
          console.log('showModal:', this.showModal);
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          this.showModal = false;
          console.log('showModal:', this.showModal);
        }
      );
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

  closeModal(): void {
    console.log('Closing appointment modal');
    this.showModal = false;
    console.log('showModal:', this.showModal);
  }

  bookAppointment(modal: any): void {
    const currentUser = this.authService.getUser();
    if (this.lawyer && currentUser && currentUser.id) {
      const appointmentRequest = {
        userId: currentUser.id,
        lawyerId: this.lawyer.id,
        appointmentDate: `${this.appointmentDate}T${this.appointmentTime}:00`,
        description: this.appointmentDescription,
      };

      this.appointmentService.bookAppointment(appointmentRequest).subscribe({
        next: () => {
          console.log('Appointment booked successfully');
          modal.close();
          this.closeModal();
        },
        error: (err) => console.error('Failed to book appointment', err),
      });
    }
  }
}
