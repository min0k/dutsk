import { SimpleGrid, Stack } from "@mantine/core";
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
        {questionCardData.map((card) => {
          return (
            <QuestionSetCard
              title={card.title}
              description={card.description}
              image={card.image}
            />
          );
        })}
      </SimpleGrid>
    </Stack>
  );
};
