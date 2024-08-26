import { Endereco } from "./Endereco";

export class Usuario {
  id?: string = "";
  senha: string = "";
  nome: string = "";
  endereco: Endereco = new Endereco();
}
