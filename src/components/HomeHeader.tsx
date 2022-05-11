import { Anchor, Box, Mark, Text, Title, useMantineTheme } from "@mantine/core";

export const HomeHeader = () => {
  const theme = useMantineTheme();
  return (
    <div>
      {" "}
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
        })}
      >
        <Title mb="lg" sx={{ color: theme.colors.blue }}>
          <Mark>What is this?</Mark>
        </Title>
        <Text mb="lg">
          These are a set of questions prepared by{" "}
          <Anchor href="https://mantine.dev/" target="_blank">
            John Kim, Ph.D.
          </Anchor>
        </Text>
        <Text>Pick one and start writing, nothing is saved.</Text>
      </Box>
    </div>
  );
};
