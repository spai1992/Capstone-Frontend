import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Lawyer } from '../models/lawyer';
import { AuthService } from '../auth/authservice.service';

@Injectable({
  providedIn: 'root',
})
export class LawyerService {
  private apiUrl = `${environment.apiUrl}/lawyers`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getLawyerById(id: number): Observable<Lawyer> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });
    return this.http.get<Lawyer>(`${this.apiUrl}/${id}`, { headers });
  }

  updateLawyer(lawyer: Lawyer): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
      'Content-Type': 'application/json',
    });
    return this.http.put(`${this.apiUrl}/${lawyer.id}`, lawyer, { headers });
  }

  searchLawyers(keyword: string, city: string): Observable<Lawyer[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });
    return this.http.get<Lawyer[]>(
      `${this.apiUrl}/search?keyword=${keyword}&city=${city}`,
      { headers }
    );
  }
}
