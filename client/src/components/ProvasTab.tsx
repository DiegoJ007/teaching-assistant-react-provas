import React, { useState } from 'react';
import QuestionsTab from './QuestionsTab';
import ExamAnswersSection from './ExamAnswersSection';

type ProvasSection = 'questions' | 'answers';

const ProvasTab: React.FC = () => {
  const [section, setSection] = useState<ProvasSection>('questions');

  return (
    <div className="provas-container">
      <h2>Provas</h2>

      <nav className="exam-navigation" aria-label="Seções de provas">
        <button
          type="button"
          className={section === 'questions' ? 'active' : ''}
          onClick={() => setSection('questions')}
        >
          Banco de questões
        </button>

        <button
          type="button"
          data-cy="secao-respostas-da-prova"
          className={section === 'answers' ? 'active' : ''}
          onClick={() => setSection('answers')}
        >
          Respostas da prova
        </button>
      </nav>

      {section === 'questions' && <QuestionsTab />}

      {section === 'answers' && <ExamAnswersSection />}
    </div>
  );
};

export default ProvasTab;
