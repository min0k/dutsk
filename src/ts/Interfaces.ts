export interface IQuestionState {
  questions: string[];
}

export interface IQuestionCard {
  title: string;
  author: string;
  questions: string[];
  backgroundColor?: string;
}

export interface IFormInput {
  title: String;
  question1: String;
  question2: String;
  question3: String;
}

export interface IQuestionEntry {
  title: String;
  name: String;
  color: String;
  question1: String;
  question2: String;
  question3: String;
}
