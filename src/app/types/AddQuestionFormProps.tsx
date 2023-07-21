import { Dispatch, SetStateAction } from 'react';

import { QuestionStatesType } from './QuestionStatesType';
import { FaqStatesType } from './FAQProps';
import { QuestionType } from './QuestionType';

export type AddQuestionFormProps = {
  sequence: number;
  question: QuestionType;
  faqStates: FaqStatesType;
  setFaqStates: Dispatch<SetStateAction<FaqStatesType>>;
  questionStates: QuestionStatesType;
  setQuestionStates: Dispatch<SetStateAction<QuestionStatesType>>;
  ordination?: string;
};
