import { MainLink } from "./MainLinks";
import { navbarLinks, navbarSettingsLogout } from "../data/navbarData";

export const NavbarComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div>
        {navbarLinks.map((link) => (
          <MainLink {...link} key={link.label} />
        ))}
      </div>
      <div>
        {navbarSettingsLogout.map((link) => (
          <MainLink {...link} key={link.label} />
        ))}
      </div>
    </div>
  );
};
