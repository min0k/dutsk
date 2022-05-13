import {
  FiHome,
  FiCircle,
  FiSettings,
  FiBookOpen,
  FiLogIn,
} from "react-icons/fi";

const ICON_SIZE = 16;

export const navbarLinks = [
  { icon: <FiHome size={ICON_SIZE} />, color: "yellow", label: "Home" },
  { icon: <FiCircle size={ICON_SIZE} />, color: "cyan", label: "Free" },

  { icon: <FiBookOpen size={ICON_SIZE} />, color: "green", label: "About" },
];

export const navbarSettingsLogout = [
  { icon: <FiSettings size={ICON_SIZE} />, color: "orange", label: "Settings" },
  { icon: <FiLogIn size={ICON_SIZE} />, color: "Indigo", label: "Login" },
];
