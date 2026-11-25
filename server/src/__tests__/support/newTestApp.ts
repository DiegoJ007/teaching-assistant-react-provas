import { Express } from 'express';
import { createApp } from '../../app';
import { StudentSet } from '../../models/StudentSet';
import { Classes } from '../../models/Classes';
import { QuestionBank } from '../../models/QuestionBank';
import { ExamSubmissionSet } from '../../models/ExamSubmissionSet';
import { InMemoryOnlyRepository } from '../../persistence/AppStateRepository';

/** Builds a fresh, empty application that persists nothing. */
export function newTestApp(): Express {
  return createApp({
    students: new StudentSet(),
    classes: new Classes(),
    questionBank: new QuestionBank(),
    examSubmissions: new ExamSubmissionSet(),
    repository: new InMemoryOnlyRepository()
  });
}
