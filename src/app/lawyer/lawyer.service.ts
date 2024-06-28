import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LawyerResponse } from '../models/lawyer-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LawyerService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  searchLawyers(keyword: string, city: string): Observable<LawyerResponse[]> {
    let params = new HttpParams();
    if (keyword) {
      params = params.set('keyword', keyword);
    }
    if (city) {
      params = params.set('city', city);
    }
    return this.http.get<LawyerResponse[]>(`${this.apiUrl}/lawyers/search`, {
      params,
    });
  }

  getLawyerById(id: number): Observable<LawyerResponse> {
    return this.http.get<LawyerResponse>(`${this.apiUrl}/lawyers/${id}`);
  }
}
