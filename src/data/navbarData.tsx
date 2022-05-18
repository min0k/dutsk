import { FiHome, FiCircle, FiSettings, FiBookOpen } from "react-icons/fi";

export const ICON_SIZE = 16;

export const navbarLinks = [
  { icon: <FiHome size={ICON_SIZE} />, color: "yellow", label: "home" },
  { icon: <FiCircle size={ICON_SIZE} />, color: "cyan", label: "free" },
  { icon: <FiBookOpen size={ICON_SIZE} />, color: "green", label: "about" },
  { icon: <FiSettings size={ICON_SIZE} />, color: "orange", label: "settings" },
];
