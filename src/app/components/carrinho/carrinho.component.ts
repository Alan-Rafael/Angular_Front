import { Component, OnInit } from '@angular/core';
import { CarrinhoServiceService } from '../../services/carrinho/carrinho-service.service';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServiceService } from '../../services/auth/auth-service.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgFor
  ],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent  {
  dados: any;

  constructor(private carrinhoService: CarrinhoServiceService) {}

  ngOnInit(): void {
    this.carrinhoService.getDados().subscribe(
      data => {
        this.dados = data;
        console.log(this.dados);
      },
      error => {
        console.error('Erro ao buscar dados', error);
      }
    );
  }
}
