import { IQuestionEntry } from "../ts/Interfaces";

export async function addNewQuestions(data: IQuestionEntry) {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_CLOUD_RUN_URL}/add-questions?title=${data.title}&name=${data.name}&color=${data.color}&question1=${data.question1}&question2=${data.question2}&question3=${data.question3}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
}
