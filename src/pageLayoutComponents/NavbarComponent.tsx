import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../components/LoginButton";
import { LogoutButton } from "../components/LogoutButton";
import { MainLink } from "../components/MainLinks";
import { navbarLinks } from "../data/navbarData";

export const NavbarComponent = () => {
  const { user } = useAuth0();

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
        {!user && <LoginButton />}
        {user && <LogoutButton />}
      </div>
    </div>
  );
};
