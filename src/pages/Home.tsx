import { SimpleGrid, Stack } from "@mantine/core";
import { HomeHeader } from "../components/HomeHeader";
import { QuestionSetCard } from "../components/QuestionSetCard";
import { questionSetData } from "../data/questionSetData";

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
        {questionSetData.map((set) => {
          return (
            <QuestionSetCard
              title={set.title}
              description={set.description}
              image={set.image}
            />
          );
        })}
      </SimpleGrid>
    </Stack>
  );
};
