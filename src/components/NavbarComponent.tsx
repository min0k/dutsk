import { MainLink } from "./MainLinks";
import { FiHome, FiCircle, FiSettings, FiBookOpen } from "react-icons/fi";

export const NavbarComponent = () => {
  const navbarData = [
    { icon: <FiHome size={16} />, color: "blue", label: "Home" },
    { icon: <FiCircle size={16} />, color: "teal", label: "Free" },
    { icon: <FiSettings size={16} />, color: "violet", label: "Settings" },
    { icon: <FiBookOpen size={16} />, color: "grape", label: "About" },
  ];

  const links = navbarData.map((link) => (
    <MainLink {...link} key={link.label} />
  ));

  return <div>{links}</div>;
};
