import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoServiceService {

  private apiUrl = '/carrinho/adicionarAoCarrinho'; // Corrigido o endpoint

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  adicionarCarrinho(id: string): Observable<string> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<string>(`${this.apiUrl}/${id}`, {}, { headers });
  }

  verCarrinho(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ver`);
  }

  finalizarCompra(): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/finalizar`, {});
  }



  getDados(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(this.apiUrl, { headers });

  }
}
