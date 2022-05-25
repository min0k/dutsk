import { IFormInput } from "../ts/Interfaces";
import { randomColor } from "./randomColor";

export const prepareQuestionsForUpload = (data: IFormInput, user: string) => {
  const color = randomColor();
  const dataWithColorAndNameAndCount = {
    ...data,
    color: color,
    name: user,
    count: 0,
  };
  return dataWithColorAndNameAndCount;
};
