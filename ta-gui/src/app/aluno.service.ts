import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunoService {
  alunos: Aluno[] = [];

  gravar(aluno: Aluno): Aluno | null {
    var result: Aluno | null = null;
    if (this.cpfNaoCadastrado(aluno.cpf)) {
      this.alunos.push(aluno.clone());
      result = aluno;
    }
    return result;
  }

  cpfNaoCadastrado(cpf: string): boolean {
    return !this.alunos.find(a => a.cpf === cpf);
  }

  atualizar(aluno: Aluno): void {
    aluno = aluno.clone();
    for (let a of this.alunos) {
      if (a.cpf === aluno.cpf) {
        a.copyFrom(aluno);
      }
    }
  }

  getAlunos(): Aluno[] {
    var result: Aluno[] = [];
    for (let a of this.alunos) {
      result.push(a.clone());
    }
    return result;
  }
}
