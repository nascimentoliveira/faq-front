import { QuestionType } from './QuestionType';

export type QuestionProps = {
  question: QuestionType;
  editMode: boolean;
  ordination?: string;
};
