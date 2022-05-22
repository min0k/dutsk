import { Box, List, ThemeIcon, Title } from "@mantine/core";
import { FiChevronRight } from "react-icons/fi";
export const HomeHeaderSection = () => {
  return (
    <div>
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
          withPadding
          spacing="lg"
          size="lg"
          center
          mb="xl"
          mt="xl"
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <FiChevronRight />
            </ThemeIcon>
          }
        >
          <List.Item>Choose a question set and start writing.</List.Item>
          <List.Item>Nothing you write is saved.</List.Item>
          <List.Item>Create your own questions for others to answer.</List.Item>
        </List>
      </Box>
    </div>
  );
};
