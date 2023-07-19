import { Question } from "./QuestionType";

export type FAQProps = {
  questions: Question[];
  editMode: boolean;
  ordination?: string;
};
