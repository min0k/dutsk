import { IQuestionEntry } from "../ts/Interfaces";

//https://wordwallserver-et57m7q3ca-uw.a.run.app/

export async function addNewQuestions(data: IQuestionEntry) {
  try {
    let response = await fetch(
      `http://localhost:8080/add-questions?title=${data.title}&name=${data.name}&color=${data.color}&question1=${data.question1}&question2=${data.question2}&question3=${data.question3}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
}
