export interface IQuestionState {
  questions: string[];
  id: string;
  count: number;
}

export interface IRequireAuth {
  children: JSX.Element;
}

export interface IQuestionCard {
  title: string;
  author: string;
  questions: string[];
  backgroundColor: string;
  inProfile?: boolean;
  id?: string;
  count: number;
  setNumberOfQuestions?: React.Dispatch<React.SetStateAction<number>>;
}

export interface IFormInput {
  title: string;
  question1: string;
  question2: string;
  question3: string;
}

export interface IQuestionEntry {
  count: number;
  title: string;
  name: string;
  color: string;
  question1: string;
  question2: string;
  question3: string;
}

export interface IQuestionDataFromApi {
  count: number;
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

export interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}
