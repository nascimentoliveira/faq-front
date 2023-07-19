export type Question = {
  id: number;
  question: string;
  answer: string | null;
  order: number;
  subquestions: Question[] | null;
};
