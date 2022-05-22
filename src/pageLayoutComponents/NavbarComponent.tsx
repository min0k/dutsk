import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { LoginButton } from "../components/LoginButton";
import { LogoutButton } from "../components/LogoutButton";
import { MainLink } from "../components/MainLinks";
import { navbarLinks } from "../data/navbarData";

export const NavbarComponent = () => {
  const { user } = useAuth0();
  const [userFromSession, setUserFromSession] = useState<any>();

  useEffect(() => {
    if (user && sessionStorage.getItem("user") === null) {
      sessionStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user")!);
      setUserFromSession(user);
    }
  }, [user]);

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
        {!userFromSession && <LoginButton />}
        {userFromSession && <LogoutButton />}
      </div>
    </div>
  );
};
