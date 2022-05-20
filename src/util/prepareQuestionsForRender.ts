export const prepareQuestionsForRender = (data: any) => {
  const preparedData = data.map((question: any) => {
    const arrayOfQuestions = [];
    arrayOfQuestions.push(question.question1);
    arrayOfQuestions.push(question.question2);
    arrayOfQuestions.push(question.question3);
    return { ...question, questions: arrayOfQuestions };
  });
  return preparedData;
};
