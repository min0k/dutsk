import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { LoginButton } from "../components/LoginButton";
import { LogoutButton } from "../components/LogoutButton";
import { MainLink } from "../components/MainLinks";
import { LoggedInUserContext } from "../context/LoggedInUserContext";
import { navbarLinks } from "../data/navbarData";

export const NavbarComponent = () => {
  const { isLoading } = useAuth0();
  const { loggedInUser } = useContext(LoggedInUserContext);
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
        {!isLoading && !loggedInUser && <LoginButton />}
        {!isLoading && loggedInUser && <LogoutButton />}
      </div>
    </div>
  );
};
