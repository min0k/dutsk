import { Anchor, Box, List, Text, ThemeIcon, Title } from "@mantine/core";
import { FiChevronRight, FiHome, FiMinus } from "react-icons/fi";
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
        <Title pb="xl" pl="xl">
          What is this?
        </Title>
        <List
          spacing="xs"
          size="md"
          center
          pb="xl"
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <FiChevronRight />
            </ThemeIcon>
          }
        >
          <List.Item>Choose a question set and start writing.</List.Item>
          <List.Item>Nothing you write is saved or seen.</List.Item>
          <List.Item>Create your own questions for others to answer.</List.Item>
        </List>
        {/* <Text size="lg" pb="sm" pl="xl" variant="text">
          These questions were prepared by{" "}
          <Anchor weight="bold" href="https://mantine.dev/" target="_blank">
            [Person]
          </Anchor>
        </Text> */}
      </Box>
    </div>
  );
};
