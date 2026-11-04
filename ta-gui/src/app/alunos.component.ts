import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'alunos',
  standalone: false,
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  aluno: Aluno = new Aluno();
  alunos: Aluno[] = [];
  cpfduplicado: boolean = false;

  constructor(private alunoService: AlunoService) {}

  criarAluno(a: Aluno): void {
    if (this.alunoService.gravar(a)) {
      this.alunos.push(a);
      this.aluno = new Aluno();
    } else {
      this.cpfduplicado = true;
    }
  }

  onMove(): void {
    this.cpfduplicado = false;
  }

  ngOnInit(): void {
    this.alunos = this.alunoService.getAlunos();
  }
}
