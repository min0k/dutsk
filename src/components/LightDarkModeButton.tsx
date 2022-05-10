import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export const LightDarkModeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <div>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <IoSunnyOutline size={18} /> : <IoMoonOutline size={18} />}
      </ActionIcon>
    </div>
  );
};
