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
  title = 'ta-gui';
  aluno: Aluno = new Aluno();
  alunos: Aluno[] = [];
  alunoService = new AlunoService();

  gravar(a: Aluno): void {
    if (this.alunoService.gravar(a)) {
      this.alunos.push(a.clone());
      this.aluno = new Aluno();
    } else {
      this.aluno.cpf = "";
      alert("CPF já cadastrado");
    }
  }
}
