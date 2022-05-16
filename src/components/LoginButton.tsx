import { useAuth0 } from "@auth0/auth0-react";
import { ThemeIcon } from "@mantine/core";
import { Button } from "@mantine/core";
import { FiLogIn } from "react-icons/fi";
import { ICON_SIZE } from "../data/navbarData";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="subtle"
      onClick={loginWithRedirect}
      sx={(theme) => ({
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[0]
            : theme.colors.gray[9],
        display: "flex",
        width: "100%",
        borderRadius: theme.radius.sm,
      })}
    >
      <ThemeIcon variant="outline" style={{ marginRight: "20px" }}>
        <FiLogIn size={ICON_SIZE} />
      </ThemeIcon>
      Login
    </Button>
  );
};
