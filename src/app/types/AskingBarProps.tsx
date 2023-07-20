import { Dispatch, SetStateAction } from 'react';

import { QuestionType } from './QuestionType';
import { QuestionStatesType } from './QuestionStatesType';

export type AskingBarProps = {
  question: QuestionType;
  editMode: boolean;
  questionStates: QuestionStatesType;
  setQuestionStates: Dispatch<SetStateAction<QuestionStatesType>>;
  ordination?: string;
};
