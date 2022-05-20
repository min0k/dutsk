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
  title: string;
  question1: string;
  question2: string;
  question3: string;
}

export interface IQuestionEntry {
  title: string;
  name: string;
  color: string;
  question1: string;
  question2: string;
  question3: string;
}

export interface IQuestionDataFromApi {
  __v: number;
  _id: string;
  color: string;
  createdAt: string;
  name: string;
  question1: string;
  question2: string;
  question3: string;
  questions: string[];
  title: string;
  updatedAt: string;
}
