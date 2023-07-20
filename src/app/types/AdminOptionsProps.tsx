import { Dispatch, SetStateAction } from 'react';

import { QuestionType } from './QuestionType'
import { QuestionStatesType } from './QuestionStatesType';

export type AdminOptionsProps = {
  question: QuestionType;
  questionStates: QuestionStatesType;
  setQuestionStates: Dispatch<SetStateAction<QuestionStatesType>>;
};
