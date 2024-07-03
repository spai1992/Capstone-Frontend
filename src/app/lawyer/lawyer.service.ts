import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LawyerResponse } from '../models/lawyer-response';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/authservice.service';

@Injectable({
  providedIn: 'root',
})
export class LawyerService {
  private apiUrl = `${environment.apiUrl}/lawyers`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  searchLawyers(keyword?: string, city?: string): Observable<LawyerResponse[]> {
    let params = new HttpParams();
    if (keyword) {
      params = params.set('keyword', keyword);
    }
    if (city) {
      params = params.set('city', city);
    }

    let headers = new HttpHeaders();
    const token = this.authService.getToken();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.get<LawyerResponse[]>(`${this.apiUrl}/search`, {
      params,
      headers,
    });
  }

  getLawyerById(id: number): Observable<LawyerResponse> {
    let headers = new HttpHeaders();
    const token = this.authService.getToken();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.get<LawyerResponse>(`${this.apiUrl}/${id}`, { headers });
  }
}
