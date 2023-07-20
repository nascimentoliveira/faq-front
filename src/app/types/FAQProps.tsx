import { QuestionType } from './QuestionType';

export type FAQProps = {
  questions: QuestionType[];
  editMode: boolean;
  ordination?: string | null;
};
