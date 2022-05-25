import { IQuestionDataFromApi } from "../ts/Interfaces";

export const prepareQuestionsForRender = (data: IQuestionDataFromApi[]) => {
  const preparedData = data.map((question) => {
    const arrayOfQuestions = [];
    arrayOfQuestions.push(question.question1);
    arrayOfQuestions.push(question.question2);
    arrayOfQuestions.push(question.question3);
    return { ...question, questions: arrayOfQuestions };
  });
  return preparedData;
};
