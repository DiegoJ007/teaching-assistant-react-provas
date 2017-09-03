import { Component } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'ta-gui';
  aluno: Aluno = new Aluno();
  alunos: Aluno[] = [];
  alunoService = new AlunoService();

  gravar(a: Aluno): void {
    if (this.alunoService.gravar(a)) {
      this.alunos.push(a.clone());
      this.aluno = new Aluno();
    }
=======
   aluno: Aluno = {nome: "", cpf: "", email: ""};
   alunoService = new AlunoService();
   alunos: Aluno[] = [];

   gravar(a: Aluno): void {
     this.alunoService.gravar(a);
     this.alunos.push(a);
     this.aluno = {nome: "", cpf: "", email: ""};
>>>>>>> fd52d3e (visualizacao da lista de alunos cadastrados)
  }
}
