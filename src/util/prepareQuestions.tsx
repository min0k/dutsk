import { randomColor } from "./randomColor";

export const prepareQuestions = (data: any, user: any) => {
  const color = randomColor();
  const dataWithColorAndName = { ...data, color: color, name: user.name };
  return dataWithColorAndName;
};
