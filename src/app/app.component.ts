import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {PrincipalComponent} from "./principal/principal.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FiguresComponent } from './components/figures/figures.component';
import { HeaderComponent } from './components/header/header.component';
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { FooterComponent } from './components/footer/footer.component';
import { FiguresNotLoginComponent } from './components/figures-not-login/figures-not-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PrincipalComponent,
    FormsModule,
    HttpClientModule,
    FiguresComponent,
    HeaderComponent,
    UsuarioComponent,
    FooterComponent,
    FiguresNotLoginComponent,
    ReactiveFormsModule,
    CarrinhoComponent,
    RouterModule,

],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api';
}
