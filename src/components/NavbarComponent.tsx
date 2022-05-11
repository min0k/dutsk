import { MainLink } from "./MainLinks";
import { navbarData } from "../data/navbarData";

export const NavbarComponent = () => {
  return (
    <div>
      {navbarData.map((link) => (
        <MainLink {...link} key={link.label} />
      ))}
    </div>
  );
};
