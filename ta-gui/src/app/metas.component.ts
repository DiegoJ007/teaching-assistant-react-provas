import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'metas',
  standalone: false,
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) {}

  atualizarAluno(aluno: Aluno): void {
    this.alunoService.atualizar(aluno);
  }

  ngOnInit(): void {
    this.alunos = this.alunoService.getAlunos();
  }
}
