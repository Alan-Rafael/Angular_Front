import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  private apiUrl = '/loginMember/auth'

  constructor(private http: HttpClient) {}


  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, { username, password }, { headers })
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');  // Verifica se o token existe no localStorage
  }

  logout(): void {
    localStorage.removeItem('token');  // Remove o token do localStorage ao fazer logout
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
