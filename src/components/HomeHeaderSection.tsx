import { Anchor, Box, Text } from "@mantine/core";
export const HomeHeaderSection = () => {
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
          [Short description of what this is.]
        </Text>
        <Text size="lg" pb="sm" pl="xl" variant="text">
          These questions were prepared by{" "}
          <Anchor weight="bold" href="https://mantine.dev/" target="_blank">
            [Person]
          </Anchor>
        </Text>
      </Box>
    </div>
  );
};
