export interface IQuestionState {
  questions: string[];
}

export interface IQuestionCard {
  title: string;
  author: string;
  questions: string[];
  backgroundColor?: string;
}
