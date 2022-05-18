import { QuestionCard } from "./QuestionCard";
import { questionCardData } from "../data/questionCardData";

import {
  Box,
  Button,
  Card,
  Group,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";

export const HomeQuestionSection = () => {
  return (
    <div>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
        })}
      >
        <Title pl="xl">Questions </Title>
      </Box>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 1440, cols: 2, spacing: "xl" },
          { maxWidth: 920, cols: 1, spacing: "lg" },
        ]}
      >
        <div style={{ width: 340, margin: "auto" }}>
          <Card shadow="sm" p="lg">
            <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
              <Text weight={500}>Add Your Own Questions</Text>
            </Group>
            <Text size="sm">By ... </Text>
            <Button
              variant="outline"
              fullWidth
              style={{ marginTop: 14 }}
              component={Link}
              to="./create"
            >
              Add new question set
            </Button>
          </Card>
        </div>
        {questionCardData.map((card, idx) => {
          return (
            <QuestionCard
              key={idx}
              title={card.title}
              author={card.author}
              questions={card.questions}
              backgroundColor={card.backgroundColor}
            />
          );
        })}
      </SimpleGrid>
    </div>
  );
};
