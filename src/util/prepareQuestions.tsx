import { randomColor } from "./randomColor";

export const prepareQuestionsForUpload = (data: any, user: any) => {
  const color = randomColor();
  const dataWithColorAndNameAndCount = {
    ...data,
    color: color,
    name: user.name,
    count: "0",
  };
  return dataWithColorAndNameAndCount;
};
