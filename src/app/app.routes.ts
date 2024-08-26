import { Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FiguresComponent } from './components/figures/figures.component';
import { PrincipalComponent } from './principal/principal.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [

  { path: 'login', component:  UsuarioComponent},
  { path: 'cadastroDeUsuario', component: PrincipalComponent },
  { path: 'carrinho', component: CarrinhoComponent, canActivate: [authGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  {
    path:'',
      component: FiguresComponent,
        children:[
          { path: 'home', component: FiguresComponent, canActivate: [authGuard] },
        ]
  }
];

