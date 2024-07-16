import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../auth/authservice.service';
import { AppointmentService } from '../../appointment/appointment.service';
import { Lawyer } from '../../models/lawyer';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.scss'],
})
export class AppointmentModalComponent {
  @Input() lawyer: Lawyer | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();

  appointmentDate: string = '';
  appointmentTime: string = '';
  appointmentDescription: string = '';
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
  errorMessage: string = '';

  constructor(
    private appointmentService: AppointmentService,
    private authService: AuthService
  ) {}

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  bookAppointment(): void {
    this.errorMessage = '';
    const currentUser = this.authService.getUser();
    if (this.lawyer && currentUser && currentUser.id) {
      const appointmentRequest = {
        userId: currentUser.id,
        lawyerId: this.lawyer.id!,
        appointmentDate: `${this.appointmentDate}T${this.appointmentTime}:00`,
        description: this.appointmentDescription,
      };

      this.appointmentService.bookAppointment(appointmentRequest).subscribe({
        next: () => {
          console.log('Appointment booked successfully');
          this.closeModal();
        },
        error: (err) => {
          console.error('Failed to book appointment', err);
          this.errorMessage = err.error
            ? err.error
            : 'An error occurred while booking the appointment.';
        },
      });
    }
  }
}
