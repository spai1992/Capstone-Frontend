import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-appointment',
  templateUrl: './confirm-appointment.component.html',
  styleUrls: ['./confirm-appointment.component.scss'],
})
export class ConfirmAppointmentComponent implements OnInit {
  message: string = 'Processing your request...';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('ConfirmAppointmentComponent loaded');

    const token = this.route.snapshot.queryParamMap.get('token');
    if (token) {
      this.http
        .get(`/api/appointments/confirmed-appointment?token=${token}`, {
          responseType: 'text',
        })
        .subscribe({
          next: (response) => {
            console.log('Response from backend:', response);
            this.message =
              'Il tuo appuntamento è stato confermato con successo!';
            setTimeout(() => {
              this.router.navigate(['/profile']);
            }, 3000); // Attende 3 secondi prima di reindirizzare
          },
          error: (error: HttpErrorResponse) => {
            console.error('Error from backend:', error);
            this.message =
              'Abbiamo riscontrato un problema con la conferma del tuo appuntamento, perfavore prova nuovamente!';
          },
        });
    } else {
      this.message = 'Invalid confirmation link.';
    }
  }
}
