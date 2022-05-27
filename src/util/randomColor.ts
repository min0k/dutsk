import { colors } from "../data/colors";

export const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
