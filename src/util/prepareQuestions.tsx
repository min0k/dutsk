import { randomColor } from "./randomColor";

export const prepareQuestionsForUpload = (data: any, user: any) => {
  const color = randomColor();
  const dataWithColorAndName = { ...data, color: color, name: user.name };
  return dataWithColorAndName;
};
