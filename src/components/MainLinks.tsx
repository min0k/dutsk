import { Anchor, ThemeIcon } from "@mantine/core";
import { Link } from "react-router-dom";
import { MainLinkProps } from "../ts/Interfaces";
import { capitalizeFirstLetter } from "../util/capitalizeFirstLetter";

export const MainLink = ({ icon, color, label }: MainLinkProps) => {
  return (
    <Anchor
      component={Link}
      to={label}
      underline={false}
      sx={(theme) => ({
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[0]
            : theme.colors.gray[9],
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <ThemeIcon color={color} variant="light" style={{ marginRight: "20px" }}>
        {icon}
      </ThemeIcon>
      {capitalizeFirstLetter(label)}
    </Anchor>
  );
};
