import { Component, OnInit, ViewChild } from '@angular/core';
import { Lawyer } from '../../models/lawyer';
import { LawyerService } from '../lawyer.service';
import { AuthService } from '../../auth/authservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentService } from '../../appointment/appointment.service';
import { Appointment } from '../../models/appointment';

@Component({
  selector: 'app-lawyer-profile',
  templateUrl: './lawyer-profile.component.html',
  styleUrls: ['./lawyer-profile.component.scss'],
})
export class LawyerProfileComponent implements OnInit {
  lawyer: Lawyer;
  errorMessage: string = '';
  appointments: Appointment[] = [];

  @ViewChild('editModal') editModal: any;

  constructor(
    private lawyerService: LawyerService,
    private authService: AuthService,
    private modalService: NgbModal,
    private appointmentService: AppointmentService
  ) {
    this.lawyer = this.authService.getLawyer() as Lawyer;
  }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAppointmentsByLawyer(this.lawyer.id!).subscribe({
      next: (appointments) => {
        this.appointments = appointments;
      },
      error: (err) => {
        console.error('Failed to load appointments', err);
      },
    });
  }

  openEditModal(): void {
    this.modalService.open(this.editModal);
  }

  updateProfile(): void {
    this.lawyerService.updateLawyer(this.lawyer).subscribe({
      next: () => {
        console.log('Profile updated successfully');
        this.modalService.dismissAll();
      },
      error: (err) => {
        console.error('Failed to update profile', err);
        this.errorMessage = 'Failed to update profile. Please try again.';
      },
    });
  }
}
