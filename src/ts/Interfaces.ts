export interface IQuestionState {
  questions: string[];
  id: string;
}

export interface IQuestionCard {
  title: string;
  author: string;
  questions: string[];
  backgroundColor: string;
  inProfile?: boolean;
  id?: string;
  setNumberOfQuestions?: React.Dispatch<React.SetStateAction<number>>;
}

export interface IFormInput {
  title: string;
  question1: string;
  question2: string;
  question3: string;
}

export interface IQuestionEntry {
  count: string;
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
