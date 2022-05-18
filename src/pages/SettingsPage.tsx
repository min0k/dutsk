import { Divider, Group, Text, Title } from "@mantine/core";
import { LightDarkModeButton } from "../components/LightDarkModeButton";

export const SettingsPage = () => {
  return (
    <div>
      <Title pb="xl">Settings</Title>
      <Divider my="sm" pb="xl" />
      <Group>
        <Text>Dark Mode</Text>
        <LightDarkModeButton />
      </Group>
    </div>
  );
};
