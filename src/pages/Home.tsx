import { Button, Card, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { HomeHeader } from "../components/HomeHeader";
import { QuestionSetCard } from "../components/QuestionSetCard";
import { questionCardData } from "../data/questionCardData";

export const Home = () => {
  return (
    <Stack>
      <HomeHeader />
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
              to="./Write"
            >
              Add new question set
            </Button>
          </Card>
        </div>
        {questionCardData.map((card, idx) => {
          return (
            <QuestionSetCard
              key={idx}
              title={card.title}
              author={card.author}
              questions={card.questions}
              backgroundColor={card.backgroundColor}
            />
          );
        })}
      </SimpleGrid>
    </Stack>
  );
};
