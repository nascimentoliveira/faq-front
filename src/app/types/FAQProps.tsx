import { Dispatch, SetStateAction } from 'react';
import { QuestionType } from './QuestionType';

export type FaqStatesType = {
  parentFlag: boolean;
  openAddQuestionForm: boolean;
  loading: boolean;
  editMode: boolean;
  refresh: boolean;
};

export type FAQProps = {
  questions: QuestionType[];
  faqStates: FaqStatesType;
  setFaqStates: Dispatch<SetStateAction<FaqStatesType>>;
  ordination?: string | null;
};
