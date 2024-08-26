import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {Endereco} from "../../modelo/Endereco";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private apiUrl = '/enderecos'


  constructor(private http:  HttpClient) {}



  getEnderecos(): Observable<Endereco[]>{
    return this.http.get<Endereco[]>(this.apiUrl).pipe(
      map((response:any) => response.content)
    );
  }
  deleteEnderecos(endereco: Endereco): Observable<Endereco>{
    console.log(endereco.id);
    return this.http.delete<Endereco>(`${this.apiUrl}${endereco.id}`);
  }
  saveEndereco(endereco: Endereco): Observable<Endereco> {
      return this.http.post<Endereco>(`${this.apiUrl}`, endereco);
  }




}
