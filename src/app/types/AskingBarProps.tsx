import { Dispatch, SetStateAction } from 'react';

import { QuestionType } from './QuestionType';
import { QuestionStatesType } from './QuestionStatesType';
import { FaqStatesType } from './FAQProps';

export type AskingBarProps = {
  sequence: number;
  question: QuestionType;
  faqStates: FaqStatesType;
  setFaqStates: Dispatch<SetStateAction<FaqStatesType>>;
  questionStates: QuestionStatesType;
  setQuestionStates: Dispatch<SetStateAction<QuestionStatesType>>;
  ordination?: string;
};
