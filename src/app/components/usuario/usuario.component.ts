import { Component, OnInit } from '@angular/core';
import {  FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Route, Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../services/auth/auth-service.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports:
    [
      FormsModule,
      CommonModule,
      RouterLink,

    ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.router.navigate(["/home"])
    }
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token)
      this.router.navigate(['/home'])
    });
  }
}

