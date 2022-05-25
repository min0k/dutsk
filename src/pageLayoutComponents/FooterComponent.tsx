import { Anchor, Text } from "@mantine/core";

const PORTFOLIO_URL = "https://www.minokim.com";

export const FooterComponent = () => {
  return (
    <Text align="center" size="sm">
      Made by{" "}
      <Anchor target="_blank" size="sm" href={PORTFOLIO_URL}>
        Mino Kim
      </Anchor>
    </Text>
  );
};
