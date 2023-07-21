import { Dispatch, SetStateAction } from 'react';
import { FaqStatesType } from './FAQProps';
import { QuestionType } from './QuestionType';

export type QuestionProps = {
  sequence: number;
  question: QuestionType;
  faqStates: FaqStatesType;
  setFaqStates: Dispatch<SetStateAction<FaqStatesType>>;
  ordination?: string;
};
