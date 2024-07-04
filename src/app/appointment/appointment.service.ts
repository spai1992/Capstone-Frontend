// src/app/appointment/appointment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/authservice.service';
import { Appointment } from '../models/appointment';

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

  getAppointmentsByUser(userId: number): Observable<Appointment[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    return this.http.get<Appointment[]>(`${this.apiUrl}/user/${userId}`, {
      headers,
    });
  }

  getAppointmentsByLawyer(lawyerId: number): Observable<Appointment[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    return this.http.get<Appointment[]>(`${this.apiUrl}/lawyer/${lawyerId}`, {
      headers,
    });
  }
}
