import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../user.service';
import { AuthService } from '../../auth/authservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: User;
  errorMessage: string = '';
  selectedFile: File | null = null;

  @ViewChild('editModal') editModal: any;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private modalService: NgbModal
  ) {
    this.user = this.authService.getUser()!;
  }

  ngOnInit(): void {}

  openEditModal(): void {
    this.modalService.open(this.editModal);
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  updateProfile(): void {
    if (this.selectedFile) {
      this.userService.uploadProfilePicture(this.selectedFile).subscribe({
        next: (response) => {
          this.user.profilePicture = response.url; // Assuming response contains the URL
          this.saveUserProfile();
        },
        error: (err) => {
          console.error('Failed to upload profile picture', err);
          this.errorMessage =
            'Failed to upload profile picture. Please try again.';
        },
      });
    } else {
      this.saveUserProfile();
    }
  }

  saveUserProfile(): void {
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
