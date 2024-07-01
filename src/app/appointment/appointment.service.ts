import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/authservice.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private apiUrl = `${environment.apiUrl}/appointments`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  bookAppointment(appointmentRequest: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, appointmentRequest, { headers });
  }
}
