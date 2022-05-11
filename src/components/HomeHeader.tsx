import { Anchor, Blockquote, Box, Group, Text, Title } from "@mantine/core";

export const HomeHeader = () => {
  return (
    <div>
      {" "}
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
        })}
      >
        <Text size="lg" pb="xl" pl="xl">
          [Short message from person who prepared the questions.]
        </Text>
        <Text size="lg" pb="sm" pl="xl" variant="text">
          These questions were prepared by{" "}
          <Anchor weight="bold" href="https://mantine.dev/" target="_blank">
            [Person]
          </Anchor>
        </Text>

        <Blockquote
          pb="xl"
          color="blue"
          cite="– Haruki Murakami, Norwegian Wood"
          sx={{ fontSize: "small" }}
        >
          What happens when people open their hearts? They get better.
        </Blockquote>
      </Box>
    </div>
  );
};
