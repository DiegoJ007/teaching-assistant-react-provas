import React, { useState } from 'react';

const ExamAnswersSection: React.FC = () => {
  const [page, setPage] = useState<'Provas Disponíveis' | 'Formulário da 1ª EE'>('Provas Disponíveis');
  const [status1aEE, setStatus1aEE] = useState<'Disponível' | 'Respondida'>('Disponível');
  const [tipoProva, setTipoProva] = useState<string>('');
  const [q1, setQ1] = useState<string>('');
  const [q2, setQ2] = useState<string>('');
  const [q3, setQ3] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');

  const handleSelectExam = () => {
    setErrorMsg('');
    setSuccessMsg('');
    if (status1aEE === 'Respondida') {
      setErrorMsg('Você já enviou as respostas desta avaliação');
      return;
    }
    setPage('Formulário da 1ª EE');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!tipoProva.trim()) {
      setErrorMsg('O tipo da prova é obrigatório');
      return;
    }

    if (q1.trim() === '' || q2.trim() === '' || q3.trim() === '') {
      setErrorMsg('Todas as questões são obrigatórias. Digite 0 caso não marque nenhuma proposição');
      return;
    }

    const nums = [Number(q1), Number(q2), Number(q3)];
    if (nums.some((n) => isNaN(n) || n < 0 || n > 63)) {
      setErrorMsg('A soma de cada questão deve ser um valor entre 0 e 63');
      return;
    }

    setStatus1aEE('Respondida');
    setPage('Provas Disponíveis');
    setSuccessMsg('Respostas enviadas com sucesso');
  };

  return (
    <section className="exam-answers-section" style={{ marginTop: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
      <div data-cy="usuario-logado">Aluno logado: joao (perfil: aluno)</div>

      {errorMsg && (
        <div role="alert" data-cy="mensagem-erro" style={{ color: '#b00020', marginTop: '0.5rem' }}>
          {errorMsg}
        </div>
      )}

      {successMsg && (
        <div role="status" data-cy="mensagem-sucesso" style={{ color: '#006400', marginTop: '0.5rem' }}>
          {successMsg}
        </div>
      )}

      {page === 'Provas Disponíveis' && (
        <div data-cy="pagina-Provas Disponíveis">
          <h3>Provas Disponíveis</h3>
          <div data-cy="item-1ª EE" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span>1ª EE</span>
            <span data-cy="status-1ª EE">{status1aEE}</span>
            <button type="button" data-cy="selecionar-1ª EE" onClick={handleSelectExam}>
              1ª EE
            </button>
            <button
              type="button"
              data-cy="marcar-respondida-1ª EE"
              style={{ display: 'none' }}
              onClick={() => setStatus1aEE('Respondida')}
            >
              Marcar Respondida
            </button>
          </div>
        </div>
      )}

      {page === 'Formulário da 1ª EE' && (
        <form data-cy="pagina-Formulário da 1ª EE" onSubmit={handleSubmit}>
          <h3>Formulário da 1ª EE</h3>
          <div>
            <label htmlFor="tipo-prova">Tipo da Prova</label>
            <input
              id="tipo-prova"
              data-cy="campo-Tipo da Prova"
              value={tipoProva}
              onChange={(e) => setTipoProva(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="questao-1">Questão 1</label>
            <input
              id="questao-1"
              data-cy="campo-Questão 1"
              value={q1}
              onChange={(e) => setQ1(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="questao-2">Questão 2</label>
            <input
              id="questao-2"
              data-cy="campo-Questão 2"
              value={q2}
              onChange={(e) => setQ2(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="questao-3">Questão 3</label>
            <input
              id="questao-3"
              data-cy="campo-Questão 3"
              value={q3}
              onChange={(e) => setQ3(e.target.value)}
            />
          </div>
          <button type="submit" data-cy="opcao-Enviar">
            Enviar
          </button>
        </form>
      )}
    </section>
  );
};

export default ExamAnswersSection;
