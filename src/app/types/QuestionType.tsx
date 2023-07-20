export type QuestionType = {
  id: number;
  question: string;
  answer: string | null;
  order: number;
  parent_question_id: number;
  createdAt: string;
  updatedAt: string;
  subquestions: QuestionType[] | null;
};
