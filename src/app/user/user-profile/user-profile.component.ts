import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../auth/authservice.service';
import { AppointmentService } from '../../appointment/appointment.service';
import { UserService } from '../user.service';
import { Appointment } from '../../models/appointment';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: User;
  appointments: Appointment[] = [];
  errorMessage: string = '';
  selectedFile: File | null = null;

  @ViewChild('editModal') editModal: any;

  constructor(
    private authService: AuthService,
    private appointmentService: AppointmentService,
    private userService: UserService,
    private modalService: NgbModal
  ) {
    this.user = this.authService.getUser() as User;
  }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAppointmentsByUser(this.user.id!).subscribe({
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

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.updateProfilePicture();
  }

  updateProfilePicture(): void {
    if (this.selectedFile) {
      this.userService.uploadProfilePicture(this.selectedFile).subscribe({
        next: (response) => {
          this.user.profilePicture = response.url;
          this.authService.setUser(this.user); // Save the updated user profile with the new image URL
        },
        error: (err) => {
          console.error('Failed to upload profile picture', err);
          this.errorMessage =
            'Failed to upload profile picture. Please try again.';
        },
      });
    }
  }

  updateProfile(): void {
    this.userService.updateUser(this.user).subscribe({
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
