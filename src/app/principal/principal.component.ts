import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Endereco} from "../modelo/Endereco";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {EnderecoService} from "../services/enderecoService/endereco.service";
import {FormsModule} from "@angular/forms";
import { Usuario } from '../modelo/Usuario';
import { UsuarioService } from '../services/usuarioService/usuario.service';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    NgForOf,
    KeyValuePipe,
    NgIf,
    FormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    RouterLink
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {

  enderecos:Endereco[] = [];
  numero:string = '';
  rua:string = '';
  bairro:string = '';
  cidade:string = '';
  cep: string = '';
  estado: string = '';

  usuario: Usuario = new Usuario();
  endereco: Endereco = new Endereco();
  cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'MACAIBA', 'NATAL',  'Belo Horizonte']; // Exemplo de cidades
  estados: string[] = ['SP', 'RJ', 'MG', 'RN', 'BH', 'PB']; // Exemplo de estados

  constructor(
    private usuarioService: UsuarioService,
    private enderecoService: EnderecoService
  ) { }

  ngOnInit(): void {
    this.enderecoService.getEnderecos().subscribe((dado)=>{
      this.enderecos = dado;
    })  }

  onSubmit(){
    let novoEndereco = {
      numero: this.numero,
      rua: this.rua,
      bairro: this.bairro,
      cidade: this.cidade,
      cep: this.cep,
      estado: this.estado
    }
    this.onSave(novoEndereco);
  }

  onSubmitUserAndEndereco(): void {
    let novoEndereco = {
      numero: this.numero,
      rua: this.rua,
      bairro: this.bairro,
      cidade: this.cidade,
      cep: this.cep,
      estado: this.estado
    };

    this.enderecoService.saveEndereco(novoEndereco).subscribe((enderecoCriado) => {
      this.usuario.endereco = enderecoCriado;

      this.usuarioService.createUsuario(this.usuario).subscribe(() => {
      });
      this.resetForm();
    });
  }

    onSave(endereco:Endereco){
      this.enderecoService.saveEndereco(endereco).subscribe();
    }

  resetForm(): void {
    this.usuario = new Usuario();
    this.endereco = new Endereco();
  }
}


