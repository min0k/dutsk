import { FiHome, FiCircle, FiSettings, FiUser } from "react-icons/fi";

export const ICON_SIZE = 16;

export const navbarLinks = [
  { icon: <FiHome size={ICON_SIZE} />, color: "green", label: "home" },
  { icon: <FiCircle size={ICON_SIZE} />, color: "cyan", label: "free" },
  { icon: <FiUser size={ICON_SIZE} />, color: "pink", label: "profile" },
  { icon: <FiSettings size={ICON_SIZE} />, color: "orange", label: "settings" },
];
