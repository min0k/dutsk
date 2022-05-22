import { Anchor, Text } from "@mantine/core";

export const FooterComponent = () => {
  return (
    <Text align="center" size="sm">
      Made by{" "}
      <Anchor target="_blank" size="sm" href="https://www.minokim.com">
        Mino Kim
      </Anchor>
    </Text>
  );
};
