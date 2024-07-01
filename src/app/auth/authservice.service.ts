import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { LoginData } from '../models/login-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/signup/user`, user);
  }

  registerLawyer(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/signup/lawyer`, user);
  }

  login(loginData: LoginData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/signin`, loginData);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User | null {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      return JSON.parse(userJson) as User;
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn();
  }
}
