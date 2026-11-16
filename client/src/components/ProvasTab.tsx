import React from 'react';
import QuestionsTab from './QuestionsTab';
import ExamAnswersSection from './ExamAnswersSection';

const ProvasTab: React.FC = () => {
  return (
    <section className="provas-tab">
      <h2>Provas</h2>

      <QuestionsTab />
      <ExamAnswersSection />
    </section>
  );
};

export default ProvasTab;
