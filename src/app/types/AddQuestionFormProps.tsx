import { Dispatch, SetStateAction } from 'react';

import { QuestionType } from './QuestionType'
import { QuestionStatesType } from './QuestionStatesType';

export type AddQuestionFormProps = {
  question: QuestionType;
  ordination?: string;
  questionStates: QuestionStatesType;
  setQuestionStates: Dispatch<SetStateAction<QuestionStatesType>>;
};
