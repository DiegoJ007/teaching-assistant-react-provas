import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "Diego Refatoração", cpf: "12345678900", email: "dr@cin.ufpe.br", github: ""};
}

export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  github: string;
}
