import { useAuth0 } from "@auth0/auth0-react";
import { Button, ThemeIcon } from "@mantine/core";
import { FiLogOut } from "react-icons/fi";
import { ICON_SIZE } from "../data/navbarData";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      variant="subtle"
      onClick={() => logout({ returnTo: window.location.origin })}
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
        <FiLogOut size={ICON_SIZE} />
      </ThemeIcon>
      Logout
    </Button>
  );
};
