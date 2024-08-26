import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToggleServiceService } from '../../services/toggleService/toggle-service.service';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthServiceService } from '../../services/auth/auth-service.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, NgIf, RouterLink,MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{


  ngOnInit(): void {
  }

  constructor(private toggleFormService: ToggleServiceService, private router: Router, private authService: AuthServiceService) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isAuthenticate(): boolean {
    return this.authService.isLoggedIn();
  }

  navigateHome(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  toggleForm(): void {
    this.toggleFormService.toggleFormVisibility();
  }

}
